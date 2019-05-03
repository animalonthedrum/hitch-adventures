import React, { Component } from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
const BgElement = Element.BgElement;

export default class Slider extends Component {
  render(){
    return (
        <BannerAnim autoPlay type='across'>
      <Element key="aaa"
        prefixCls="banner-user-elem"
      >
        {/* <BgElement
          key="bg"
          className="bg"
        //   style={{
        //     backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //   }}
        /> */}
        {/* <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo TEST 1</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
       
        
        </QueueAnim> */}
        <TweenOne animation={{ opacity: 0, type: 'from', delay: 100 }} name="TweenOne">
        <img src={require("../images/hitch-0.jpg")}  alt="Hitch"/>
        </TweenOne>
      </Element> 
      <Element key="bbb"
        prefixCls="banner-user-elem"
      >
        {/* <BgElement
          key="bg"
          className="bg"
          // style={{
          //   backgroundImage: 'url(../images/maidenVoyage.png)',
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        /> */}
        {/* <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo 2</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
         
        </QueueAnim> */}
        <TweenOne animation={{  opacity: 0, type: 'from', delay: 100 }} name="TweenOne">
        <img src={require("../images/hitch-1.jpg")}  alt="Hitch"/>
        </TweenOne>
      </Element>
    </BannerAnim>
    )
  }
}

  {/* <img src={require("../images/hitch-3.jpg")}  alt="Hitch"/>
          <img src={require("../images/hitch-4.jpg")}  alt="Hitch"/> */}