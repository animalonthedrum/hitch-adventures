import React, { Component } from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';

export default class ScampSlider extends Component {
  render(){
    return (
        <BannerAnim autoPlay type='across'>
      <Element key="aaa"
        // prefixCls="banner-user-elem"
      >
        <TweenOne animation={{ opacity: 0, type: 'from', delay: 50 }} name="TweenOne">
        <img src={require("../images/hitch-0.jpg")}  alt="Hitch"/>
        </TweenOne>
      </Element> 
      <Element key="bbb"
        // prefixCls="banner-user-elem"
      >
        <TweenOne animation={{  opacity: 0, type: 'from', delay: 50 }} name="TweenOne">
        <img src={require("../images/hitch-1.jpg")}  alt="Hitch"/>
        </TweenOne>
      </Element>
      <Element key="ccc"
        // prefixCls="banner-user-elem"
      >
        <TweenOne animation={{  opacity: 0, type: 'from', delay: 50 }} name="TweenOne">
       <img src={require("../images/hitch-2.jpg")}  alt="Hitch"/>
        </TweenOne>
      </Element>
      <Element key="ddd"
        // prefixCls="banner-user-elem"
      >
        <TweenOne animation={{  opacity: 0, type: 'from', delay: 50 }} name="TweenOne">
       <img src={require("../images/hitch-3.jpg")}  alt="Hitch"/>
        </TweenOne>
      </Element>
    </BannerAnim>
    )
  }
}