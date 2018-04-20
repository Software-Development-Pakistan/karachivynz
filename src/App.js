import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";
import { SocialIcon } from "react-social-icons";

class App extends Component {
  componentDidMount() {
    document.title = "Official Karachi Vynz - Website Under Development!";
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Be psyched!</h1>
        <p>Our website is under development!</p>
        <p>
          Meanwhile, if you have something to say you can reach us through the
          following channels.
        </p>
        <SocialIcon className="social-icon" url="https://www.facebook.com/officialkarachivynz/" />
        <SocialIcon className="social-icon" url="https://www.youtube.com/channel/UC3nzFvADzctm2hdQYrSurgg" />
        <SocialIcon className="social-icon" url="https://www.instagram.com/officialkarachivynz/?hl=en" />
        <div className="footer" >
          <p>Copyright © 2018 Karachi Vynz. All rights reserved </p>
        </div>
      </div>
    );
  }
}

export default App;
