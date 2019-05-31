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
import Specs from "./Specs";
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
              <Link className="nav-list" to="page2" onFocus={this.onFocus}>
                Specs
              </Link>
            </li>
            <li>
              <Link className="nav-list" to="page3" onFocus={this.onFocus}>
                Inspiration
              </Link>
            </li>
            <li>
              <a
                className="button"
                href="https://www.outdoorsy.com/rv-rental/minneapolis_mn/1945_custom_teardrop-camper_112723-listing"
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
                <h3>Currently Camping out of Minneapolis, MN</h3>
                <p>
                  But we don't like to stay put for long. Check back to see
                  where we're currently based from and where we're heading to
                  next.
                </p>
                <a
                  href="https://www.outdoorsy.com/rv-rental/minneapolis_mn/1945_custom_teardrop-camper_112723-listing"
                  alt="Book now"
                >
                  Book Now
                </a>
              </div>
            </TweenOne>
            <About/>
          </ScrollOverPack>,
     

          <ScrollOverPack
            className="pack-page page2"
            style={{ backgroundColor: "#fff", minHeight:'500px' }}
            always={false}
            id="page2"
            key="2"
          >
            {/* <div className="accord" key="title"> */}

            {/* <QueueAnim key="1" type="right"> */}
            <TweenOne animation={{ opacity:1 }}
                style={{ opacity: 0 }}
                playscale={ 0.5}
                key="title"
                className="specs">
              <Specs />
              </TweenOne>
            {/* </QueueAnim> */}

            {/* <Animate key="0" transitionName="fade" transitionAppear>
            <div className="demo-content2" />
          </Animate> */}
            {/* <TweenOne
              className="demo-content2"
              animation={{ y: 0, opacity: 1 }}
              key="1"
              style={{ transform: "translateY(200px)", opacity: 0 }}
            /> */}
          </ScrollOverPack>,

          <ScrollOverPack
            className="pack-page page3"
            style={{ height: "100%", minHeight:'500px'  }}
            always={false}
            //this can be taken off to trigger on scroll up and down
            // playScale={0.1}
            playscale={[0.5, 0.1]}
            id="page3"
            key="3"
          >
            <div className="inspirationContainer">
              <div className="inspirationL">
                <TweenOne
                  animation={{ opacity: 1 }}
                  style={{ opacity: 0 }}
                  key="title"
                  className="inspiration-title"
                >
                  <h4>Looking for inspiration?</h4>
                  <p>
                    Finding the perfect vacation spot can be overwhelming, so
                    we've compiled a list of our favorite destinations as well
                    as the time it takes to get there.{" "}
                  </p>
                </TweenOne>
                <Animate key="0" transitionName="fade" transitionAppear>
                  <div className="dest">
                    <img
                      src={require("../images/inspiration/BoundaryWaters.png")}
                      alt="Boundary Waters"
                    />
                    <p className='location'>Boundary Waters Canoe Wilderness Area</p>
                    <p>5 hours away</p>
                  </div>
                </Animate>
                <TweenOne
                  className="dest"
                  animation={{ y: 0, opacity: 1, duration: 1000 }}
                  key="1"
                  style={{ transform: "translateY(100px)", opacity: 0 }}
                >
                  <img
                    src={require("../images/inspiration/MadelineIsland.png")}
                    alt="Madeline Islands"
                  />
                  <p className='location'>Madeline Island, WI</p>
                  <p>4 hours away</p>
                </TweenOne>
              </div>
              <div className="inspirationR">
                <TweenOne
                  className="dest"
                  animation={{ y: 0, opacity: 1, duration: 1500 }}
                  key="2"
                  style={{ transform: "translateY(500px)", opacity: 0 }}
                >
                  <img
                    src={require("../images/inspiration/northShore.png")}
                    alt="North Shore, MN"
                  />
                  <p className='location'>North Shore, MN</p>
                  <p>4 hours away</p>
                </TweenOne>
                <TweenOne
                  className="dest"
                  animation={{ y: 0, opacity: 1, duration: 2000 }}
                  key="3"
                  style={{ transform: "translateY(500px)", opacity: 0 }}
                >
                  <img
                    src={require("../images/inspiration/LaCrosse.png")}
                    alt="La Crosse WI"
                  />
                  <p className='location'>La Crosse, WI </p>
                  <p>3 hours away</p>
                </TweenOne>
              </div>
            </div>
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
