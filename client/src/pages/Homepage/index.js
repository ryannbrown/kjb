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
import logo from "../../media/logo.png";
import scrolledLogo from "../../media/logo2.png";
import {Helmet} from "react-helmet"
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'
import StoreComp from '../../components/StoreComp';


function Homepage(props) {

    return (
        <div className="homepage-content">
              <Helmet>
                    <title>The Haven Within | Reiki and Energy Healing in Raleigh, NC</title>
                    <meta name="description" content='Reiki and Energy Healing based in Raleigh, NC. Remote Reiki and energy sessions also available.' charSet="utf-8" />
                    {/* <link rel="canonical" href="http://www.colemandefense.com/" /> */}
                </Helmet>
            {/* <Navigation textColor="white" scrolledTextColor="white" logo={logo} scrolledLogo={scrolledLogo} scrolledDistance='120' activePage="Home"/> */}
            <HomeHero></HomeHero>
            <HomeBio></HomeBio>
            <OfferingsComp worksObject={props.worksObject}></OfferingsComp>
            <StoreComp worksObject={props.worksObject}></StoreComp>
            {/* <HomeAction/> */}
            {/* <hr style={{width:  `50%`}}></hr> */}
            <Testimonials></Testimonials>
            {/* <HomeQuote/> */}
            {/* <hr style={{width:  `50%`}}></hr> */}
        </div>
    )
}
export default Homepage