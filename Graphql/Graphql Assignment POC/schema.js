const { gql } = require("apollo-server");

exports.typeDefs = gql`

    type User{
        login: String,
        id: Int,
        node_id: String,
        type: String,
        site_admin: Boolean,
        name: String,
        company: String,
        blog: String,
        location: String,
        email: String,
        hireable: Boolean,
        organizations_url: [OrgURL],
        subscriptions_url: [SubURL],
        bio: String,
        twitter_username: String,
        public_repos: Int,
        public_gists: Int,
        followers: Int,
        following: Int,
    }

    type OrgURL{     
        login: String,
        id: Int,
        node_id: String,
        url: String,
        repos_url: String,
        events_url: String,
        hooks_url: String,
        issues_url: String,
        members_url: String,
        public_members_url: String,
        avatar_url: String,
        description: String 
    }

    type SubURL{
        id: Int,
        node_id: String,
        name: String,
        full_name: String,
        private: Boolean,
        owner: Owner
    }

    type Owner{
        login: String,
        id: Int,
        node_id: String,
        avatar_url: String,
        gravatar_id: String,
        url: String,
        html_url: String,
        followers_url: String,
        following_url: String,
        gists_url: String,
        starred_url: String,
        subscriptions_url: String,
        organizations_url: String,
        repos_url: String,
        events_url: String,
        received_events_url: String,
        type: String,
        site_admin: Boolean
    }

    type Query{
        User(id: Int!): User
        Users: [User]
    }
`;
