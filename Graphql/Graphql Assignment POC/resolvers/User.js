const fetch = require("node-fetch");


exports.User={
    organizations_url:async (parent) => {
        console.log(parent.organizations_url)
        const response = await fetch(parent.organizations_url);
        return response.json();
    },
    subscriptions_url: async (parent) => {
        console.log(parent.subscriptions_url)
        const response = await fetch(parent.subscriptions_url);
        return response.json();
    } 
}