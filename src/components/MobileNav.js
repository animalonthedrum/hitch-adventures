import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from "rc-scroll-anim";
const Link = ScrollAnim.Link;

export default class MobileNav extends Component {
    state = {
        show: false,
      };
      onClick = () => {
        this.setState({
          show: !this.state.show,
        });
      }
  render() {
    return (
        <div className="toggle">
          <button className="toggle-button" onClick={this.onClick}>
            <span></span>
            <span></span>
            <span></span>
            {/* <span></span> */}
          </button>
        <QueueAnim className="mobile-nav"
          animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            // { opacity: [1, 0], translateY: [0, -50] }
          ]}>
          {this.state.show ? [
            <div className="mobile-menu" key="a">
              <ul>
            <li><Link className="nav-list" to="page0" onClick={this.onClick}>Home</Link></li>
            <li><Link className="nav-list" to="page1" onClick={this.onClick}>About</Link></li>
            <li><Link className="nav-list" to="page2" onClick={this.onClick}>Specs</Link></li>
            <li><Link className="nav-list" to="page3" onClick={this.onClick}>Inspiration</Link></li>
            <li><a className="button" href="https://www.outdoorsy.com/rv-rental/minneapolis_mn/1945_custom_teardrop-camper_112723-listing" alt="Book Now" onClick={this.onClick}>Book Now</a></li>
              </ul>
            </div>,
          ] : null}
        </QueueAnim>
      </div>
    )
  }
}
