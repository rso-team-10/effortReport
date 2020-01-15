const graphql = require('graphql');
const axios = require('axios');
const { GraphQLObjectType, GraphQLList } = graphql;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/** Data Types */
const report = require('./types/report');
const hours = require('./types/hours');

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    reports: {
      type: new GraphQLList(report),
      args:{
          userID : {type: graphql.GraphQLString}
      },
      resolve(_, {userID}) {
       return axios
         .get(`https://35.241.136.34/dailyReports/` + userID)
         .then(console.log("Request for report with userID:" + userID))
         .then(response => response.data);
      }
    },
    hours: {
        type: new GraphQLList(hours),
        args:{
            userID : {type: graphql.GraphQLString}
        },
        resolve(_, {userID}) {
         return axios
           .get(`https://35.241.136.34/time_service/` + userID)
           .then(console.log("Request for hours with userID:" + userID))
           .then(response => [response.data]);
        }
      }
  })
});

module.exports = rootQuery;