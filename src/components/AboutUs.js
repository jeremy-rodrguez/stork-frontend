import React, { Component } from "react";
import GetInTouch from "./GetInTouch";
import desk from "../images/desk.jpeg";
import IMG_3063 from "../images/IMG_3063.jpg";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="about-us-div row">
        <h1 className="bio_name" class="ui center aligned header">
          Jeremy Rodriguez
        </h1>
        <div class="column">
          <h2>The Short</h2>
          <p>
            Jeremy Rodriguez is a former community manager in property
            management turned junior software engineer. He lives in Hayward,
            California and is a recent graduate of Flatiron School. If you are
            interested in hiring him (me), click{" "}
            <a href="https://www.linkedin.com/in/jeremyrodrguez">here!</a>
          </p>
          <img src={IMG_3063} width="250px" height="250px" className="me"></img>
        </div>
        <div class="column">
          <h2>The Long</h2>
          <p>
            I was born in Oakland, California in June of 1992. I am the eldest
            of three brothers. Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor sit amet..", comes from a line in section 1.10.32. The
            standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>

          <img
            src={desk}
            width="250px"
            height="250px"
            className="wfh_desk"
          ></img>
          <figcaption>Check out my WFH Setup!</figcaption>
        </div>
        <div class="column">
          <h2>Select Clients</h2>
          <p>Coming Soon...</p>
        </div>
        {/* <GetInTouch /> */}
      </div>
    );
  }
}

export default AboutUs;
