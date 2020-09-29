import React, { Component } from 'react';
// import Animate from 'rc-animate';

const data = [
  {
    title: 'There’s room for three.',
    paragraph: 'With the dinette table that converts to a bed for two and the bench for an extra sleeping spot, this little camper has enough space to sleep three.'
  },
  {
    title: 'The kitchen is fully stocked.',
    paragraph: 'Get ready to make some epic camping meals. With a propane stove, mini-fridge, and a sink with running water, this space has everything you need. Pots, pans, plates, silverware, cups and coffee making supplies are also included.'
    },
  {
    title: 'Power to the camper.',
    paragraph:'To run the lights, fridge and sink, you’ll need to be plugged into a standard 120v outlet. Most campsites have electric campsites that give you the power you need. If you’re going off-grid, the ceiling fan is powered using solar and solar lanterns are also included. Just grab a cooler and you’re set.'
  },
  {
    title: 'Totally Towable.',
  link: <p>At 1,200 lbs, Scamp can be pulled with most vehicles.. Not sure what your vehicle can do? Check out <a href='https://rv.campingworld.com/towguide' target='_blank' rel="noopener noreferrer" alt='tow link'>this tow guide.</a> (Experience towing trailers is a plus!)</p>
  }
]



export default class ScampAccordian extends Component {
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
        paragraph,
        link
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
              {link}
            </div>
           
          </div>
      </div>
    )
  }
}
