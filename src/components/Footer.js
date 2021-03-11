import React, { Component } from "react";
import stork_logo_1 from "../images/stork_logo_1.png";

class Footer extends Component {
  render() {
    return (
      <div class="ui inverted vertical footer segment">
        <div class="ui container">
          <div class="ui stackable inverted divided equal height stackable grid">
            <div class="three wide column">
              <h4 class="ui inverted header">Jeremy Rodriguez</h4>
              <div class="ui inverted link list">
                <a
                  class="item"
                  href="https://www.linkedin.com/in/jeremyrodrguez"
                >
                  LinkedIn <i class="linkedin icon"></i>
                </a>
                <a
                  class="item"
                  href="https://www.instagram.com/jeremy.rodrguez/"
                >
                  Instagram <i class="instagram icon"></i>
                </a>
                <a class="item" href="https://twitter.com/JeremyRodrguez_">
                  Twitter <i class="twitter icon"></i>
                </a>
                <a class="item" href="https://www.facebook.com/">
                  Facebook <i class="facebook icon"></i>
                </a>
                <a class="item" href="https://medium.com/@jeremy.rodrguez">
                  Medium <i class="medium m icon"></i>
                </a>
                <a class="item" href="https://github.com/jeremy-rodrguez">
                  Github <i class="github icon"></i>
                </a>
                <span class="item">© 2021 Stork, Inc.</span>
              </div>
            </div>
            <div class="three wide column">
              <h4 class="ui inverted header">About</h4>
              <div class="ui inverted link list">
                <a class="item">Sitemap</a>
                <a class="item">Contact Us</a>
              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header">STORK Points</h4>
              <p>
                Get a free baby item when you sign up for our rewards program
                and collect points for every purchase!
              </p>
              <button class="ui inverted button">
                <a href="/" style={{ color: "white" }}>
                  Sign Up For Free!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
