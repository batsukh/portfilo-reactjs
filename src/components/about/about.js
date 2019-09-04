import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>

           {/* About Section
     ================================================== */}
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>My name is Batsukh DAANSUREN.
                  I would like to propose my candidacy for the vacancy “Engineer Communication”.
                  I have 5 years of strong network engineering, installation of network equipment, security systems and organizing network system, system administration experience in working cross cultural international as well as privat­­­e and government sectors. While working towards those years I have been a good team player and faced number of challenges in our work and solved with success along with my colleagues.
                  I feel that my adaptable, enthusiastic, conscientious, and self-motivated individual, possessing excellent communication skills combined with the ability to be a good team player would be an asset in this role.
                  I thank your time to reading my curriculum vitae and please do not hesitate contact me if you need any future questions about my working experience.
                  I look forward to hearing from you soon.
               </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Batsukh Daansuren</span><br />
                    <span>3713 N Kenneth Ave<br />
                      Chicago il 
                    </span><br />
                    <span>7732304447</span><br />
                    <span>beck@website.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="google.com" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section> {/* About Section End*/}
      
      </React.Fragment>
    );
  }
}
