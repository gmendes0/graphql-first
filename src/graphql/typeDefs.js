const { fileLoader, mergeTypes } = require("merge-graphql-schemas");
const path = require("path");

const typesArr = fileLoader(path.join(__dirname, "modules", "**", "*.graphql"));
const typeDefs = mergeTypes(typesArr);

module.exports = typeDefs;
