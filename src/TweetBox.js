import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material/";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png"></Avatar>
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
