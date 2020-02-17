
(async() => {
  require('dotenv').config({ path: __dirname + '/config/.env' })

  const express = require('express');
  const mongoose = require('mongoose');
  const routes = require('./routes');

  const app = express();

  mongoose.connect (`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-fweic.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, {   
      useNewUrlParser:true,
      useUnifiedTopology: true,
  });

  app.use(express.json());
  app.use(routes);


  app.listen(9923);
})()