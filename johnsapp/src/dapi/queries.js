// const $RefParser = require('json-schema-ref-parser');
//const Pool = require('pg').Pool
import $RefParser from 'json-schema-ref-parser';
import Pool from 'pg'

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})


/*
In a production environment, you would want to put your configuration details in a separate file with restrictive
permissions that is not accessible from version control, but for the simplicity of this tutorial , we’re keeping it in the same file as the queries.
*/


/*
GET — / | displayHome()
GET — /users | getUsers()
GET — /users/:id | getUserById()
POST — users | createUser()
PUT — /users/:id | updateUser()
DELETE — /users/:id | deleteUser()
*/

 

  //see: https://apidevtools.org/json-schema-ref-parser/docs/ref-parser.html#refs

async function loadSchema() {
  let schema = await $RefParser.dereference("users-schema.json");
  return schema;
}

//TODO use this.

const _fieldTypeMap = {
  string: 'text',
  integer: 'integer'
}

const _convertSchema = (schema) => {
    const tableName = schema.required[0];
    const entity = schema.properties[tableName];
    const entityProps = entity.items.required;
    let fieldDeclarations = [];
    entityProps.map(prop => {
      const field = entity.items.properties[prop];
      const fieldTypeDeclaration = field.type==='string' ? 'text' : field.type;
      fieldDeclarations.push(` ${prop} ${fieldTypeDeclaration} NOT NULL `);
    });
    //e.g. CREATE TABLE users (  id integer NOT NULL , name text NOT NULL , email text NOT NULL  );
    const ddl = `CREATE TABLE js2pg.${tableName} ( ${fieldDeclarations.join(',')} );`;
    return ddl;
}

const createSchema = async (request, response) => {
  let schema = await loadSchema();
  const ddl = _convertSchema(schema);
  //response.status(200).send(`Schema created ${ddl}`);
  //see Reference spreadsheet
  pool.query(ddl, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Schema created ${result}`);
  });
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
 
const createUser = (request, response) => {
    const { name, email } = request.body
 
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}
 
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
 
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createSchema
}