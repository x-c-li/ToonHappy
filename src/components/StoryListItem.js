import { Typography } from "@material-ui/core";
import React from "react";
import "./StoryListItem.scss";

function StoryListItem(props) {
  return (
    <div className="StoryListItem">
      <div>
        <img src={props.image} className="story-cover"></img>
        <Typography>{props.title}</Typography>
      </div>
      {/* <div>
        <img src={noArt} className="story-cover"></img>
        <Typography>The Stars Between Us</Typography>
      </div>
      <img src={story2} className="story-cover"></img>

      <img src={story3} className="story-cover"></img>

      <img src={story4} className="story-cover"></img>

      <img src={story7} className="story-cover"></img>

      <img src={story8} className="story-cover"></img> */}
    </div>
  );
}

export default StoryListItem;
