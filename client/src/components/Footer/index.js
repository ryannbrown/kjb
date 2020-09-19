import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import whiteComet from '../../media/white-comet.png'
import starBackground from '../../media/star-background.png'
import jsLogo from "../../media/jswhite.png";


export default class Footer extends Component {

    constructor(props) { 
        super(props);

        this.listener = null;
        this.state = {
            status: "top"
        };
    }


    componentDidMount() {

    }

    // componentDidUpdate() {
    //   document.removeEventListener("scroll", this.listener);
    // }

    render() {





        return (
            <Row>
            <Col  style={{
            backgroundImage: `url(${starBackground})`,
            backgroundColor: ` rgb(134 191 255 / 25%)`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            // height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`,
            width: `350px`,
            height:`200px`,
            //   cover no-repeat center center fixed`
        }} className="footer-div">
                 <div className="footer-content-box">
            <a target="_blank" href="https://www.justsoup.io">
              <img width="20px" src={jsLogo}></img>
              <p>Powered by Just Soup</p>
            </a>
          </div>
    
            </Col>
          </Row>
 
      )

    }
}