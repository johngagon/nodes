import React from "react";
import Form from 'react-jsonschema-form'; //Note: not import Form from "@rjsf/core";

//import schema from './todo-schema.json'; // this can be passed in as a prop from App

const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);
const onChange = ({formData}, e) => console.log("Data changed: ",  formData);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

class GeneralForm extends React.Component {

  render() {
    //console.log(this.props);
    const {schema, data, match} = this.props;
    //console.log(match);
    const { params: { id } } = match;
    const arrayIndex = parseInt(id);//comes from an array index.
    const formData = data.rows[arrayIndex];
    //console.log(formData.rows[arrayIndex]);
    
    log("render");
    return (
      <Form schema={schema}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
      onError={onError} 
      //ref={(form) => {formRef = form;}}
      />
    );
  }
}

export default GeneralForm;

