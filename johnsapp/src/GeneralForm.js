import React from "react";
import Form from 'react-jsonschema-form'; //Note: not import Form from "@rjsf/core";

//import schema from './todo-schema.json'; // this can be passed in as a prop from App

const log = (type) => console.log.bind(console, type);

const onChange = ({formData}, e) => console.log("Data changed: ",  formData);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

class GeneralForm extends React.Component {
  
  onSubmit (formData, data, e) {
    const {setData} = this.props;
    const found = data.findIndex(item => item.title === formData.title );
    if(found !== -1){
      const newData = data.map((item, index) => {
        return index === found ? formData : item;
      });
      setData(data => newData);
    }else{
      setData(data => data.concat(formData));
    }
    console.log("Data submitted: ",  formData);
  }

  render() {
    console.log(this.props);
    const {schema, data, match} = this.props;
    //console.log(match);
    let formData;
    if (match) {
      const { params: { id } } = match;
      const arrayIndex = parseInt(id);//comes from an array index.
      formData = data[arrayIndex];
    }
    //console.log(formData.rows[arrayIndex]);
    
    log("render");
    return (
      <Form schema={schema}
      formData={formData}
      onChange={onChange}
      onSubmit={({formData}, e)=>this.onSubmit(formData, data, e)}
      onError={onError} 
      //ref={(form) => {formRef = form;}}
      />
    );
  }
}

export default GeneralForm;

