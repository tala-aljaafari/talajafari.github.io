import React, { Component } from 'react';

class About extends Component {
  render() {

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="Tala Jafari Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I'm entering my final year pursuing a bachelor's degree in mathematics and computer science at McGill University. My fields of interest include  stochastic processes, abstract algebra, natural language processing, and machine learning theory. I have the pleasure of working with some amazing people from multiple clubs/organizations like the  AIForGood Summer Lab, McGill Artificial Intelligence Society, and the Society of Undergraduate Math Students.</p>
            <p>I'm a lover of nature, dessert, board games, graphic design, ultimate, and puns! In fact, I had an argument with my friend about the shape of a coffee cup today⁠— it almost torus apart. I owe them a topology, I honestly donut know what came over me...</p>
            <p> Let's get in touch! I can be contacted at rosieyzh@gmail.com. </p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;