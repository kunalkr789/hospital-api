const express = require('express');
const port = 8000;
const db = require('./config/mongoose');

//passport library
const passport = require('passport');
const passportJWT = require('./config/auth');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', require('./routes'));

app.listen(port, function(err){
  if(err){
    console.log('Error in running the server', err);
  }
  console.log('Express is running on the port:', port);
});