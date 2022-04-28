import { Typography } from "@material-ui/core";
import React from "react";
import "./StoryListItem.scss";

//import fake data from a js file

import story1 from "./imgs/story-ex-1.jpeg";

function StoryListItem() {
  return (
    <div className="StoryListItem">
      <div>
        <img src={story1} className="story-cover"></img>
        <Typography>Story 1 Title</Typography>
      </div>
    </div>
  );
}

export default StoryListItem;
