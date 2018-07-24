import React, { Component } from 'react';
import ListGifs from '../components/ListGifs.js';
import '../App.css';
import { giphyAPIkey } from '../config/APIs.js'

export default class Gifs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        gifText: '',
        gifsArray: []
    };
    if(!(this.props.location && this.props.location.state && this.props.location.state.fbUser))
      this.props.history.replace('/');
  }

  findGIF = (event) => {
    //https://developers.giphy.com/docs/
    //https://developers.giphy.com/explorer/
    //https://api.giphy.com/v1/gifs/search?api_key={your-api-key}&q=yes&limit=10&offset=0&rating=G&lang=en
    fetch('https://api.giphy.com/v1/gifs/search?api_key='+giphyAPIkey+"&q="+this.state.gifText+"&limit=5&offset=0&rating=G&lang=en")
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
      this.setState({ gifText: "", gifsArray: myJson.data });
    });
    event.preventDefault();
  }
  handleChangeGIF = (event) => {
    this.setState({ gifText: event.target.value });
  }

  render() {
    if(!(this.props.location && this.props.location.state && this.props.location.state.fbUser))
      return null;
    return (
      <div className="App">
        <h1>{"Hi! "+this.props.location.state.fbUser.user.name}</h1>
        <h2>GIF Find & Share</h2>
        <form onSubmit={this.findGIF}>
          <label>
            Find a GIF:
            <input type="text" value={this.state.gifText} onChange={this.handleChangeGIF} style={{margin: 10}} />
          </label>
          <input type="submit" value="Search" />
        </form>
        <ListGifs gifsArray={this.state.gifsArray}/>
      </div>
    );
  }
}
