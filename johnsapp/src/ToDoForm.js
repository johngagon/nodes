import React from "react";
import Form from 'react-jsonschema-form'; //Note: not import Form from "@rjsf/core";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};
const formData = {
  title: "First task",
  done: true
};
const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);
const log = (type) => console.log.bind(console, type);

class App extends React.Component {
  render() {
    return (
      <Form schema={schema}
      formData={formData}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")} />
    )
  }
}

export default ToDoForm;


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