import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import profPic from "../../media/5.PNG"
import heroImg from "../../media/hero.jpg"
import arrow from "../../media/arrow.png"
import TextCarousel from "../../components/TextCarousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class HomeHero extends Component {

    constructor(props) {
      super(props);
  
      this.listener = null;
      this.state = {
        status: "top"
      };
    }
  
  
    componentDidMount() {
      this.listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 120) {
          if (this.state.status !== "bgChanged") {
            this.setState({ status: "bgChanged" });
          }
        } else {
          if (this.state.status !== "top") {
            this.setState({ status: "top" });
          }
        }
      });
    }

    scrollDown = () => {
      window.scrollTo(0, 850)
    }
  
    componentDidUpdate() {
      document.removeEventListener("scroll", this.listener);
    }
  
    render() {
  
  
  
  
  
      return (
      
      <Row>
        {/* <Col md={3}></Col> */}

        <Col sm={12} md={12} className="home-img" style={{
            backgroundImage: `url(${heroImg})`,
            backgroundColor: `#333333f2`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`
        }}>
            <div className="tc w-100 hero-text-block">
                <h4 className="title-name">The Haven Within</h4>
                <p className="subtitle">Sacred Healing Journeys. Full Mind-Body-Spirit Awakening.</p>
                {/* <p>Energy Healing, Integrative Health Coaching, Shadow Work, Meditation, Yoga</p> */}
                {/* <TextCarousel></TextCarousel> */}
            </div>

       <br></br>
       {/* <div> */}
       <h3 onClick={this.scrollDown} className="action-button">Discover</h3>
            <a onClick={this.scrollDown}><Image className="arrow-img center" src={arrow}></Image></a>

         
           
      
          
            


        </Col>
        {/* <Col md={3}></Col> */}
    </Row>
      )
  
    }
  }