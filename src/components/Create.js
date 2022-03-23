import React from "react";
import "./Create.scss";
import logo from "./imgs/logo.png";

function Create() {
  return (
    <div className="Create">
      <div className="page-title">Create</div>

      <div className="button-options">
        <div>
          <button className="writer">Writer</button>
          <img src={logo}></img>
        </div>

        <div>
          <button className="artist">Toon Artist</button>
          <img src={logo}></img>
        </div>
      </div>
    </div>
  );
}

export default Create;
