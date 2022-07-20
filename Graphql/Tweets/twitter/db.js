const tweets=[
    { 
        id:"tweet1",
        body: "Movies are becoming good day by day and every story has true potential in it. Storywriting is at it's peaks",
        date:"2022-04-15",
        AuthorId:"user"+1,
        StatsId:"stats"+11,
        read: true
    },
    { 
        id:"tweet"+2,
        body: "React is the best front end technnology as of now and crossing all it's boundaries",
        date:"2019-05-06",
        AuthorId:"user"+2,
        StatsId:"stats"+21,
        read: false
    },
    { 
        id:"tweet"+3,
        body: "Tata rules the India in manufacturing cars and released best cars such as nexon, harrier, tigor etc..",
        date:"2021-03-05",
        AuthorId:"user"+3,
        StatsId:"stats"+31,
        read: false 
    }
]

const users=[
    {
        id: "user"+1,
        username: "GaneshDende",
        first_name: "Ganesh",
        last_name: "Dende",
        full_name: "Ganesh Dende",
        name: "ganeshdende",
        avatar_url: "https://www.avatar.com"
    },
    {
        id: "user"+2,
        username: "SakethM",
        first_name: "Saketh",
        last_name: "Macharla",
        full_name: "Saketh Macharla",
        name: "sakethmacharla",
        avatar_url: "https://www.avatar.com"
    },
    {
        id: "user"+3,
        username: "shirishavs",
        first_name: "Shirish",
        last_name: "AVS",
        full_name: "Shirish AVS",
        name: "shirishavs",
        avatar_url: "https://www.avatar.com"
    }
]

const stats=[
    {
        id:"stat"+11,
        views: 45,
        likes: 19,
        retweets: 8,
        responses: 6
    },
    {
        id:"stat"+21,
        views: 66,
        likes: 44,
        retweets: 24,
        responses: 15
    },
    {
        id:"stat"+31,
        views: 552,
        likes: 415,
        retweets: 59,
        responses: 66
    }
]

const notifications=[
    {
        id:"note"+1,
        body:"Ravi commented on your tweet"
    },
    {
        id:"note"+2,
        body:"Your tweet is reaching places"
    },
    {
        id:"note"+3,
        body:"Publish your tweet globally"
    }
]

module.exports={
    tweets,
    users,
    notifications,
    stats,
}