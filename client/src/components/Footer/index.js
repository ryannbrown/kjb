import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
import {Link} from "react-router-dom"
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import words from "../../media/words.png"
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
            <div>
            <div style={{
            // backgroundImage: `url(${starBackground})`,
            // backgroundColor: ` rgb(134 191 255 / 25%)`,
            backgroundColor: ` #B67368`,
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
            justifyContent:'center',
            // width: `350px`,
            width: `100%`,
            height:`50vh`,
            //   cover no-repeat center center fixed`
        }} className="footer-div">
                 <div className="footer-content-box">
              <img src={words}/>
              <div className="link-wrapper">
                <Link to="/">Home</Link>
                <Link to="/connect">Connect</Link>
                <Link to="/shop/featured">Shop</Link>
                <Link to="/about">About</Link>
              </div>
              <div className="social-wrapper">
              <a target="_blank" href="https://www.instagram.com/kathrynjudybrown/"><i class="lni lni-instagram"></i></a>
              </div>
              <p className="policy-text">Copyright 2021 The Haven Within.<Link  to="/privacy"> Privacy Policy</Link> </p>
            {/* <a target="_blank" href="https://www.justsoup.io">
              <img width="20px" src={jsLogo}></img>
              <p style={{color:'white', fontSize: '12px'}}>Powered by Just Soup</p>
            </a> */}
          </div>
    
            </div>
          </div>
 
      )

    }
}