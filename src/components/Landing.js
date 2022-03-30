import { Typography } from "@material-ui/core";
import React from "react";
import Hero from "./Hero";
import "./Landing.scss";
import step3 from "./imgs/step-3-connect.png";
import storyScript from "./imgs/story-script.png";
import artSample from "./imgs/webtoon-art-sample.png";

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

          <div className="landing-s1">
            <div className="landing-s1-imgs">
              <div>
                <p>Story/Script</p>
                <img src={storyScript} className="landing-step1"></img>
              </div>

              <div>
                <p>Webtoon Art Sample</p>
                <img src={artSample} className="landing-step1"></img>
              </div>
            </div>

            <div className="landing-descr">
              <Typography className="landing-descr-txt">
                Make your final edits to your story description and profile.
                Share your work for community input or your profile.
              </Typography>
              <Typography className="landing-descr-txt">
                Hit Publish!
              </Typography>
            </div>
          </div>
        </div>

        <div>
          <Typography className="landing-header-dark">For Writers</Typography>
          <div className="landing-s1">
            <div className="step-2">
              <Typography className="landing-s2">
                Step 2: Track Submissions
              </Typography>
            </div>
            <Typography className="landing-descr">
              Community members can vote on their favorite art and also leave
              beta reader feedback on your story or script
            </Typography>
          </div>
        </div>

        <div>
          <Typography className="landing-header-dark">For Artists</Typography>
          <div className="landing-s1">
            <div className="step-2">
              <Typography className="landing-s2">
                Step 2: Submit to stories
              </Typography>
            </div>
            <Typography className="landing-descr">
              Submit samples of your work to stories or upload samples to your
              artist profile
            </Typography>
          </div>
        </div>

        <div>
          <Typography className="landing-header-light">
            Step 3: Connect!
          </Typography>
          <div className="landing-s1">
            <img src={step3} className="landing-step3"></img>
            <Typography className="landing-descr">
              Connect with your mutually chosen artist or writer and start
              publishing episodes
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
