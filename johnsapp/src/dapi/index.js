const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (request, response) =>{
  response.json({info: 'Node.js, Express and Postgres API'});
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);

//curl --data "name=Elain&email=elain@example.com" http://localhost:3000/users
app.post('/users', db.createUser);

app.post('/ddl/users', db.createSchema);

//curl -X PUT -d "name=Kramer" -d "email=kramer@example.com" http://localhost:3000/users/1
app.put('/users:id', db.updateUser);

//curl -X "DELETE" http://localhost:3000/users/1
app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
