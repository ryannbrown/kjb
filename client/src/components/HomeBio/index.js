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
      
      
      <Row>
       <Col className="bio-col" sm={12} md={6}>
       <div className="bio-text-box">
       <h1 className="bio-header primaryTextColor">Hi, I'm Kathryn...</h1>
       <p className="bio-text primaryTextColor">I am all about the inward journey, and experiencing the freedom that can be found when we make peace with our shadows.</p>
       <p className="bio-text primaryTextColor">Based out of Raleigh, NC. I have a Social Work degree from UNC Willmington.</p>
       <p className="bio-text primaryTextColor">I am certified in Reiki 2, a Shamanic Practitioner, Certified Health Coach, and Shadow Worker.</p>
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