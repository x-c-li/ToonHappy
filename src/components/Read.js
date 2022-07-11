import React from "react";
import ReadList from "ReadList.js";

function Read() {
  return (
    <div className="Read">
      <h1>Find a story</h1>

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around"></div>
        <button className=" btn btn-warning">Just Stories</button>
        <button className=" btn btn-warning">Just Art</button>
        <button className=" btn btn-warning">All</button>
        <button className=" btn btn-warning">Top Rated</button>
        <text>Genre</text>
      </div>

      <div>
        <ReadList />
      </div>
    </div>
  );
}

export default Read;
