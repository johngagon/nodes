import $RefParser from 'json-schema-ref-parser';


async function _loadSchema(jsonFile) {
  const jsonFilename = jsonFile || "users-schema.json";
  let schema = await $RefParser.dereference(jsonFilename);
  return schema;
}

/*
TODO make use of this instead of the ternary.
const _fieldTypeMap = {
  string: 'text',
  integer: 'integer'
}
*/

const _convertSchema = (schema) => {
    const tableName = schema.required[0];
    const entity = schema.properties[tableName];
    const entityProps = entity.items.required;
    const fieldDeclarations = entityProps.map(prop => {
      const field = entity.items.properties[prop];
      const fieldTypeDeclaration = field.type==='string' ? 'text' : field.type;
      return ` ${prop} ${fieldTypeDeclaration} NOT NULL `;
    });
    //e.g. CREATE TABLE users (  id integer NOT NULL , name text NOT NULL , email text NOT NULL  );
    const ddl = `CREATE TABLE js2pg.${tableName} ( ${fieldDeclarations.join(',')} );`;
    return ddl;
}

const createSchema = async (jsonFile) => {
  let schema = await _loadSchema(jsonFile);
  const ddl = _convertSchema(schema);
  return ddl;
}


const SqlText = {
  createSchema
};

export default SqlText;

/*
TODO these are all hardcoded, softcode or knex system or use crud util
use wrapper
//[id]
const getUserById = 'SELECT * FROM users WHERE id = $1';

const getUsers = 'SELECT * FROM users ORDER BY id ASC';
 
//[name,email] returns 201
const createUser = 'INSERT INTO users (name, email) VALUES ($1, $2)';
 
//[name,email,id]
const updateUser = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';

//[id];
const deleteUser = 'DELETE FROM users WHERE id = $1';

const queries = {
  READ_ALL: getUsers,
  READ_ONE: getUsersById
  CREATE: createUser,
  UPDATE: updateUser,
  DELETE: deleteUser
}
*/