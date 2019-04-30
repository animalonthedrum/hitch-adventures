import React, { Component, Fragment } from "react";
// import TweenOne from "rc-tween-one";
import { Parallax } from "rc-scroll-anim";
import heroVid from "../images/herovid.mp4";

export default class HomeHero extends Component {
  render() {
    return (
      <Fragment>
        <div className="hero-container">
          <video className="videoTag" playsInline autoPlay loop muted>
            <source src={heroVid} type="video/mp4" />
          </video>
          <div className="hero-title">
            <h1 className="homeTitle">get in Hitch</h1>
            <h2 className="homeSubtitle">We're going camping</h2>
          </div>
          {/* <TweenOne
                  className="scrollBar"
                  animation={{ y: 0, opacity: 1, duration: 8000, height:0 }}
                  key="1"
                  style={{height:'100px', opacity: 1 }}
                /> */}
          {/* this works tween */}
          <Parallax
            animation={{ scale: 0 }}
            style={{ transform: "scale(1)", transformOrigin:"bottom" }}
            className="scrollBar"
          />
        </div>
      </Fragment>
    );
  }
}
