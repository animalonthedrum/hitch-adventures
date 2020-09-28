import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';
import Slider from './Slider';

export default class Scamp extends Component {
  render() {
    return (
        <div className="aboutContainer">
        <div className='aboutL'>
          <h3>Scamp</h3>
          <h4>1976 Scamp 13’</h4>
          <p>After sitting still for far too many years, this little Scamp has been refurbished and is ready to hit the road. It’s a perfectly sized adventure mobile; whether you’re heading up north for a weekend or taking a cross country roadtrip. Outfitted with a few extra amenities, it includes running water, a fridge and a propane stove.</p>
          <ul>
            <li>Kitchen table that converts to bed for two.</li>
              <li>Full indoor kitchen.</li>
              <li>Roomy space to hang out on rainy days.</li>
          </ul>
          <a href="https://www.outdoorsy.com/rv-rental/minneapolis_mn/1976_scamp_13_175258-listing" target="_blank" rel="noopener noreferrer" alt="Book now">Book Now</a>          
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
