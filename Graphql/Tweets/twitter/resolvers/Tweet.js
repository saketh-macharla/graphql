exports.Tweet={
    userTweet:({AuthorId}, args, {users}) => {
        return users.find((user) => user.id === AuthorId);
    },
    statTweet:({StatsId}, args, {stats}) => {
        return stats.find((stat) => stat.id === StatsId);
    },
};