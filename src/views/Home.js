import React, { Component } from 'react';
import '../App.css';

export default class Home extends Component {

  loginFB = () => {
    this.props.history.push('/gifs');
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to GIF Find & Share</h1>
        <img src="/img/fb_login.png" alt="login"
          onClick={this.loginFB}
        />
      </div>
    );
  }
}
