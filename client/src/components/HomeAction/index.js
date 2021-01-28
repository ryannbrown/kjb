import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom'
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import circleLines from "../../media/circle-lines.png";
import dipper4 from "../../media/dipper-4-cropped.png";

export default class HomeAction extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {}

  // componentDidUpdate() {
  //   document.removeEventListener("scroll", this.listener);
  // }

  render() {
    return (
      <Row>
        <Col sm={12} md={6} className="action-contents1">
          <Image className="circle-lines" src={circleLines} />
        </Col>
        <Col sm={12} md={6} className="action-contents2">
          <div className=" primaryTextColor">
            <div className="action-text-box">
              <h1 className="action-header">
                I'm the healing coach for you if...
              </h1>
              <p className="action-text">
                <span className="numbers-list">
                  <i>1.</i>
                </span>
                You're ready to release trauma, old stories, limiting beliefs, and heavy energy
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>2.</i>
                </span>
                You want to FEEL your wholeness. You're ready to move from fragmentation to integration. From confusion to clarity. From fear to joy.
              </p>
              {/* <p className="action-text">
                <span className="numbers-list">
                  <i>3.</i>
                </span>
                You've been searching for inner peace. You're ready to fully embody a strong foundation of self-love and acceptance, and transform your state of being.
              </p> */}
              <p className="action-text">
                <span className="numbers-list">
                  <i>3.</i>
                </span>
                You're looking for motivating and inspiring health coaching so you can love your body and FEEL GOOD living in it.
              </p>
              {/* <p className="action-text">
                <span className="numbers-list">
                  <i>5.</i>
                </span>
                You are deconstructing from indoctrination and need support navigating spiritual awakening.
              </p> */}
              <p className="action-text">
                <span className="numbers-list">
                  <i>4.</i>
                </span>
                You're ready to transform your inner world, dive deep into your shadow, and work through your triggers and difficult emotions. You are ready to fully embody inner peace and unwavering self love.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>5.</i>
                </span>
                You're ready for a mind-body-spirit makeover. You're ready to heal the past and welcome in the future you.
              </p>
              <Link to="/services" style={{margin:'25px'}}>
              <Button className="offerings-btn-link" style={{ backgroundColor: `rgb(134, 191, 255)`, color:'white', margin:'25px' }} type="submit">
                            Let's Go!
        </Button>
              </Link>
            </div>
          </div>
          <Image className="dipper-4" src={dipper4} />
        </Col>
      </Row>
    );
  }
}
