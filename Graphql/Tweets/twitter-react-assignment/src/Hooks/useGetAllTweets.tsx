import { useQuery, gql } from "@apollo/client";

const GET_TWEETSLIST = gql`
  query Tweets {
    tweets {
      id
      read
      body
      date
      userTweet {
        username
        name
      }
      statTweet {
        views
        likes
      }
    }
  }
`;

function useGetAllTweets() {
  const { error, loading, data } = useQuery(GET_TWEETSLIST);
  return {
    error,
    loading,
    data,
  };
}

export default useGetAllTweets;
