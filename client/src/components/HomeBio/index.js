import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import bioImg from '../../media/6.PNG'



export default class HomeBio extends Component {

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
      
      
      <Row className="bio-component">
       <Col className="bio-col" sm={12} md={6}>
       <div className="bio-text-box">
       <h1 className="bio-header primaryTextColor">Hi, I'm Kathryn...</h1>
       <p className="bio-text primaryTextColor">I help you restore harmony with the most important person in your life-- you.</p>
       <p className="bio-text primaryTextColor">I will guide you home to your innate wholeness, power, and freedom. I offer deep healing work for the body, mind, and spirit, to support you on all levels of well-being.</p>
       <p className="bio-text primaryTextColor">I am here to assist in you on your journey of spiritual ascension as you heal from the inside out, expand consciousness, raise your vibration, and create the life of your dreams.</p>
       <p className="bio-text primaryTextColor">I am so honored to guide you on this sacred journey of inner transformation!</p>
       <p className="bio-text primaryTextColor">I am a Shamanic Healer, Reiki Master, shadow worker, intuitive guide, and certified holistic health coach. Based out of Raleigh, NC. I see clients remotely or in-person. See "Offerings" for full list of services.</p>
       <hr className="bio-line"></hr>
       </div>
      
       </Col>
       <Col className="img-col" sm={12} md={6}>
       <div style={{
            backgroundImage: `url(${bioImg})`,
            backgroundColor: ` rgb(134 191 255 / 25%)`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`,
            width: `350px`,
            height:`600px`,
            margin: `20px auto`,
            backgroundPositionX: `20%`,
            borderRadius:`25px`
            //   cover no-repeat center center fixed`
        }}>
    
       </div>
       </Col>
    </Row>
      )
  
    }
  }