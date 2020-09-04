const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

mongoose.connect("mongodb://127.0.0.1:27017/graphql-first", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });
app.listen(3333);
