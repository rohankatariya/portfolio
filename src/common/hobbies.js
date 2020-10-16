import React, { Component } from 'react';

class Hobbies extends Component {
    state = {
        images: [
            ["", "foodie"],
            ["images/travel.jpeg"],
            ["images/movies.webp"],
            ["images/cricket.jpg"],
            ["images/mobile-games.jpg"],
            ["images/chess.jpeg"],
            ["images/carrom.jpg"]
        ]
    }
  getPhotoBox = (index, size) => {
      return this.state.images.slice(index, index + size).map((key, index) => {
          let backgroundImage = {backgroundImage: `url(${key[0]})`};
      return <div key={index} className="photoBox" style={backgroundImage}>{key[0].includes("images/") ? "" : key}</div>; 
      })
  }

  componentDidMount = () => {
    setInterval( () => {
    let images = this.state.images;
    images.forEach((image, i) => {
        let index = Math.floor(Math.random() * images.length);
        let intialImage = images[i];
        images[i] = images[index];
        images[index] = intialImage;
    });
    this.setState({images: images});
    }, 1500)
  }
  render() {
    return (
      <div className="hobbies">
        <div className="heading">
            <h2>Hobbies</h2>
        </div>
        <div className="hobbiesDetails">
          <div className="column2Row">
              {this.getPhotoBox(0, 2)}
          </div>
          <div className="column3Row">
              {this.getPhotoBox(2, 3)}
          </div>
          <div className="column2Row">
              {this.getPhotoBox(5, 2)}
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
