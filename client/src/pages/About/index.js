import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import "./style.css";
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";
import portrait from "../../media/portrait.jpg";
import { Hidden } from "@material-ui/core";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      showModal: false,
      forms: []
    };
  }

  fetchPosts() {}

  componentDidMount() {}

  render() {
    return (
      <div className="about-page">
          <Navigation textColor="#86BFFF" scrolledTextColor="#ffffff7a" logo={blueLogo} scrolledLogo={logo} scrolledDistance='120'/>
        <div className="about-content">
          <div className="white-block">
            <div className="img-container">
              <div
                className="about-img"
                style={{
                  backgroundImage: `linear-gradient(to top, transparent 85%, #ffffff ),url(${portrait})`,
                  // backgroundColor: `#FF8686`,
                  // opacity: `90%`,
                  // backgroundBlendMode: `lighten`,
                  backgroundPosition: `center`,
                  position: `absolute`,
                  overflow: `hidden`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  height: '75vh',
                  width: '100%',
                  top: '35%',
                }}
              >
                {/* <Image className="about-img" width="400px" src={mill}></Image> */}
                {/* <Image className="about-logo" src={pinkLogo}></Image> */}
              </div>
            </div>
          </div>
          <div className="pink-block">
            <div className="narrow">
              {/* <div className="about-greeting">
              <h1>Hi There!</h1>
              <p>
                Welcome to my blog of creative work. My name is Millicent, but I
                go by Millie. I am from Charlotte, North Carolina, and I work
                remotely in Northern California as a full-time illustrator. I am
                passionate about writing, illustration, art and fashion. This
                serves as a place for me to show you the person behind my
                writing and designs, and I hope that you will feel inspired by
                it. Thank you for your time, and I look forward to sharing with
                you a more intimate look at my creations. Sincerely, Millie
              </p>
            </div> */}
            </div>
            <div className="about">
              <h1>Hi There!</h1>
              <p>
              I am all about the inward journey, and experiencing the freedom that can be found when we make peace with our shadows.
Based out of Raleigh, NC. I have a Social Work degree from UNC Willmington.
I am certified in Reiki 2, a Shamanic Practitioner, Certified Health Coach, and Shadow Worker.
              </p>
            </div>
          </div>
          <div className="white-block">
            <div className="about-contact">
              <h1>Feel free to reach out!</h1>
              <p>
                Contact me anytime, just fill out the   
                <a href="/connect"> Connect Form
                </a>
              </p>
              <p>
                Also... Follow me on:
                <a href="https://www.instagram.com/kathrynjudybrown/"> @instagram
                </a>
                {/* <a href="https://www.facebook.com/milliegrace22"> @facebook</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
