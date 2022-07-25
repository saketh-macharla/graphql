const { GraphQLScalarType, Kind, GraphQLError } = require("graphql");

exports.dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: "Date custom scalar",
    serialize(value){
        const date = new Date(value);
        return date.toISOString().split("T")[0];
    },
    parseValue(value){
        return new Date(value);
    },
    parseLiteral(value){
            if (ast.kind === Kind.INT) {
                return new Date(parseInt(ast.value, 10));
            }
          return GraphQLError( "Query Error: Can Only Pass the Valid Date" );
    }
})