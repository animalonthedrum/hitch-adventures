import React, { Component } from 'react'
import { Parallax } from 'rc-scroll-anim';

export default class Compass extends Component {
  render() {
    return (
      <div >
        {/* <Parallax
          animation={{ x: 0 }}
          style={{ transform: 'translateX(-300px)', margin: '10px auto' }}
          className="code-box-shape"
        />
        <Parallax
          animation={{ scale: 1 }}
          style={{ transform: 'scale(0)', margin: '10px auto' }}
          className="code-box-shape"
        /> */}
        <Parallax
          animation={{ rotate: 360, playScale: [0, 3] }}
          style={{ margin: '10px auto' }}
          className="code-box-shape compass"
        />
      </div>
    );
  }
}

