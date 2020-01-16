/**
 * Report type
 */
const graphql = require('graphql');

/** Import object types from GraphQL */
const { GraphQLObjectType, GraphQLString } = graphql;

const Report = new GraphQLObjectType({
  name: 'Report',
  fields: () => ({
    //id: { type: GraphQLString },
    //userID: { type: GraphQLString },
    reportDate: { type: GraphQLString },
    reportBody: { type: GraphQLString },
    projectName: { type: GraphQLString }
  })
});
module.exports = Report;