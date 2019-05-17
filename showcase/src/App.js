import React from 'react';

//import Button from '@material-ui/core/Button';
import { Typography, Card, Paper, Button, Divider } from '@material-ui/core';
let data = require('./data.json');

const title = 'My Minimal React Webpack Babel Material UI Showcase';

function App() {
  console.log(data);
  let menus = data.menu;
  return (
    <div>
      <Card>
      <Typography variant="h3" gutterBottom>{title}</Typography>
      </Card>
      <Divider light/>
      <Paper>
        <Button variant="contained" color="primary">
          Push me!
        </Button>
      </Paper>
    </div>
  );
}

export default App;