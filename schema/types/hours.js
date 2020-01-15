/**
 * Hours type
 */
const graphql = require('graphql');

/** Import object types from GraphQL */
const { GraphQLObjectType, GraphQLString } = graphql;


// TODO: fix fields
const Hours = new GraphQLObjectType({
  name: 'Hours',
  fields: () => ({
    //id: { type: GraphQLString },
    //userID: { type: GraphQLString },
    time_today:{type: GraphQLString},
    tstamp: {type: GraphQLString}
  })
});

module.exports = Hours;