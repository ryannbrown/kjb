import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
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
                You wish to release trauma, old stories, limiting beliefs, and heavy energy.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>2.</i>
                </span>
                You are looking for a greater sense of wholeness. You are wanting to move from fragmentation, distortion, separation, and fear --- to wholeness, integration, clarity, harmony, and joy.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>3.</i>
                </span>
                You desire to feel at peace with yourself, develop a strong foundation of self-love and acceptance, and stand confident in your self-worth, gifts, and talents.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>4.</i>
                </span>
                You desire practical and holistic health coaching so you can know your body as a sacred temple and FEEL GOOD living in it.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>5.</i>
                </span>
                You desire to clear blockages and stuck energy from the your chakras and correct imbalances so that you can uplevel your life, your consciousness and your vibration.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>6.</i>
                </span>
                You are deconstructing from indoctrination and want support navigating spiritual awakening.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>7.</i>
                </span>
                You desire to transform your inner world, dive deep into your shadow, and work through your triggers and difficult emotions.
              </p>
              <a href="/offerings" className="offerings-btn btn btn-basic">
                <p style={{ height: `20px` }}>View The Offerings</p>
              </a>
            </div>
          </div>
          <Image className="dipper-4" src={dipper4} />
        </Col>
      </Row>
    );
  }
}
