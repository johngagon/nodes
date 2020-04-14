import React from "react";
import Form from 'react-jsonschema-form'; 
import methods from './methods';

const {PUT, POST} = methods;
// Spammy: const onChange = ({formData}, e) => console.log("Data changed: ",  formData);
const onChange = ({formData}, e) => {};
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

class GeneralForm extends React.Component {
  
  onSave (formData, data, e) {
    const {setData, callApi, schema} = this.props;
    const found = data.findIndex(item => item.title === formData.title );
    if(found !== -1){
      const newData = data.map((item, index) => {
        return index === found ? formData : item;
      });
      setData(data => newData);
      const getUrl = `${schema.title}`;
      callApi(PUT, getUrl);      
    }else{
      setData(data => data.concat(formData));
      const getUrl = `${schema.title}`;
      callApi(POST, getUrl);      
    }
    console.log("Data submitted: ",  formData);
  }

  render() {
    console.log('rendering.. ',this.props);
    const {schema, data, match} = this.props;

    let formData;
    if (match) {
      const { params: { id } } = match;
      const arrayIndex = parseInt(id);  // Note: comes from an array index.
      formData = data[arrayIndex];
    }

    return (
      <Form schema={schema}
      formData={formData}
      onChange={onChange}
      onSubmit={({formData}, e)=>this.onSave(formData, data, e)}
      onError={onError} 
      />
    );
  }
}

export default GeneralForm;
