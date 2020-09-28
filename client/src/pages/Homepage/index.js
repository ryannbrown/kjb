import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
// import logo from './logo.svg';
import Navigation from "../../components/Navigation"
import HomeHero from "../../components/HomeHero/index"
import HomeBio from "../../components/HomeBio/index"
import HomeAction from "../../components/HomeAction/index"
import HomeQuote from "../../components/HomeQuote/index"
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'


function Homepage() {

    return (
        <div className="homepage-content">
            <Navigation textColor="#ffffff7a" scrolledTextColor="#ffffff7a" logo={logo} scrolledLogo={logo} scrolledDistance='120'/>
            <HomeHero></HomeHero>
            <HomeBio></HomeBio>
            <HomeAction/>
            <hr style={{width:  `50%`}}></hr>
            <HomeQuote/>
            <hr style={{width:  `50%`}}></hr>


            {/* <Row>
                <Col>
                    <br></br>
                    <h1 className="lightText addPadding f1">I offer <span className="primaryTextColor">cocktails</span> <FontAwesomeIcon icon={faGlassMartini}></FontAwesomeIcon></h1>
                </Col>
            </Row>
            <Row>
                <Col className="price-container">
                    <div className="item">
                        <h1 className="primaryTextColor"><i>Shadow Work</i></h1>
                        <p className="primaryTextColor f6">- 4 weeks / 8 sessions</p>
                        <p className="darkText">Finding your inner shadows
                        and you know,
                        healing from them and
                        shit.
                        </p>
                        <p>$400</p>
                    </div>
                    <div className="item">
                        <h1 className="primaryTextColor"><i>Shadow Work</i></h1>
                        <p className="primaryTextColor f6">- 4 weeks / 8 sessions</p>
                        <p className="darkText">Finding your inner shadows
                        and you know,
                        healing from them and
                        shit.
                    </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="price-container">
                    <div className="item">
                        <h1 className="primaryTextColor"><i>Shadow Work</i></h1>
                        <p className="primaryTextColor f6">- 4 weeks / 8 sessions</p>
                        <p className="darkText">Finding your inner shadows
                        and you know,
                        healing from them and
                        shit.
                    </p>
                    </div>
                    <div className="item">
                        <h1 className="primaryTextColor"><i>Shadow Work</i></h1>
                        <p className="primaryTextColor f6">- 4 weeks / 8 sessions</p>
                        <p className="darkText">Finding your inner shadows
                        and you know,
                        healing from them and
                        shit.
                    </p>
                    </div>

                </Col>

            </Row>

            <Row>
                <Col className="addPadding">
                    <Button variant="outline-dark">More Information</Button>
                </Col>
            </Row> */}
        </div>
    )
}
export default Homepage