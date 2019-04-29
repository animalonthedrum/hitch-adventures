import React, { Component, Fragment } from 'react';
import heroVid from '../images/herovid.mp4';

export default class HomeHero extends Component {
  render() {
    return (
      <Fragment>
      <div className="hero-container">
         <video className='videoTag' playsInline autoPlay loop muted>
         <source src={heroVid} type='video/mp4' />
        </video>
        <div className="hero-title">
        <h1 className="homeTitle">get in Hitch</h1>
        <h2 className="homeSubtitle">We're going camping</h2>
        </div>
        </div>
      </Fragment>
    )
  }
}
