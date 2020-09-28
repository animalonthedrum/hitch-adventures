import React, { Component } from 'react'

export default class Founder extends Component {
  render() {
    return (
      <div className="founderContainer">
        <div className="founderL">
        <img src={require("../images/emma.jpg")}  alt="Founder Emma"/>
        </div>
        <div className="founderR">
            <h2>From the founder</h2>
            <p>In 2017, after a spontaneous Craigslist search and 12hrs of gathering of cash loans from friends, I found myself in a Fleetfarm parking lot. Before I could panic too much around what I was about to get myself into, Hitch—in all of her 1940’s camper glory—rolled into my world.</p>
            <p>With the help of a village, Hitch transformed. Cedar planks replaced carpeted walls. Cabinets were upgraded. I learned to use all sorts of power tools and came close to serious injury only once.</p>
            <p>And now the fleet has grown to two (and hopefully more to come!). I love to renovate and breathe new life into old things. But I continue to do this because of what it allows people to do: explore new places. Remember that the world is just outside your door. Disconnect from your day-to-day life, and connect with others, the wilderness and yourself.</p>
            <p>Now get out there.</p>
        </div>
      </div>
    )
  }
}
