import React, { Component } from 'react';
import Accordian from './Accordian';
import Animate from 'rc-animate';

export default class Specs extends Component {
  render() {
    return (
      <div className='specsContainer'>

      <div className="specsL">
       <h3>Before you set off...</h3>
        <p>While we’re firm believers in having a good dose of spontaneity when it comes to travel, here’s some need-to-knows about Hitch before heading out on the open road.</p>
      </div>
      <div className="specsR">
      <Animate key="0"  transitionName="enter" transitionAppear>
      <Accordian/>
      </Animate>
      </div>
  
      </div>
      // </TweenOne>
 
    )
  }
}