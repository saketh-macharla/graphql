const {ApolloServer} = require("apollo-server");
const {db } = require("./db");
const {typeDefs} = require("./schema")
const {Query} = require("./resolvers/Query")
const {Product} = require("./resolvers/Product")
const {Category} = require("./resolvers/Category")
const {Mutation} = require("./resolvers/Mutation")


// scaler types: String, Int, Float, Boolean, ID!



const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Category,
        Product,
        Mutation
    },
    context:{
        db
    }
})

 

server.listen().then(({url}) => {
    console.log("Server is ready at "+ url)
})
