const { ApolloServer, gql} = require("apollo-server");
const { tweets, users, notifications, stats, getUser } = require("./db");
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
    introspection: true,
    debug:false,
    context:({req}) => {
        const auth = (req.headers && req.headers.authorization) || '';
        const Auth = getUser(auth)
        console.log(`auth ${auth}`)
        console.log(`Auth ${Auth && Auth.id}`)
        
       return  {
            tweets,
            users,
            notifications,
            stats,
            Auth
            };
    },
    csrfPrevention: true,
});

server.listen().then(({url}) => {
    console.log("Server is ready "+url);
});