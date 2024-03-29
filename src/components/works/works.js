import React, { Component } from 'react';

export default class Works extends Component {
  render() {
    return (
        <React.Fragment>

      <div>
        <div classname="row work">
          <div classname="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div classname="nine columns main-col">
            <div classname="row item">
              <div classname="twelve columns">
                <h3>Awesome Design Studio</h3>
                <p classname="info">Senior UX Designer <span>•</span> <em classname="date">March 2010 - Present</em></p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                </p>
              </div>
            </div> 
            <div classname="row item">
              <div classname="twelve columns">
                <h3>Super Cool Studio</h3>
                <p classname="info">UX Designer <span>•</span> <em classname="date">March 2007 - February 2010</em></p>
                <p>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                  ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                </p>
              </div>
            </div> 
          </div> 
        </div> 
      </div>

        </React.Fragment>
 );
}
}