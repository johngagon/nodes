Start with basic crud, then go bigger (like done with groovy accounting)

https://react-jsonschema-form.readthedocs.io/en/latest/

1. create react app
(you may need to follow the uninstall directions)
https://create-react-app.dev/docs/getting-started

  npx create-react-app johnsapp
  cd johnsapp
  npm start
* open http://localhost:3000 
* test then stop the server



2. install the forms
https://react-jsonschema-form.readthedocs.io/en/latest/
npm install react-jsonschema-form --save
(backup) and empty out App.js, replace with the sample 
-----------------------------
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
const log = (type) => console.log.bind(console, type);
class App extends React.Component {
  render() {
    return (
        <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
    )
  }
}

export default App;

3. create the json schema     (start with simple stuff, then work up to bigger)
  externalize

4. install React Router and make a simple menu with it.

npm install --save react-router-dom

5. customize the forms page.

   

6. customize the app component to work as a parent.
7. create a listing page generically off the json-schema using double key concept
8. customize the app component to manage state generically.
9. create generic state management (one flux action, dispatcher and store chain)
10. have actions and stores do transactions and loads respectively and test it.
11. using the same json-schema, create a simple api and document store. (update to database as needed).

Other custom things:

https://react.rocks/tag/Form?show=40

look at edit grids, calendars, etc
