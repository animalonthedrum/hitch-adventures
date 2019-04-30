import React, { Component } from 'react';

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
          <a href="https://www.outdoorsy.com/rv-rental/minneapolis_mn/1945_custom_teardrop-camper_112723-listing" alt="Book now">Book Now</a>          
        </div>
        <div className='aboutR'>
        <img src={require("../images/maidenVoyage.png")}  alt="Maiden Voyage"/>
        <p className="caption">The Maiden Voyage</p>
        <p className="captionDate">July '19</p>
        </div>
      </div>
    )
  }
}
