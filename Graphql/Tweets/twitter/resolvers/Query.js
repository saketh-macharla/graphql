exports.Query = {
    tweets: (parent, { limit, skip, sort_field, sort_order }, { tweets }) => {
      let limitTweets = tweets;
      if (skip !== null) {
        limitTweets = limitTweets.filter(
          (limitTweet, key) => !(key + 1 === skip)
        );
      }
  
      if (limit > 0) {
        limitTweets = limitTweets.filter((limitTweet, key) => key < limit);
      }
  
      if(sort_order)
      {
      if(sort_order.toLowerCase() === "asc")
      {
        limitTweets.sort((a, b) => a[sort_field].toLowerCase() > b[sort_field].toLowerCase() ? 1 : -1);
      }
      if(sort_order.toLowerCase() === "desc")
      {
        limitTweets.sort((a, b) => a[sort_field].toLowerCase() < b[sort_field].toLowerCase() ? 1 : -1);
      }
    }
      
      // limitTweets = limitTweets.findMany({
      //     skip: skip,
      //     take: limit,
      // })
      return limitTweets;
    },
    tweet: (parent, { id }, { tweets }) => {
      return tweets.find((tweet) => tweet.id === id);
    },
  
    users: (parent, args, { users }) => {
      return users;
    },
    user: (parent, { id }, { users }) => {
      return users.find((user) => user.id === id);
    },
  
    notifications: (parent, {limit}, { notifications }) => {
      let limitedNotes = notifications;
      if (limit > 0) {
        limitedNotes = limitedNotes.filter((limitedNote, key) => key < limit);
      }
      return limitedNotes;
    },
    notification: (parent, { id }, { notifications }) => {
      return notifications.find((notification) => notification.id === id);
    },
  
    stats: (parent, args, { stats }) => {
      return stats;
    },
    stat: (parent, { id }, { stats }) => {
      return stats.find((stat) => stat.id === id);
    },
  
    tweetsMeta: (parent, args, { tweets }) => {
      const size = tweets.length;
      const MetaEx = {
        count: size
      }
      return MetaEx;
    },
  
    notificationsMeta: (parent, args, { notifications }) => {
      const size = notifications.length;
      const MetaEx = {
        count: size
      }
      return MetaEx;
    },
  };