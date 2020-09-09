import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import circleLines from "../../media/circle-lines.png";
import dipper4 from "../../media/dipper-4.png";

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
               You have been hurt my institutional indoctrination and you want freedom from it.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>2.</i>
                </span>
                You need help in improving your physical and emotional landscape.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>3.</i>
                </span>
                You need your chakras balanced and energy cleared.
              </p>
              <p className="action-text">
                <span className="numbers-list">
                  <i>4.</i>
                </span>
                You want to work through parts of you that you have suppresed for years and want to come to terms with.
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
