import React from "react";
import Form from 'react-jsonschema-form'; //Note: not import Form from "@rjsf/core";

import schema from './todo-schema.json';

const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);
const onChange = () => {console.log('changed')};
const onError = () => {console.log('error')};
const formData = {
  title: "First task",
  done: false
};



class App extends React.Component {
  render() {
    log("render");
    return (
      <Form schema={schema}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
      onError={onError} />
    )
  }
}

export default App;


/*
It's less characters to type (double quotes) to have a Javascript Object than a JSON Schema file
but the JSON Schema file is easier to reuse outside of the component that way.
e.g.:

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

*/