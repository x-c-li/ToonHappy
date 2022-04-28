import React from "react";
//import fake data from a js file

import story1 from "./imgs/story-ex-1.jpeg";

function StoryListItem() {
  return (
    <div className="StoryListItem">
      <div>image title</div>
      <div>image1 title1</div>
      <div>
        image2 title2
        <img src={story1} className="story-cover"></img>
      </div>
    </div>
  );
}

export default StoryListItem;
