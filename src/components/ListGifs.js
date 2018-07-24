import React, { Component } from 'react';
import '../App.css';

export default class ListGifs extends Component {
  constructor(props) {
    super(props);
    this.FB = window.FB;
  }
  
  shareFB = (gifURL) => {
    console.log("share this gif: " + gifURL);
    this.FB.ui({
      method: 'feed',
      link: gifURL,
      caption: 'Estoy en el taller de Facebook Developer Circles Guatemala, aprendiendo a integrar FB Login y Share, Mira este GIF',
    }, function(response){});
  }

  renderGifs = () => {
    const { gifsArray } = this.props;
    return gifsArray.map((gifData) => {
      return(
        <div key={gifData.id} style={{display: "flex", flexDirection: "row",  justifyContent: "center", alignItems: "center", margin: 15}}>
          <img src={gifData.images.downsized.url} alt="gif" />
          <img src="/img/fb_share.png" alt="share"
            width={250}
            height={50}
            style={{marginLeft: 15}}
            onClick={() => this.shareFB(gifData.images.downsized.url)}
          />
        </div>
      )
    });
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {this.renderGifs()}
      </div>
    );
  }
}
