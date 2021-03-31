// import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import bioImg from '../../media/port.jpg'
import dipper2 from "../../media/circle-thing-2.png";


export default class HomeBio extends Component {

    constructor(props) {
      super(props);
  
      this.listener = null;
      this.state = {
        status: "top"
      };
    }
  
  
    componentDidMount() {
   Aos.init();
    }
  
    // componentDidUpdate() {
    //   document.removeEventListener("scroll", this.listener);
    // }
  
    render() {
  
      
      return (
      
      
      <div className="bio-component">
       <div className="bio-col">
       <div className="bio-text-box" data-aos="slide-right">
       <h1 className="bio-header primaryTextColor">Hi, I'm Kathryn...</h1>
       <p className="bio-text primaryTextColor">My life's devotion is helping people heal from the inside out.  I help you restore harmony within yourself, clear unwanted patterns, and create the life you want. I offer deep healing work for the body, mind, and spirit, to support you on all levels of well-being. I am a Shamanic Practitioner, Reiki Master, Integrative Health Coach, Meditation Teacher, and (soon to be) Yoga Teacher.  I am so honored to guide you on this sacred journey of transformation. Based out of Raleigh, NC, I see clients in-person and remotely.  </p>
       {/* <p className="bio-text primaryTextColor">  My life's devotion is helping people heal from the inside out. *All sessions are currently remote via Zoom</p>
       <p className="bio-text primaryTextColor"> I help you restore harmony within yourself, clear unwanted patterns, and create the life you want. I offer deep healing work for the body, mind, and spirit, to support you on all levels of well-being.</p>
       <p className="bio-text primaryTextColor">     I am a Shamanic Practitioner, Reiki Master, Integrative Health Coach, Meditation Teacher, and (soon to be) Yoga Teacher. </p>
       <p className="bio-text primaryTextColor">      I am so honored to guide you on this sacred journey of transformation.</p>
       <p className="bio-text primaryTextColor">      Based out of Raleigh, NC, I see clients in-person and remotely. </p>
       <p className="bio-text primaryTextColor">*All sessions are currently remote via Zoom </p> */}
       <a href="/about">
       <button className="main-btn" type="submit">
                            More about me
        </button>
         </a>
       {/* <hr className="bio-line"></hr> */}
       </div>
       <img className="dipper-2" src={dipper2} />
       </div>
       <div className="img-col">
       <div style={{
            backgroundImage: `url(${bioImg})`,
            // backgroundColor: ` rgb(134 191 255 / 25%)`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `right`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`,
            width: `500px`,
            maxWidth: '100%',
            height:`600px`,
            margin: `20px auto`,
            // backgroundPositionX: `20%`,
            // borderRadius:`25px`
            //   cover no-repeat center center fixed`
        }}>
       </div>

       </div>
    </div>
      )
  
    }
  }