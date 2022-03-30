import React from "react";
import "./Create.scss";
import logo from "./imgs/logo.png";

function Create() {
  return (
    <div className="Create">
      <div className="page-title">Submit As A:</div>

      <div className="button-options">
        <div className="button-option-set">
          <button className="writer">Writer</button>
          <img className="button-img" src={logo}></img>
        </div>

        <div className="button-option-set">
          <button className="artist">Toon Artist</button>
          <img className="button-img" src={logo}></img>
        </div>
      </div>
    </div>
  );
}

export default Create;
