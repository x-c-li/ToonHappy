import React from "react";
import "./StoryList.scss";

import StoryListItem from "./StoryListItem";

import noArt from "./imgs/no_art.png";
import story1 from "./imgs/story-ex-1.jpeg";
import story2 from "./imgs/story-ex-2.jpeg";
import story3 from "./imgs/story-ex-3.jpeg";
import story4 from "./imgs/story-ex-4.jpeg";
import story5 from "./imgs/story-ex-5.jpeg";
import story6 from "./imgs/story-ex-6.jpeg";
import story7 from "./imgs/story-ex-7.jpeg";
import story8 from "./imgs/story-ex-8.jpeg";

//fake data

function StoryList() {
  const stories = [
    {
      image: story1,
      title: "Gaming Love",
    },
    {
      image: noArt,
      title: "The Stars Between Us",
    },
    {
      image: story2,
      title: "I'm the Asshole",
    },
    {
      image: story3,
      title: "Call From The Beyond",
    },
    {
      image: story4,
      title: "At The Rising Sun",
    },
    {
      image: noArt,
      title: "Arranging My Funeral",
    },
    {
      image: story5,
      title: "My Perfect Heartbreak",
    },
    {
      image: story6,
      title: "Travelling In Your Memory",
    },
    {
      image: noArt,
      title: "Winning The Game",
    },
    {
      image: story7,
      title: "Coming Back From You",
    },
    {
      image: story8,
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
