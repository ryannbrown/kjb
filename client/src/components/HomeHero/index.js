import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import profPic from "../../media/5.PNG"
// import heroImg from "../../media/hero-min.jpeg"
import heroImg from "../../media/heroz.jpg"
import arrow from "../../media/arrow.png"
import words from "../../media/words.png"
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
            backgroundColor: `rgb(240, 222, 209)`,
            // backgroundColor: `#a89588`,
            
            // backgroundColor: `rgba(51, 51, 51)`,
            // opacity: `90%`,
            backgroundBlendMode: `multiply`,
            // backgroundBlendMode: ``,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `scroll`,
            height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`
        }}>
            <div className="tc w-100 hero-text-block">
                {/* <h4 className="title-name">The Haven Within</h4> */}
                <img src={words}/>
                {/* <p className="desktop-subtitle">Sacred Healing Journeys. Mind-Body-Spirit Awakening.</p> */}
                {/* <p className="mobile-subtitle">Sacred Healing Journeys.</p>
                <p className="mobile-subtitle">Mind-Body-Spirit Awakening.</p> */}
                {/* <p>Energy Healing, Integrative Health Coaching, Shadow Work, Meditation, Yoga</p> */}
                {/* <TextCarousel></TextCarousel> */}
            </div>

       <br></br>
       {/* <div> */}
       <h3 onClick={this.scrollDown} className="action-button desktop-subtitle">Sacred Healing Journeys. Mind-Body-Spirit Awakening.</h3>
       {/* <h3 onClick={this.scrollDown} className="action-button">Discover</h3> */}
       {/* <p className="mobile-subtitle mobile-subtitle">Sacred Healing Journeys.</p>
                <p className="mobile-subtitle mobile-subtitle">Mind-Body-Spirit Awakening.</p> */}
            <a onClick={this.scrollDown}><i class="lni lni-chevron-down arrow-img"></i></a>

         
           
      
          
            


        </Col>
        {/* <Col md={3}></Col> */}
    </Row>
      )
  
    }
  }