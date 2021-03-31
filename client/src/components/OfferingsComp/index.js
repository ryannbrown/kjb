import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import Navigation from "../../components/Navigation"
import OfferingsModal from "../../components/OfferingsModal/index";
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";
import {Link} from "react-router-dom"
import Slider from "react-slick"
export default class OfferingsComp extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      showModal: false,
      offeringsObject: [],
      chosenOffering: "",
    };
  }

  incOffering = () => {
    // console.log(chosenOffering)

    this.state.chosenOffering = this.state.chosenOffering + 1;
    console.log("incrementing");
    this.setState({
      chosenOffering: this.state.chosenOffering,
    });
  };
  decOffering = (chosenOffering) => {
    if (this.state.chosenOffering > 0) {
      this.state.chosenOffering = this.state.chosenOffering - 1;
      console.log("decrementing");
      this.setState({
        chosenOffering: this.state.chosenOffering,
      });
    }
  };

  openModal = (i) => {
    console.log(i, "clicked!");

    this.setState({
      showModal: true,
      chosenOffering: i,
    });
  };
  closeModal = () => {
    console.log("clicked!");

    this.setState({
      showModal: false,
    });
  };


  componentDidMount = () => {
      console.log(this.props)
      Aos.init();
   
  };

  componentDidUpdate() {
    console.log("chosen:", this.state.chosenOffering);
  }

  render() {
    const { chosenOffering } = this.state;
    const {worksObject } = this.props;
    if (worksObject) {
        var cards = worksObject.map((item, i) => (
          <div className="service-box" data-aos="slide-up">
            <Link to={`/services/${item.id}`}>
              <Image className="off-image" src={item.image} />
              <div className="off-description">
                <p className="off-title primaryTextColor">{item.title}</p>
                <p className="off-price primaryTextColor">
                  {/* <b>${item.price}</b> */}
                </p>
              </div>
              </Link>
          </div>
        ));
    }

    return (
      <div className="off-comp">
         {/* <Navigation textColor="#B67368" scrolledTextColor="#ffffff7a" logo={blueLogo} scrolledLogo={logo} scrolledDistance='120'/> */}
        <div className="offerings-container">
          <div className="off-boxparent">
            <div className="off-textbox" data-aos="slide-right">
              <h1 className="off-page-title primaryTextColor libre">
                <i>Services</i>
              </h1>
              <p className="off-page-subtitle">What interests you most?</p>
            </div>
          </div>

          <div className="services-parent">
            <div className="title-service-box">Our Services</div>
            <div className="service-container">{cards}
            </div>
          </div>
        </div>

        {this.state.showModal ? (
          <OfferingsModal
            decOffering={this.decOffering}
            incOffering={this.incOffering}
            chosenOffering={chosenOffering}
            worksObject={worksObject}
            closeModal={this.closeModal}
            showModal={this.state.showModal}
          ></OfferingsModal>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
