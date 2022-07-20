const { ApolloServer, gql} = require("apollo-server");
const { tweets, users, notifications, stats } = require("./db");
const { typeDefs } = require("./schema");
const { Tweet } = require("./resolvers/Tweet");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { dateScalar } = require("./resolvers/Date");

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Tweet,
        Mutation,
        Date: dateScalar,
    },
    context:{
        tweets,
        users,
        notifications,
        stats,
    },
    csrfPrevention: true,
});

server.listen().then(({url}) => {
    console.log("Server is ready "+url);
});