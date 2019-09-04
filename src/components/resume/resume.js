import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      {/* Resume Section
   ================================================== */}
   <section id="resume">
   {/* Education
 ----------------------------------------------- */}
   <div className="row education">
     <div className="three columns header-col">
       <h1><span>Education</span></h1>
     </div>
     <div className="nine columns main-col">
       <div className="row item">
         <div className="twelve columns">
           <h3>Communication, informasion, and technology university of Science Technology University of Mongolia.</h3>
           <p className="info">Bachelor in Web engineer <span>•</span> <em className="date">jun 2011</em></p>
           <p>
             2005-until now
		    	  Undergraduate student at Communication, informatics, and technology university of Science Technology University of Mongolia. 
			      1995-2005
		      	Secondary education in the “Talst” School, Bayankhongor aimag, Mongolia;

           </p>
         </div>
       </div> {/* item end */}
       <div className="row item">
         <div className="twelve columns">
           <h3>Boot camp</h3>
           <p className="info">B.A. Web engineer and Front end  <span>•</span> <em className="date">August 2019</em></p>
           <p>
              Front end developer, HTML, React, Node.js,Css
           </p>
         </div>
       </div> {/* item end */}
     </div> {/* main-col end */}
   </div> {/* End Education */}
   {/* Work
 ----------------------------------------------- */}
   <div className="row work">
     <div className="three columns header-col">
       <h1><span>Work</span></h1>
     </div>
     <div className="nine columns main-col">
       <div className="row item">
         <div className="twelve columns">
           <h3>MY FIRST WEBSITE</h3>
           <p className="info">Web Designer <span>•</span> <em className="date">August 2019 - Present</em></p>
           <p>
              Photoshop and UI UX
           </p>
         </div>
       </div> {/* item end */}
       <div className="row item">
         <div className="twelve columns">
           <h3>Great Work </h3>
           <p className="info">UX Designer <span>•</span> <em className="date">March 2018 - August 2019</em></p>
           <p>
             This is Photoshop UI UX Design
           </p>
         </div>
       </div> {/* item end */}
     </div> {/* main-col end */}
   </div> {/* End Work */}
   {/* Skills
 ----------------------------------------------- */}
   <div className="row skill">
     <div className="three columns header-col">
       <h1><span>Skills</span></h1>
     </div>
     <div className="nine columns main-col">
       <p>jQuery,CSS,HTML5,React,Nodejs,Java script
       </p>
       <div className="bars">
         <ul className="skills">
           <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
           <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
           <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
           <li><span className="bar-expand css" /><em>CSS</em></li>
           <li><span className="bar-expand html5" /><em>HTML5</em></li>
           <li><span className="bar-expand jquery" /><em>jQuery</em></li>
         </ul>
       </div>{/* end skill-bars */}
     </div> {/* main-col end */}
   </div> {/* End skills */}
 </section> {/* Resume Section End*/}
 </React.Fragment>
    );
  }
}