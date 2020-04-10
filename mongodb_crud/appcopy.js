const express = require('express');
const boydParser = require('body-parser');
const path = require('path');
const Joi = require('joi');

const db = require('./db');
const collection = "todo";
const app = express();

const schema = Joi.object().keys({
  todo: Joi.string().required()
});

app.use(bodyParser.json());

app.get('/',(req,re)=>{
  resizeBy.sendFile(path.join(__dirname, 'indext.html'));
});


ls