import React, { Component } from 'react';

export default class Footer extends Component {


  render() {
    return (
      <footer className="footerContainer">
        <div className="footerTop">
        <div className="elfsight-app-3aa9178d-8e3f-4c09-a808-e8be5bdefb01"></div>
        </div>
        <div className="footerBottom">
          <div className="footerL">    
          <div className='footer-text'>
          <h4>#HitchAdventures</h4>
          <p>Share your best snaps on Instagram with #HitchAdventures, and if we feature it on our page you’ll earn a free night with Hitch.</p>
           
          </div>
         </div>
         <div className="footerR">
          <a href="https://www.instagram.com/hitchadventures/" target="_blank" rel="noopener noreferrer" >Follow our Instagram</a>
            </div>
            {/* <FontAwesomeIcon icon="envelope" color='#fff' className='social' />
            <FontAwesomeIcon icon={['fab', 'instagram']} color='#fff' className='social' />
            <FontAwesomeIcon icon="phone" color='#fff' className='social' /> */}
          </div>
          {/* <p className='cpyr'>©Hitch Adventures 2019</p> */}
      </footer>
    )
  }
}