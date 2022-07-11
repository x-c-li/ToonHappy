import React from "react";
import "./StoryList.scss";
import ReadListItem from "./ReadListItem";
// import StoryListItem from "./StoryListItem";

import story1 from "./imgs/story-ex-1.jpeg";
import story2 from "./imgs/story-ex-2.jpeg";
import story3 from "./imgs/story-ex-3.jpeg";
import story4 from "./imgs/story-ex-4.jpeg";
import story5 from "./imgs/story-ex-5.jpeg";
import story6 from "./imgs/story-ex-6.jpeg";
import story7 from "./imgs/story-ex-7.jpeg";
import story8 from "./imgs/story-ex-8.jpeg";
import story9 from "./imgs/story-ex-9.jpeg";
import story10 from "./imgs/story-ex-10.jpeg";
import story11 from "./imgs/story-ex-11.jpeg";
import story12 from "./imgs/story-ex-12.jpeg";
import story13 from "./imgs/story-ex-13.jpeg";

//fake data

function StoryList() {
  const stories = [
    {
      image: story1,
      title: "Gaming Love",
    },
    {
      image: story2,
      title: "The Stars Between Us",
    },
    {
      image: story3,
      title: "I'm the Asshole",
    },
    {
      image: story4,
      title: "Call From The Beyond",
    },
    {
      image: story5,
      title: "At The Rising Sun",
    },
    {
      image: story6,
      title: "Arranging My Funeral",
    },
    {
      image: story7,
      title: "My Perfect Heartbreak",
    },
    {
      image: story8,
      title: "Travelling In Your Memory",
    },
    {
      image: story9,
      title: "Pugalicious: My Fairy Godmother Turned Me Into A Pug",
    },
    {
      image: story10,
      title: "Robbing Banks",
    },
    {
      image: story11,
      title: "I Married A Ghost",
    },
    {
      image: story12,
      title: "Surviving StartUps: A True Story Of A Tired Employee",
    },
    {
      image: story13,
      title: "My Kid Is Better Than Your Kid",
    },
  ];

  const item = stories.map((item) => {
    return (
      <div>
        <ReadListItem image={item.image} title={item.title} />
      </div>
    );
  });

  return <div className="StoryList">{item}</div>;
}

export default StoryList;
