import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import GeneralForm from './GeneralForm';

class GeneralList extends React.Component {

  onDelete(idx) {
    const {data, setData} = this.props;
    const newData = data.filter((item, index) => {
      return index !== idx;
    });
    setData(data => newData); //TODO use the schema main title attribute e.g.: todo to construct RESTful calls. see submit calls in form.
    /* 
    e.g.:
    POST:  /todo (body {})  200 body {id:}             //can't add, (not unique somehow)
    GET:   /todo,           200 body {[{},{},..]} 
    GET"   /todo/:id        200 body {{}}
    DELETE /todo/:id        200                        //can't find
    PUT    /todo/:id        200                        //can't find, can't do
    */
  }

  render() {
    const {schema, data, setData} = this.props;
    
    const renderedList = data.map((row, idx) => {
      // TODO if task is done, don't allow delete, also, replace button with nice icon
      return (
        <li key={idx}><Link to={`/form/${idx}`}>{row.title}</Link> <button onClick={()=>this.onDelete(idx)}>Delete</button></li>
      );
    });

    return (
      <>
        <Router>
          <ul>{renderedList}</ul>
          <Switch>
            <Route exact path="/form/:id" 
              render={(props) => <GeneralForm {...props} data={data} schema={schema} setData={setData}/>}/>
          </Switch>
        </Router>
        
      </>
    );
  }

}

export default GeneralList;