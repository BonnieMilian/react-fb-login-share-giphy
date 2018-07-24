import React, { Component } from 'react';
import FacebookLoginButton from '../components/FacebookLoginButton';
import '../App.css';

export default class Home extends Component {

  onFacebookLogin = (loginStatus, resultObject) => {
    console.log("loginStatus",loginStatus)
    if (loginStatus === true) {
      console.log("resultObject",resultObject)
      this.props.history.push({
        pathname: '/gifs',
        state: { fbUser: resultObject.user }
      });
    } else {
      console.log('Facebook login error');
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to GIF Find & Share</h1>
        <FacebookLoginButton onLogin={this.onFacebookLogin}>
          <img src="/img/fb_login.png" alt="Login with Facebook" />
        </FacebookLoginButton>
      </div>
    );
  }
}
