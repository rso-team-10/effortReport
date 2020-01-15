const express = require('express');
const expressGraphQL = require("express-graphql");
const bodyParser = require('body-parser');
const expressPlayground = require('graphql-playground-middleware-express').default;
const cors = require('cors');
const schema = require('./schema');
const app = express();

app.use(cors())

// testing purposes, remove in production
app.get('/playground', expressPlayground({ endpoint: '/effortReport/v1/graphql' }));

app.use(bodyParser.json());

app.use(
  '/v1/graphql',
  expressGraphQL({
   schema,
   graphiql: true
  })
);



module.exports = app;

