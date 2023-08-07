import React from 'react';

import profilePic from "../../assets/images/profilePic.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={profilePic} alt="picture of my cat" style={{ width: "200px", height: "200px" }}></img>
        </div>
        <p>
        Hello! My name is Angad Batth and I am a Fullstack Developer who is currently enrolled in a coding bootcamp hosted by the University of Toronto!
        </p>
        <p>
        Some background about myself is that I attended Seneca College for Computer Science in 2017 and soon after moved to the great state of Texas! 
        During my time in Texas I was able to work with an IT Contracting company that gave me the opportunity to work alongside other companies such as 
        Raytheon, Boeing and Samsung. Working there sparked a hidden passion I had for coding and so I decided to spend my time learning about Full-Stack Development.
        </p>
      </div>
    </section>
  );
}

export default About;