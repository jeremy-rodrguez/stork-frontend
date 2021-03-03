import React, { Component } from "react";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/591c745117bffca3d0d3dd39/1510618636724-QDEH9UBJQPHM296B5F51/ke17ZwdGBToddI8pDm48kI6xQy-LcS05RUcOpHcTg8F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQNSe4iuV4PsE0S2J1cXNVmM72JmfrNK8h5CSYzyI8-GNKOigyfB8BfAL6B2Stgizg/IMG_1767.JPG"
          width="100%"
        ></img>
        {/* <div class="ui inverted vertical footer segment">
          <div class="ui container">Travel Match 2015. All Rights Reserved</div>
        </div> */}
        <div class="ui inverted segment">
          <div class="ui container">
            <div class="ui inverted secondary menu">
              <div>
                <h5>Jeremy Rodriguez</h5>
                <i class="plane icon app-icon"></i>
              </div>
              <div class="right item">
                <a href="https://www.linkedin.com/">
                  <i class="linkedin icon"></i>
                </a>
                <a href="https://www.facebook.com/">
                  <i class="facebook icon"></i>
                </a>
                <a href="https://medium.com/">
                  <i class="medium m icon"></i>
                </a>
                <a href="https://github.com">
                  <i class="github icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
