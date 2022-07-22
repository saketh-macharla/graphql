const { ApolloServer, gql} = require("apollo-server");
const { tweets, users, notifications, stats, getUser } = require("./db");
const { typeDefs } = require("./schema");
const { Tweet } = require("./resolvers/Tweet");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { dateScalar } = require("./resolvers/Date");

const Auth = users.find(user => user.id === "user1");

test('returns all tweets', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers: { Query, Tweet, Mutation },
      context: {
        notifications,
        stats,
        users,
        tweets,
        Auth
      },
    });
  
    const result = await testServer.executeOperation({
      query: 'query Query {tweets{id}}',
    });
  
    expect(result.errors).toBeUndefined();
    expect(result.data?.tweets).toEqual(
        [
            {
              "id": "tweet1"
            },
            {
              "id": "tweet2"
            },
            {
              "id": "tweet3"
            }
          ]
      );
  });


  test('returns  tweet by Id', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers: { Query, Tweet, Mutation },
      context: {
        notifications,
        stats,
        users,
        tweets,
        Auth
      },
    });
  
    const result = await testServer.executeOperation({
      query: 'query Query($tweetId: ID!){tweet(id: $tweetId) {body}}',
      variables: { tweetId: 'tweet1' },
    });
  
    expect(result.errors).toBeUndefined();
    expect(result.data?.tweet.body).toEqual(
        "Movies are becoming good day by day and every story has true potential in it. Storywriting is at it's peaks"
      );
  });


  test('creating tweet', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers: { Query, Tweet, Mutation },
      context: {
        notifications,
        stats,
        users,
        tweets,
        Auth
      },
    });
  
    const result = await testServer.executeOperation({
      query: 'mutation createTweet($body: String!){createTweet(body: $body){id body}}',
      variables: { body: 'newTweet' },
    });
  
    expect(result.errors).toBeUndefined();
    expect(result.data?.createTweet).toEqual(
        {
            "id": "tweet4",
            "body": "newTweet"
          }
      );
  });



  test('deleting tweet', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers: { Query, Tweet, Mutation },
      context: {
        notifications,
        stats,
        users,
        tweets,
        Auth
      },
    });
  
    const result = await testServer.executeOperation({
      query: 'mutation deleteTweet($deleteTweetId: ID!) {deleteTweet(id: $deleteTweetId) { id body }}',
      variables: { deleteTweetId: "tweet1" },
    });
  
    expect(result.errors).toBeUndefined();
    expect(result.data?.deleteTweet).toEqual(
        {
            "id": "tweet1",
            "body": "Movies are becoming good day by day and every story has true potential in it. Storywriting is at it's peaks"
          }
      );
  });

  test('marking a tweet as read', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers: { Query, Tweet, Mutation },
      context: {
        notifications,
        stats,
        users,
        tweets,
        Auth
      },
    });
  
    const result = await testServer.executeOperation({
      query: 'mutation MarkTweetRead($markTweetReadId: ID!) {markTweetRead(id: $markTweetReadId)}',
      variables: { markTweetReadId: "tweet1" },
    });
  
    expect(result.errors).toBeUndefined();
    expect(result.data).toEqual(
        {
            "markTweetRead": true
          }
      );
  });