import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';
import Slider from './Slider';

export default class About extends Component {
  render() {
    return (
        <div className="aboutContainer">
        <div className='aboutL'>
          <h3>Hitch</h3>
          <h4>1945 Custom Teardrop</h4>
          <p>This teardrop camper, originally used to fetch hot air balloon baskets after flights, has been remodeled and is perfect for any size adventure. Staying true to the teardrop mentality, it's outfitted with all your basics and allows you to truly enjoy the place you're parked.</p>
          <ul>
            <li>Sleeping quarters fit for a queen.</li>
              <li>Refurbished using real cedar planks.</li>
              <li>Pop up kitchen ready in seconds.</li>
          </ul>
          <a href="https://www.outdoorsy.com/rv-rental/minneapolis_mn/1945_custom_teardrop-camper_112723-listing" target="_blank" rel="noopener noreferrer" alt="Book now">Book Now</a>          
        </div>
        <div className='aboutR'>
        <Parallax
          animation={{ x: 0, y:0 }}
          style={{ transform: 'translate(5%, 10%)' }}
          className="about-img"
        >
        <Slider/>
        </Parallax>
        </div>
        <Parallax
          animation={{ x: 0, y:0 }}
          style={{ transform: 'translate(-100%, -15%)', width:'80%' }}
          className="about-bg"
        >
        </Parallax>
      </div>
    )
  }
}
