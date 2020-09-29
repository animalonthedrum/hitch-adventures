import React, { Component } from 'react';
import ScampAccordian from './ScampAccordian';
import Animate from 'rc-animate';

export default class ScampSpecs extends Component {
  render() {
    return (
      <div className='specsContainer'>

      <div className="specsL">
       <h3>Here’s What you Need to Know</h3>
        <p>Just like Hitch, Scamp is lightweight, easy to tow and ready to hit the road when you are! But before taking off, here are a few things to know to make your trip a success</p>
      </div>
      <div className="specsR">
      <Animate key="0"  transitionName="enter" transitionAppear>
      <ScampAccordian/>
      </Animate>
      </div>
  
      </div>
    )
  }
}