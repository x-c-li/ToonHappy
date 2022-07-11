import { Typography } from "@material-ui/core";
import React from "react";
import "./StoryListItem.scss";

function ReadListItem(props) {
  return (
    <div className="StoryListItem">
      <img src={props.image} className="story-cover"></img>
      <div className="story-title">{props.title}</div>
    </div>
  );
}

export default ReadListItem;
