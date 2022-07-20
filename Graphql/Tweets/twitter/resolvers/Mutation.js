exports.Mutation={
    createTweet:(parent, {body},{tweets}) => {
        const idInc = tweets.length + 1;
        const tweeting = tweets[0];
        const newTweet = {
            ...tweeting,
            id: "tweet"+idInc,
            body: body
        }

        tweets.push(newTweet);

        return newTweet;
    },

    deleteTweet:(parent, {id}, {tweets}) => {
        
        const dTweet = tweets.find((tweet) => { return tweet.id === id });
        tweets = tweets.filter((tweet) => tweet.id !== id);
        console.log(tweets);
        return dTweet;
    },

    markTweetRead:(parent, {id}, {tweets}) => {
        const index = tweets.findIndex((tweet) => {return tweet.id === id});
        const val = !tweets[index].read;
        tweets[index] = {
            ...tweets[index],
            read:val
        }
        if(index !== -1)
        return true;
        return false;
    },
};