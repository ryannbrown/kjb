import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
// import logo from './logo.svg';
import Navigation from "../../components/Navigation"
import HomeHero from "../../components/HomeHero/index"
import HomeBio from "../../components/HomeBio/index"
import HomeAction from "../../components/HomeAction/index"
import HomeQuote from "../../components/HomeQuote/index"
import OfferingsComp from "../../components/OfferingsComp/index"
import Testimonials from "../../components/Testimonials/index"
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'


function Homepage(props) {

    return (
        <div className="homepage-content">
            <Navigation textColor="white" scrolledTextColor="white" logo={logo} scrolledLogo={logo} scrolledDistance='120' activePage="Home"/>
            <HomeHero></HomeHero>
            <HomeBio></HomeBio>
            <OfferingsComp worksObject={props.worksObject}></OfferingsComp>
            <HomeAction/>
            <hr style={{width:  `50%`}}></hr>
            <Testimonials></Testimonials>
            <HomeQuote/>
            {/* <hr style={{width:  `50%`}}></hr> */}
        </div>
    )
}
export default Homepage