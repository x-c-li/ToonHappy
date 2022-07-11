import React from "react";
import "./ToonArtListItem";
// import "./StoryListItem.scss";

import art1 from "./imgs/toonart-1";
import art2 from "./imgs/toonart-2";
import art3 from "./imgs/toonart-3";
import art4 from "./imgs/toonart-4";
import art5 from "./imgs/toonart-5";
import art6 from "./imgs/toonart-6";
import art7 from "./imgs/toonart-7";

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
