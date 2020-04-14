import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import GeneralForm from './GeneralForm';

class GeneralList extends React.Component {

  render() {
    const {schema, listData} = this.props;
    
    const renderedList = listData.rows.map((row, idx) => {
      return (
        <li key={idx}><Link to={`/form/${idx}`}>{row.title}</Link></li>
      );
    });

    return (
      <>
        <Router>
          <ul>{renderedList}</ul>
          <Switch>
            <Route exact path="/form/:id" render={(props) => <GeneralForm {...props} data={listData} schema={schema}/>}/>
          </Switch>
        </Router>
        
      </>
    );
  }

}

export default GeneralList;