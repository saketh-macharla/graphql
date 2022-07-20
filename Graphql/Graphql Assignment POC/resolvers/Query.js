const fetch = require("node-fetch");

exports.Query={
    User: async (parent, {id}, context) => {
        const response = await fetch(`https://api.github.com/user/${id}`);
        return response.json();
    },
    
    Users: async (parent, args, context) => {
        const response = await fetch("https://api.github.com/users");
        return response.json();
    }
}