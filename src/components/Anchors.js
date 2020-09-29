import React, { Component } from "react";
import ScrollAnim from "rc-scroll-anim";
import ReactDOM from "react-dom";
// import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import Animate from "rc-animate";
// import { scrollScreen } from 'rc-scroll-anim';
import HomeHero from "./HomeHero";
import MobileNav from "./MobileNav";
import Compass from "./Compass";
import About from "./About";
import Scamp from "./Scamp";
import Specs from "./Specs";
import ScampSpecs from "./ScampSpecs";
import Founder from "./Founder";
import Footer from "./Footer";

const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;
// ScrollAnim.scrollScreen.init({ scrollInterval: 600 });
// ScrollAnim.scrollScreen({scrollInterval: 600});

export default class Anchors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.barAnimate();
    EventListener.addEventListener(
      "resize.userResize",
      this.barAnimate.bind(this)
    );
    setTimeout(() => {
      this.setState({ show: true });
    }, 1500);
  }

  onFocus = e => {
    this.dom = e.target;
    this.barAnimate();
  };

  barAnimate() {
    if (!this.dom) {
      return;
    }
    const bar = this.bar;
    bar.style.left = `${this.dom.getBoundingClientRect().left}px`;
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <ul className="nav-wrap">
            <li>
              <Link
                className="nav-list"
                to="page1"
                onFocus={this.onFocus}
                ref={c => {
                  this.dom = ReactDOM.findDOMNode(c);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link className="nav-list" to="hitch" onFocus={this.onFocus}>
                Hitch
              </Link>
            </li>
            <li>
              <Link className="nav-list" to="scamp" onFocus={this.onFocus}>
                Scamp
              </Link>
            </li>
            <li>
              <a
                className="button"
                href="https://www.outdoorsy.com/pro/627371"
                alt="Book Now"
              >
                Book Now
              </a>
            </li>
            <div
              ref={c => {
                this.bar = c;
              }}
              className="nav-bar"
            />
          </ul>
          <MobileNav/>
        </nav>
        {this.state.show && [
          <ScrollOverPack
            className="pack-page page0"
            id="page0"
            key="banner"
            style={
              {
                height:'100vh'
              }
            }
          >
            <HomeHero />
          </ScrollOverPack>,
          <ScrollOverPack id="page1" className="pack-page page1" key="1"  style={{minHeight:'500px' }}>
            <TweenOne
              className="rotate-compass"
              key="0"
              playscale={ 0.5}
              animation={{ opacity: 1 }}
            >
              <Compass />
              <div className="compassText">
                <h3>Great Things Come in Small Packages</h3>
                <p>
                Hitch Adventures seeks out and renovates small, towable, vintage campers that allow people to get out and explore. Each of our campers are intentionally designed with practical amenities and thoughtful small details. We give you everything you need for a comfortable camping experience and nothing you don’t.
                </p>
                <a
                  href="https://www.outdoorsy.com/pro/627371"
                  alt="Book now"
                >
                  Book Now
                </a>
              </div>
            </TweenOne>
          </ScrollOverPack>,
     

          <ScrollOverPack
            className="pack-page page2"
            style={{ backgroundColor: "#fff", minHeight:'500px' }}
            always={false}
            id="hitch"
            key="2"
          >
          <About/>
            {/* <div className="accord" key="title"> */}

            {/* <QueueAnim key="1" type="right"> */}
            <TweenOne animation={{ opacity:1 }}
                style={{ opacity: 0 }}
                playscale={ 0.5}
                key="title"
                className="specs">
              <Specs />
              </TweenOne>
          </ScrollOverPack>,

          <ScrollOverPack
            className="pack-page page3"
            style={{ height: "100%", minHeight:'500px'  }}
            always={false}
            //this can be taken off to trigger on scroll up and down
            // playScale={0.1}
            playscale={[0.5, 0.1]}
            id="scamp"
            key="3"
          >
          <TweenOne animation={{ opacity:1 }}
          style={{ opacity: 0 }}
          playscale={ 0.5}
          key="title"
          className="specs">
          <Scamp/>
        </TweenOne>
        <ScampSpecs/>
          </ScrollOverPack>,
        
          <ScrollOverPack
            className="pack-page page4"
            style={{ height: "100%", minHeight:'500px'  }}
            always={false}
            playscale={[0.4, 0.6]}
            id="page4"
            key="4"
          >
            <Founder/>
          </ScrollOverPack>,
          <Element
            className="pack-page footer"
            style={{ minHeight:'200px'  }}
            // always={false} 
            playscale={[0.1, 0.1]}
            id="footer"
            key="5"
          >
            <Footer/>
          </Element>
        ]}
      </div>
    );
  }
}
