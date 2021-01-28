import React, { Component } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  CardDeck,
  Table,
  Accordion,
  Spinner,
  Row,
  Col
} from "react-bootstrap";
import "./style.css";
import $ from "jquery";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons";
// const queryString = require('query-string');
import Navigation from "../../components/Navigation/index"
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";
require("dotenv").config();

export default class WorksDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWork: ""
    };
  }

  addSpaces = () => {
    console.log("Adding spaces");
    $(".modal-description").each(function() {
      var text = $(this).text();
      $(this).html(text.replace(/\*/g, "<br><br>"));
    });
  };

  componentDidMount() {
    console.log(this.props.match.params);
    let param = Object.values(this.props.match.params);
    console.log(param);

    this.setState({
      chosenWork: param
    });
    // this.addSpaces();
  }

  componentDidUpdate() {
    this.addSpaces();
  }

  render() {
    const { chosenWork, currentWork } = this.state;
    const prevModal = this.props.worksObject[Number(chosenWork) - 1];
    const thisModal = this.props.worksObject[chosenWork];
    const nextModal = this.props.worksObject[Number(chosenWork) + 1];
    console.log("previous", prevModal);
    console.log("this", thisModal);
    console.log("next", nextModal);

    if (prevModal) {
      var prevId = Number(chosenWork) - 1;
    }
    if (nextModal) {
      var nextId = Number(chosenWork) + 1;
    }
    if (thisModal && thisModal.imgs) {
      var addPics = thisModal.imgs.map((item, i) => (
        <Image
          className="off-image-2"
          src={`https://millie-site.s3.amazonaws.com/${item}`}
        />
      ));
    }
    if (thisModal && thisModal.benefits) {
      var showBenefits = thisModal.benefits.map((item, i) => (
        <li className="modal-description">{item}</li>
      ));
    }
    if (thisModal && thisModal.packages) {
      var showPackages = thisModal.packages.map((item, i) => (
        <li className="modal-description" style={{listStyle:'none'}}>{item}</li>
      ));
    }

    return (
      <div>
       <Navigation textColor="#86BFFF" scrolledTextColor="#ffffff7a" logo={blueLogo} scrolledLogo={logo} scrolledDistance='5'/>

        <div className="works-page">
          {thisModal ? (
            <div className="works-container">
              <Link className="product-back-btn" onClick={this.clearCurrentItem} to={`/services`}><FontAwesomeIcon className="icon-margin" icon={faChevronLeft}></FontAwesomeIcon><span> Back to Services</span></Link>
              <Row className="content-row">
                <Col
                  xs={{ span: 12, order: "first" }}
                  sm={{ span: 12, order: "first" }}
                  md={{ span: 6, order: "first" }}
                  lg={{ span: 6, order: "first" }}
                >
                  <div className="off-image-container">
                    <Image
                      className="works-image img-responsive"
                      src={thisModal.image}
                    />
                  </div>
                </Col>
                <Col
                  xs={{ span: 12, order: 2 }}
                  sm={{ span: 12, order: 2 }}
                  md={{ span: 6, order: 2 }}
                  lg={{ span: 6, order: 2 }}
                >
                  <div className="works-description">
                    <h1 className="works-title">{thisModal.title}</h1>
                    {/* <hr style={{ width: `50%` }}></hr> */}
                    <p className="modal-price">${thisModal.price}/hour session</p>
                    {/* <p className="modal-description">{thisModal.description}</p> */}
                    <p className="modal-description">{thisModal.moreInfo}</p>
                    <div>
                    {showBenefits}
                    </div>
                    <br></br>
                    {thisModal.packages &&<div> <p className="modal-description">Packages: </p>
                    {showPackages}</div>
                    }
                    <a target="_blank" href={thisModal.link}><Button className="offerings-btn" style={{ margin: `15px` }} variant="basic">Book for ${thisModal.price}</Button></a>
                  </div>
                </Col>
              </Row>
            </div>
          ) : (
            <div></div>
          )}
          <div className="additional-pics">{addPics}</div>

          <div className="nav-box">
            <div>
            <Link className="product-back-btn" onClick={this.clearCurrentItem} to={`/services`}><FontAwesomeIcon className="icon-margin" icon={faChevronLeft}></FontAwesomeIcon><span> Back to Services</span></Link>
            </div>
            <div>
              {prevModal && <a href={`/services/${prevId}`}>Previous</a>}
              {prevModal && nextModal && <span> | </span>}
              {nextModal && <a href={`/services/${nextId}`}>Next</a>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
