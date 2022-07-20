import React, { ReactNode, useState } from "react";
import useGetAllTweets from "../Hooks/useGetAllTweets";
import logo from "../images/tlogo.jpeg";
import verify from "../images/verify.png";
import green from "../images/greenDot.png";
import gray from "../images/grayDot.png";
import sum from "../images/sum.png";
import Twitl from "../images/twitl.png";
import "./Tweets.css";
import { Button, InputBase, Link } from "@mui/material";

import { gql, useMutation } from "@apollo/client";
import Create from "./Create";

const READ_TWEET = gql`
  mutation MarkTweetRead($markTweetReadId: ID!) {
    markTweetRead(id: $markTweetReadId)
  }
`;

function Tweets() {
  const { error, loading, data } = useGetAllTweets();

  const [idVal, setIdVal] = useState<string>();
  const [readOrNot, { data: data1, loading: loading1, error: error1 }] =
    useMutation(READ_TWEET, {
      variables: {
        markTweetReadId: idVal,
      },
    });
  console.log(error, loading, data);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Something Went Wrong...</h1>;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString([], options);
  };

  return (
    <div>
      <div className="Tweetcontain">
        <h1>Tweets</h1>
        <Button
          style={{
            textTransform: "none",
            color: "black",
            backgroundColor: "lightgrey",
            marginRight: "30px",
            height: "30px",
            marginTop: "20px",
          }}
          startIcon={
            <img
              src={Twitl}
              alt="verify image"
              height={"20px"}
              width={"20px"}
            />
          }
        >
          Follow @twitterapi
        </Button>
      </div>
      {data.tweets.map(
        (
          tweet: {
            body: ReactNode;
            date: string;
            id: string;
            read: boolean;
            userTweet: {
              username: string;
              name: string;
            };
            statTweet: {
              views: string | number;
            };
          },
          key: any
        ) => (
          <div className="contain" key={key}>
            <img
              src={logo}
              alt="twitter image"
              height={"80px"}
              width={"80px"}
            />
            <div style={{ width: "100%" }}>
              <div
                className={"topcontain"}
                onClick={async () => {
                  await setIdVal(tweet.id);
                  await readOrNot();
                  window.location.reload();
                }}
              >
                <div className="topcontainleft">
                  {tweet.userTweet.username}{" "}
                  <img
                    src={verify}
                    alt="verify image"
                    height={"20px"}
                    width={"20px"}
                  />{" "}
                  @{tweet.userTweet.name}
                  {tweet.read ? (
                    <img
                      src={green}
                      alt="verify image"
                      height={"10px"}
                      width={"10px"}
                    />
                  ) : (
                    <img
                      src={gray}
                      alt="verify image"
                      height={"10px"}
                      width={"10px"}
                    />
                  )}
                </div>
                <div className="topcontainright">{formatDate(tweet.date)}</div>
              </div>
              <div className="bodycontain">
                {tweet.body}
                <div>
                  <Button
                    style={{ textTransform: "none", color: "grey" }}
                    startIcon={
                      <img
                        src={sum}
                        alt="verify image"
                        height={"20px"}
                        width={"20px"}
                      />
                    }
                  >
                    Show Summary
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <div style={{ width: "82%", backgroundColor: "lightgray" }}>
        <Create></Create>
      </div>
    </div>
  );
}

export default Tweets;
