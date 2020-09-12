/* import React from "react";

const Wolfram = () => {
  const API = "KH3LRW-HUELER2TUL";
  const queryType = "simple";
  const url = `http://api.wolframalpha.com/v2/${queryType}?appid=${API}&input=5*5&output=json`;
  return (
    <div className="wolfram">
      <h1>Wolfram</h1>
      <img src={url} style={{ width: "200px", height: "200px" }} />
      
    </div>
  );
};

export default Wolfram;
 */

import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API = "KH3LRW-HUELER2TUL";
const queryType = "simple";
const url = `http://api.wolframalpha.com/v2/${queryType}?appid=${API}&input=5*5&output=json`;
const images = [url, url, url, "//placekitten.com/1500/1500"];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      className: "slider",
    };
    return (
      <div>
        <h3>Wolfram:</h3>
        {/*  <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button> */}
        <Slider {...settings}>
          <div
            className="image"
            onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
          >
            <img src={url} style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="image">
            <img src={url} style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="image">
            <img src={url} style={{ width: "200px", height: "200px" }} />
          </div>
          {/*<div>
            <img src={url} style={{ width: "200px", height: "200px" }} />
          </div>
          <div>
            <img src={url} style={{ width: "200px", height: "200px" }} />
            </div> */}
        </Slider>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
