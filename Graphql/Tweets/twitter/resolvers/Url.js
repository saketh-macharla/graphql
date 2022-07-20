const { GraphQLScalarType, Kind} = require("graphql");

exports.urlScalar = GraphQLScalarType({
    name: "Url",
    description: "Url Scalar",
    serailizer(value){

    },
    parseValue(value){

    },
    parseLiteral(value){
        
    }
})