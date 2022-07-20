const { ApolloServer } = require("apollo-server");

const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema");

const server = new ApolloServer({
     typeDefs, 
     resolvers : {
         Query,
     },
     csrfPrevention: true
    });

    
server.listen({port:4044}).then(({ url }) => {
  console.log("Listening at: " + url);
});