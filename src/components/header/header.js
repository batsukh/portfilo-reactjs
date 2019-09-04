import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
            <div classname="row banner">
            <div classname="banner-text">
                <h1 classname="responsive-headline">I am {'{'}resumeData.name{'}'}.</h1>
                <h3>I am a {'{'}resumeData.role{'}'}.{'{'}resumeData.roleDescription{'}'}
                </h3>
                <hr />
                ...
            </div></div>
        </header>
      </React.Fragment>
    );
  }
}