import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import moons from "../../media/bluemoons.png";
import Navigation from "../../components/Navigation"
import stars from "../../media/stars.png";
import circleThing2 from "../../media/circle-thing-2.png";
import dipper1 from "../../media/dipper-1.png";
import OfferingsModal from "../../components/OfferingsModal/index";
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";

export default class Offerings extends Component {
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
    let offeringsObject = [
      {
        image: moons,
        title: "Shadow Work",
        price: "75",
        description:
          "This is a deep dive into the place you've locked away your inner pain. These sessions are designed to reintegrate aspects of the self that have been rejected or disowned.",
        moreInfo: '95% of your behaviors, emotional reactions, and beliefs are programmed into your unconscious mind. Shadow work illuminates these unconscious beliefs so they can be transformed and integrated back into wholeness, no longer wreaking havoc on your life and relationships. We will walk through your underworld and bring all things into the light of healing love.'
      },
      {
        image: stars,
        title: "Shamanic Healing Session",
        price: "150",
        description:
          "energetic healing session designed to clear your unwanted patterns from the root-- your energetic field, subconscious mind, and soul.",
          moreInfo: ''
      },
      {
        image: circleThing2,
        title: "Reiki Session",
        price: "100",
        description:
          "Energetic assessment, clearing, and balancing.",
          moreInfo: ''
      },
      {
        image: dipper1,
        title: "Health Coaching",
        price: "75",
        description:
          "Natural and holistic approach to optimize wellness. Completely tailored to YOU, I give practical tools and insight to help you achieve your goals and feel happy and healthy in the skin you're in.",
          moreInfo: ''
      },
      // {
      //   image: moons,
      //   title: "Shadow Work",
      //   price: "50",
      //   description:
      //     "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
      // },
      // {
      //   image: stars,
      //   title: "Meditation Session",
      //   price: "200",
      //   description:
      //     "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
      // },
      // {
      //   image: circleThing2,
      //   title: "Loving the Mirror",
      //   price: "400",
      //   description:
      //     "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
      // },
      // {
      //   image: dipper1,
      //   title: "Something Else",
      //   price: "1,000",
      //   description:
      //     "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
      // },
    ];

    this.setState({
      offeringsObject: offeringsObject,
    });
  };

  componentDidUpdate() {
    console.log("chosen:", this.state.chosenOffering);
  }

  render() {
    const { offeringsObject, chosenOffering } = this.state;

    const cards = offeringsObject.map((item, i) => (
      <div className="off">
        <a onClick={() => this.openModal(i)}>
          <Image className="off-image" src={item.image} />
          <div className="off-description">
            <p className="off-title primaryTextColor">{item.title}</p>
            <p className="off-price primaryTextColor">
              <b>${item.price}</b>
            </p>
          </div>
        </a>
      </div>
    ));

    return (
      <div className="off-page">
         <Navigation textColor="#86BFFF" scrolledTextColor="#ffffff7a" logo={blueLogo} scrolledLogo={logo} scrolledDistance='120'/>
        <div className="offerings-container">
          <div className="off-boxparent">
            <div className="off-textbox">
              <h1 className="off-page-title primaryTextColor libre">
                <i>Offerings</i>
              </h1>
              <br></br>
              <p className="off-page-subtitle">What interests you most?</p>
            </div>
          </div>

          <div className="off-box-parent">
            <div className="off-box-container">{cards}
            </div>
          </div>
        </div>

        {this.state.showModal ? (
          <OfferingsModal
            decOffering={this.decOffering}
            incOffering={this.incOffering}
            chosenOffering={chosenOffering}
            offeringsObject={offeringsObject}
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
