const {ApolloServer} = require("apollo-server");
const {typeDefs} = require("./schema");
const {Query} = require("./resolvers/Query");
const {User} = require("./resolvers/User");



// scaler types: String, Int, Float, Boolean, ID!



const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        User
    },
    csrfPrevention: true
})

 

server.listen({
    port:4001,
}).then(({url}) => {
    console.log("Server is ready at "+ url)
})
