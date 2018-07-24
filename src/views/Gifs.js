import React, { Component } from 'react';
import ListGifs from '../components/ListGifs.js';
import '../App.css';

export default class Gifs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        gifText: '',
        gifsArray: []
    };
  }

  findGIF = (event) => {
    //https://developers.giphy.com/docs/
    //https://developers.giphy.com/explorer/
    //https://api.giphy.com/v1/gifs/search?api_key={your-api-key}&q=yes&limit=10&offset=0&rating=G&lang=en
    var yourAPIkey = "YOUR-API-KEY";
    fetch('https://api.giphy.com/v1/gifs/search?api_key='+yourAPIkey+"&q="+this.state.gifText+"&limit=5&offset=0&rating=G&lang=en")
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
    return (
      <div className="App">
        <h1>GIF Find & Share</h1>
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
