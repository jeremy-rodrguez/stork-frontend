import React, { Component } from "react";

class GetInTouch extends Component {
  state = {};
  render() {
    return (
      <form className="contact_form">
        <label>Name * </label>
        <input input="text"></input>
        <label>Email Address * </label>
        <input type="text"></input>
        <label>Subject * </label>
        <input type="text"></input>
        <label>Message * </label>
        <textarea></textarea>
        <br></br>
        <input type="submit"></input>
      </form>
    );
  }
}

export default GetInTouch;
