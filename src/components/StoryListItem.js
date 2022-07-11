import { Typography } from "@material-ui/core";
import React from "react";
import "./StoryListItem.scss";

function StoryListItem(props) {
  return (
    <div className="StoryListItem">
      <img src={props.image} className="story-cover"></img>
      <Typography>{props.title}</Typography>
    </div>
  );
}

export default StoryListItem;
