import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import GeneralList from './GeneralList';
import GeneralForm from './GeneralForm';
import schema from './todo-schema.json';
import initData from './init-data.json';

/* 
e.g.:
POST:  /todo (body {})  200 body {id:}             //error -> e.g.: can't add, (not unique somehow)
GET:   /todo,           200 body {[{},{},..]} 
GET"   /todo/:id        200 body {{}}
DELETE /todo/:id        200                        //error -> e.g.: can't find
PUT    /todo/:id        200                        //error -> e.g.: can't find, can't update

TODO implement real api call
*/
function callApi(method, url) {
  const apiCall = () => ({statusCode:200, body:{}});
  const result = apiCall();
  console.log(`${method}  ${url}  :`, result);
  return result;
}

export default function App() {
  console.log('App rendering');
  const toDoSchema = schema;
  const [data, setData] = useState(initData.rows);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/list">GeneralList</Link>
          </li>
          <li>
            <Link to="/add">GeneralForm</Link>
          </li>          
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />{/* TODO: make this a left nav */}
        <Switch>
          <Route path="/list">
          {/*
            Note: a title is a required attribute in all elements of the data array.
            {"rows": [{"title":"aValue"...},...]}
          */}
            <GeneralList 
              schema={toDoSchema}
              data={data}
              setData={setData}
              callApi={callApi}
            />
          </Route>
          <Route path="/add">
            <GeneralForm 
                schema={toDoSchema}
                data={data}
                setData={setData}
                callApi={callApi}
              />        
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// You can think of these components as "pages"
// in your app.
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
