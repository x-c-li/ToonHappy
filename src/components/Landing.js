import { Typography } from "@material-ui/core";
import React from "react";
import Hero from "./Hero";
import "./Landing.scss";

function Landing() {
  return (
    <div className="Landing">
      <Hero />
      <div>
        <h1>How it works:</h1>

        <div>
          <Typography className="landing-header-light">
            Step 1: Upload your work.
          </Typography>
          <p>Story/Script</p>
          <p>Webtoon Art Sample</p>
          <Typography>
            Make your final edits to your story description and profile. Share
            your work for community input or your profile.
          </Typography>
          <Typography>Hit Publish!</Typography>
        </div>

        <div>
          <Typography className="landing-header-dark">For Writers</Typography>
          <Typography>
            Community members can vote on their favorite art and also leave beta
            reader feedback on your story or script
          </Typography>
        </div>

        <div>
          <Typography className="landing-header-dark">For Artists</Typography>
          <Typography>
            Submit samples of your work to stories or upload samples to your
            artist profile
          </Typography>
        </div>

        <div>
          <Typography className="landing-header-light">
            Step 3: Connect!
          </Typography>
          <Typography>
            Connect with your mutually chosen artist or writer and start
            publishing episodes
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Landing;
