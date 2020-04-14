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

export default function App() {
 
  const toDoSchema = schema;
  const [data, setData] = useState(initData.rows); //can wrap setData or hook

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
            />
          </Route>
          <Route path="/add">
            <GeneralForm 
                schema={toDoSchema}
                data={data}
                setData={setData}
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
