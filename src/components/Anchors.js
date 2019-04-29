import React, { Component } from 'react'
import ScrollAnim from 'rc-scroll-anim';
import ReactDOM from 'react-dom';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';

import HomeHero from './HomeHero';
import Compass from './Compass';



const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;
// ScrollAnim.scrollScreen({scrollInterval: 600});


export default class Anchors extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.barAnimate();
    EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
    setTimeout(() => {
      this.setState({ show: true });
    }, 1500);
  }

  onFocus = (e) => {
    this.dom = e.target;
    this.barAnimate();
  }

  barAnimate() {
    if (!this.dom) {
      return;
    }
    const bar = this.bar;
    bar.style.left = `${this.dom.getBoundingClientRect().left}px`;
  }

  render() {
    return (<div>
      <div className="nav">
        <div className="nav-wap">
          <Link className="nav-list" to="page1" 
            onFocus={this.onFocus}
            ref={(c) => {
              this.dom = ReactDOM.findDOMNode(c);
            }}
          >
            About
          </Link>
          <Link className="nav-list" to="page2"  
            onFocus={this.onFocus}
          >
            Specs
          </Link>
          <Link className="nav-list" to="page3" 
            onFocus={this.onFocus}
          >
            Inspiration
          </Link>
          <Link className="nav-list" to="page4" 
            onFocus={this.onFocus}
          >
            Book Now
          </Link>
          <div ref={(c) => { this.bar = c; }} className="nav-bar" />
        </div>
      </div>
      {this.state.show && [
        <Element className="pack-page page0" id="page0" key="banner" style={{
            // margin:'25px 25px 0 25px',
            // overflow:'hidden'
            }}>
          <HomeHero/>
        </Element>,
        <ScrollOverPack id="page1" className="page1" key="1">
          <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
            <Compass />
            <div className="compassText">
            <h3>Currently Camping out of Minneapolis, MN</h3>
            <p>But we don't like to stay put for long. Check back to see where we're currently based from and where we're heading to next.</p>
            <a href="https://www.outdoorsy.com/rv-rental/minneapolis_mn/1945_custom_teardrop-camper_112723-listing">Book Now</a>
            </div>
          </TweenOne>
          <QueueAnim key="1">
            <div key="0" className="demo-content" />
            <div key="1" className="demo-content" style={{ backgroundColor: '#F38EAD' }} />
            <div key="2" className="demo-content" />
            <div key="3" className="demo-content" />
          </QueueAnim>
        </ScrollOverPack>,

        <ScrollOverPack
          className="pack-page page2"
          style={{ backgroundColor: '#0098CE' }}
          always={false}
          id="page2"
          key="2"
        >
          <div className="page2-title" key="title">只进入一次</div>
          <Animate key="0" transitionName="fade" transitionAppear>
            <div className="demo-content2" />
          </Animate>
          <TweenOne
            className="demo-content2"
            animation={{ y: 0, opacity: 1 }}
            key="1"
            style={{ transform: 'translateY(100px)', opacity: 0 }}
          />
        </ScrollOverPack>,

        <ScrollOverPack
          className="pack-page page3"
          style={{ backgroundColor: '#174270' }}
          playScale={0.8}
          id="page3"
          key="3"
        >
          <TweenOne animation={{ opacity: 1 }} style={{ opacity: 0 }} key="title"
            className="page2-title"
          >
            在页面80％时进入
          </TweenOne>
          <Animate key="0" transitionName="fade" transitionAppear>
            <div className="demo-content" />
          </Animate>
          <TweenOne
            className="demo-content"
            animation={{ y: 0, opacity: 1 }}
            key="1"
            style={{ transform: 'translateY(100px)', opacity: 0 }}
          />
        </ScrollOverPack>,
      ]}
    </div>);
  }
}