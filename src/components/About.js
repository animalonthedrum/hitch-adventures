import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';
import Slider from './Slider';

export default class About extends Component {
  render() {
    return (
        <div className="aboutContainer">
        <div className='aboutL'>
          <h3>Don't let her size fool you</h3>
          <p>Take it from the 5'1" woman who renovated Hitch, great things come in small packages. No detail was overlooked when remodeling this 1940's teardrop camper. Whether you're looking for a quick night out of the city or weeks out on the open road, Hitch is the perfect companion for any size adventure. </p>
          <ul>
            <li>Sleeping quarters fit for a Queen.</li>
              <li>Refurbished using real cedar planks.</li>
              <li>Personal mini library.</li>
          </ul>
          <a href="https://www.outdoorsy.com/pro/627371" target="_blank" rel="noopener noreferrer" alt="Book now">Book Now</a>          
        </div>
        <div className='aboutR'>
        <Parallax
          animation={{ x: 0, y:0 }}
          style={{ transform: 'translate(5%, 10%)' }}
          className="about-img"
        >
        {/* <img src={require("../images/maidenVoyage.png")}  alt="Maiden Voyage"/> */}
        <Slider/>
        {/* <p className="caption">The Maiden Voyage</p>
        <p className="captionDate">July '19</p> */}
        </Parallax>
        </div>
        <Parallax
          animation={{ x: 0, y:0 }}
          style={{ transform: 'translate(50%, -15%)', width:'80%' }}
          className="about-bg"
        >
        </Parallax>
      </div>
    )
  }
}
