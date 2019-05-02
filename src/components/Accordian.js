import React, { Component } from 'react';
// import Animate from 'rc-animate';

const data = [
  {
    title: 'There’s room for two.',
    paragraph: 'Sleeps 2 comfortably. Custom foam mattress that measures the width of a queen and the length of a full. Heads up, people over 6ft tall won’t be able to sleep pencil style.'
  },
  {
    title: 'The kitchen is fully stocked.',
    paragraph: 'Fully stocked cooking area that includes everything but the kitchen sink. Propane stove, pots and pans of various sizes, plates and cutlery for 4 and coffee making supplies, including da beans. Something else you need and not sure if we have? Send us a message, odds are we have it.'
    },
  {
    title: 'You have the power.',
    paragraph:'We got the power. Solar powered battery keeps a steady feed on our 12v power in Hitch. Anything you charge with a USB (phones, tablets, camera batteries, flashlights, etc..) will be compatible. If you end up at a site with full hookups, we also have a 120v you can plug larger items into and use the AC.'
  },
  {
    title: 'Totally Towable.',
  paragraph:'Weighing in at 1,500 lbs, Hitch can be pulled with most vehicles.  Not sure what your vehicle can do? (Experience towing trailers is a plus!)'
  }
]



export default class Accordian extends Component {
  render () {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        title,
        paragraph
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div className='specContainer'
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {paragraph}
              </p>
              <div className="test">TEST</div>
            </div>
           
          </div>
      </div>
    )
  }
}
