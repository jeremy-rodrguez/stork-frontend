import React, { Component } from "react";

class GetInTouch extends Component {
  state = {};
  render() {
    return (
      <div>
        <form class="ui form success">
          <div class="fields">
            <label>Name</label>
            <input type="text" name="first-name"></input>
          </div>
          <div class="fields">
            <label>Email Address</label>
            <input type="text" name="email-address"></input>
          </div>
          <div class="fields">
            <label>Comments</label>
            <textarea></textarea>
          </div>
          <div class="fields">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden"></input>
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default GetInTouch;
