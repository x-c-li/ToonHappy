import React from "react";
// import "./StoryListItem.scss";

function ToonArtListItem(props) {
  return (
    <div className="StoryListItem">
      <img src={props.image} className="story-cover"></img>
    </div>
  );
}

export default ToonArtListItem;
