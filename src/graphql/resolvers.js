const { fileLoader, mergeResolvers } = require("merge-graphql-schemas");
const path = require("path");

const resolversArr = fileLoader(
  path.join(__dirname, "modules", "**", "resolvers.js")
);
const resolvers = mergeResolvers(resolversArr);

module.exports = resolvers;
