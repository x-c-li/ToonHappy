import React from "react";
import ToonArtListItem from "./ToonArtListItem.js";
// import "./StoryListItem.scss";

import art1 from "./imgs/toonart-1.jpeg";
import art2 from "./imgs/toonart-2.jpeg";
import art3 from "./imgs/toonart-3.jpeg";
import art4 from "./imgs/toonart-4.jpeg";
import art5 from "./imgs/toonart-5.jpeg";
import art6 from "./imgs/toonart-6.jpeg";
import art7 from "./imgs/toonart-7.jpeg";
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

function ToonArtList() {
  const arts = [
    {
      image: art1,
    },
    {
      image: art2,
    },
    {
      image: art3,
    },
    {
      image: art4,
    },
    {
      image: art5,
    },
    {
      image: art6,
    },
    {
      image: art7,
    },
    { image: story1 },
    { image: story2 },
    { image: story3 },
    { image: story4 },
    { image: story5 },
    { image: story6 },
    { image: story7 },
    { image: story8 },
    { image: story9 },
    { image: story10 },
    { image: story11 },
    { image: story12 },
    { image: story13 },
  ];

  const item = arts.map((item) => {
    return (
      <div>
        <ToonArtListItem image={item.image} />
      </div>
    );
  });

  return <div className="StoryList">{item}</div>;
}

export default ToonArtList;
