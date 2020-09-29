import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  CardDeck,
  Spinner
} from "react-bootstrap";
// import App from "../../App"
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class TextCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoState: [],
      isMobile: false
    };
  }


  componentDidMount() {



    const logoList = [
      {text: 'Reiki Master'},
      {text: 'Shadow Worker'},
      {text: 'Holistic Health Coach'},
      {text: 'Intuitive Guide'},
      {text: "Not Your Mama's Healer"}
    ];

    this.setState({
      logoState: logoList
    });
  }

  navTo = (link) => { 
    window.location.href = link
   }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:2000
    };

    const logos = this.state.logoState.map((item, i) => (
     
     <div onClick={()=> {this.navTo(item.link)}} style={{
      backgroundSize: `120px`,
      backgroundColor:'white',
      backgroundRepeat: `no-repeat`,
      display: `flex`,
      alignItems: `center`,
      position: `relative`,
      height: "398px",
      width: "254px",
      marginTop: "50px"
     }}>
      <p className="title-phrase">{item.text}</p>
      </div>
    
    ));

    return (
      <div className=" page w-parent">
        <div className="w-container">
          <Slider {...settings}>
         {logos}
          </Slider>
        </div>
      </div>
    );
  }
}