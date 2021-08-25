const express = require("express");
const cors = require("cors");
// const Usuario = require('../services/usuario');
const { User } = require('../app/models');    // const Usuario = require('./usuario');
 


const {
  uuid
} = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());



app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/register', async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});

module.exports = app;
