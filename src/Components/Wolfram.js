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
var images;
const wolframImg =
  "https://www.wolframalpha.com/_next/static/images/share_3G6HuGr6.png";
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: [wolframImg, wolframImg, wolframImg, wolframImg],
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const url = this.props.url;
    if (url !== this.state.images[0]) {
      console.log("huh");

      this.state.images.pop();
      this.state.images.unshift(url);
      console.log(this.state);
    }
  }

  render() {
    console.log(this.props.wolframArray);
    const { photoIndex, isOpen, images } = this.state;
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
      <div className="card wolfram-card">
        <Slider {...settings} className="card-body">
          {/*   <div
            className="image"
            id="image-1"
            onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
          >
            <img src={images[0]} style={{ width: "200px", height: "200px" }}/>
          </div>
          <div className="image">
            <img src={images[1]} style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="image">
            <img src={images[2]} style={{ width: "200px", height: "200px" }} />
          </div> */}

          {this.props.wolframArray.reverse().map((url, index) => {
            var x = this.props.wolframArray[index];
            return (
              <div
                className="image"
                id="image-1"
                onClick={() =>
                  this.setState({ photoIndex: index, isOpen: true })
                }
              >
                <img
                  src={this.props.wolframArray[index]}
                  style={{ width: "200px", height: "200px" }}
                  onError={(e) => (e.target.value = wolframImg)}
                />
              </div>
            );
          })}
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
