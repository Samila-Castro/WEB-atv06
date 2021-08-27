const express = require("express");
const cors = require("cors");
const router = express.Router();
const auth = require("./services/auth");
const jwt = require("./services/jwt");


// const Usuario = require('../services/usuario');
const { User, Post, Comment } = require('../app/models');    // const Usuario = require('./usuario');
  // const Usuario = require('./usuario');
 


const app = express();

app.use(express.json());
app.use(cors());

app.post('/session', async function(req, res, next) {
  const { name, password } = req.body;
  try {
    var user = await User.findOne({where: {name} });
    

    if (user === null) {
      return res.status(400).json({ error: "User not found" });
    }
    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid password" });
    }

    var payload = { id: user.id };
    var token = jwt.generateToken(payload);

    res.json({ user, token });
  } catch (error) {
    next(error);
  }
});

app.post('/post', auth.authenticate(), async(req,res)=>{

  const data = { ...req.body , owner: req.user.id};
  const post = await Post.create(data);
  res.json(post);
  

});

app.post('/user', auth.authenticate(),async (req, res) => {
  const user = await User.create(req.body);
  res.json(user); 
});

app.get('/user', auth.authenticate(),async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});

app.get('/post', auth.authenticate(),async (req, res) => {
  const posts = await Post.findAll();
  const postsWithComments =  posts.map(async post=>({
    id: post.id,
    texto:post.texto,
    comments: await Comment.findAll( {where: { postId: post.id } })
  }))
  res.json(await Promise.all(postsWithComments));
});

app.post('/comment', auth.authenticate(), async(req,res)=>{

  const data = { ...req.body , owner: req.user.id};
  const comment = await Comment.create(data);
  res.json(comment);
  

});
 
app.get('/comment', auth.authenticate(),async (req, res) => {
  const comment = await Comment.findAll();
  res.json(comment);
});

app.get('/comment/:postId', auth.authenticate(),async (req, res) => {
  const { postId } = req.params
  const comment = await Comment.findAll( {where: { postId } });
  res.json(comment);
});

module.exports = app;
