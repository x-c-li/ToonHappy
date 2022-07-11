import React from "react";
import "./StoryList.scss";

import StoryListItem from "./StoryListItem";

import noArt from "./imgs/no_art.png";

function StoryList() {
  const stories = [
    {
      image: noArt,
      title: "Gaming Love",
    },
    {
      image: noArt,
      title: "The Stars Between Us",
    },
    {
      image: noArt,
      title: "I'm the Asshole",
    },
    {
      image: noArt,
      title: "Call From The Beyond",
    },
    {
      image: noArt,
      title: "At The Rising Sun",
    },
    {
      image: noArt,
      title: "Arranging My Funeral",
    },
    {
      image: noArt,
      title: "My Perfect Heartbreak",
    },
    {
      image: noArt,
      title: "Travelling In Your Memory",
    },
    {
      image: noArt,
      title: "Winning The Game",
    },
    {
      image: noArt,
      title: "Coming Back From You",
    },
    {
      image: noArt,
      title: "Fight Depression As A Furry",
    },
    {
      image: noArt,
      title: "My Worst Enemy Confessed Their Love",
    },
  ];

  const item = stories.map((item) => {
    return (
      <div>
        <StoryListItem image={item.image} title={item.title} />
      </div>
    );
  });

  return <div className="StoryList">{item}</div>;
}

export default StoryList;
