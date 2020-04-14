import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import GeneralForm from './GeneralForm';
import methods from './methods';
const {GET, DELETE} = methods;

class GeneralList extends React.Component {

  onDelete(idx) {
    const {schema, data, setData, callApi} = this.props;
    const newData = data.filter((item, index) => {
      return index !== idx;
    });
    setData(data => newData);
    const delUrl = `${schema.title}/${idx}`;
    callApi(DELETE, delUrl);
  }

  render() {
    const {schema, data, setData, callApi} = this.props;
    const getUrl = `${schema.title}`;
    callApi(GET, getUrl);

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
              render={(props) => <GeneralForm {...props} data={data} schema={schema} setData={setData} callApi={callApi}/>}/>
          </Switch>
        </Router>
        
      </>
    );
  }

}

export default GeneralList;
