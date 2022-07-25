import {  gql, useMutation } from "@apollo/client";
import { InputBase } from "@mui/material";
import { ReactNode, useState } from "react";

const CREATE_TWEET = gql`
mutation CreateMutation($body: String!){
  createTweet(body: $body) {
    id
    body
    date
  }
}
`;

function Create() {

    const [body, setBody] = useState<String>();

    const [createT, {data, loading, error}] = useMutation(CREATE_TWEET,{variables:{
        body
    }})
    
    return (
      <InputBase
          placeholder={"Tweet to @twitterapi"}
          onKeyDown={(e) => {
            if(e.key === "Enter")
            {
              console.log(body);
              createT();
              window.location.reload();
            }
          }}
          onChange={ (e) => { setBody(e.target.value) } }
          style={{
            border: "1px solid grey",
            backgroundColor: "white",
            width: "99%",
            margin: "5px 5px",
          }}
        />
    );
}

export default Create;