import React, { Component } from "react";
import GetInTouch from "./GetInTouch";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="about-us-div">
        <h1 className="bio_name">Jeremy Rodriguez</h1>
        <h2>The Short</h2>
        <p>
          Jeremy Rodriguez is a former community manager in property management
          turned junior software engineer. He lives in Hayward, California and
          is a recent graduate of Flatiron School. If you are interested in
          hiring him (me), click <a href="https://www.linkedin.com">here!</a>
        </p>
        <h2>The Long</h2>
        <p>I was born in Oakland, California in June of 1992.</p>
        <h2>Select Clients</h2>
        <p>Coming Soon...</p>
        <GetInTouch />
        <footer>Hello</footer>
      </div>
    );
  }
}

export default AboutUs;
