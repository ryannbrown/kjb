import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import Navigation from "../../components/Navigation";
import OfferingsModal from "../../components/OfferingsModal/index";
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Slider from "react-slick"

export default class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {};
  }

  componentDidMount = () => {};

  componentDidUpdate() {}

  render() {


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    // var cards = worksObject.map((item, i) => (
    //     <div className="off">
    //       <Link to={`/services/${item.id}`}>
    //         <Image className="off-image" src={item.image} />
    //         <div className="off-description">
    //           <p className="off-title primaryTextColor">{item.title}</p>
    //           <p className="off-price primaryTextColor">
    //             {/* <b>${item.price}</b> */}
    //           </p>
    //         </div>
    //         </Link>
    //     </div>
    //   ));

    return (




<div className="testimonials-component">
<div className="testimonials-content">
<h1 className="aos-init aos-animate" data-aos="slide-left">What people are saying</h1>
<Slider {...settings}>

<div>
  <p> As a shamanic practitioner myself I am very picky about who I see for my own personal healing sessions. Kathryn is the real deal. She creates this beautiful womb of safe sacred space in which to totally release and relax. Which is essential for deep healing!  The space she creates and brings to sessions is judgement free, warm, supportive, and loving. Sessions with Kathryn are very relaxing while still being a very powerful release and healing. If you are looking for a relaxing, warm, understanding shamanic healing experience seek no further.</p>
  <h3>-Beatrice K</h3>
</div>
<div>
  <p>Omg so immediately after our session I felt so much lighter. It was like I was carrying something heavy and I didn’t even realize it was there. I felt so clear and balanced the rest of the day and I even sat down and re wrote a whole sales page because so much clarity had dropped in. Your work is amazing!! </p>
  <h3>- Cassie U</h3>
</div>
<div>
  <p>Kathryn did a beautiful job of connecting with me through energy healing. Without prompting she immediately focused on my second (sacral) chakra which is the same area where I’ve been having undiagnosed chronic back/hip pain. Her insight and feedback has given me numerous directions in which I intend to continue growing. I am so thankful for the opportunity I had to work with her and am excited to continue my journey towards healing!</p>
  <h3>- Ashlyn L</h3>
</div>
</Slider>

</div>

</div>










      // <div className="testimonial-comp">
      //   <div className="offerings-container">
      //     <div className="off-boxparent">
      //       <div className="off-textbox">
      //         <h1 className="off-page-title primaryTextColor libre">
      //           <i>Testimonials</i>
      //         </h1>
      //         <br></br>
      //         {/* <p className="off-page-subtitle">What interests you most?</p> */}
      //       </div>
      //     </div>

      //     <div className="off-box-parent">
      //       <div className="off-box-container">
      //         <div className="off" data-aos="slide-right">
      //             <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft}></FontAwesomeIcon>
      //             <div className="off-description">
      //               <p className="off-price">
      //               As a shamanic practitioner myself I am very picky about who I see for my own personal healing sessions. Kathryn is the real deal. She creates this beautiful womb of safe sacred space in which to totally release and relax. Which is essential for deep healing!  The space she creates and brings to sessions is judgement free, warm, supportive, and loving. Sessions with Kathryn are very relaxing while still being a very powerful release and healing. If you are looking for a relaxing, warm, understanding shamanic healing experience seek no further. 
      //               </p>
      //               <p className="off-title">⁃	Beatrice K</p>
      //             </div>
           
      //         </div>
      //         <div className="off" data-aos="slide-left">
      //         <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft}></FontAwesomeIcon>
      //             <div className="off-description">
      //               <p className="off-price">
      //               Omg so immediately after our session I felt so much lighter. It was like I was carrying something heavy and I didn’t even realize it was there. I felt so clear and balanced the rest of the day and I even sat down and re wrote a whole sales page because so much clarity had dropped in. Your work is amazing!! 
      //               </p>
      //               <p className="off-title">- Cassie U</p>
      //             </div>
           
      //         </div>
      //         <div className="off" data-aos="slide-up">
      //         <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft}></FontAwesomeIcon>
      //             <div className="off-description">
      //               <p className="off-price">
      //               Kathryn did a beautiful job of connecting with me through energy healing. Without prompting she immediately focused on my second (sacral) chakra which is the same area where I’ve been having undiagnosed chronic back/hip pain. Her insight and feedback has given me numerous directions in which I intend to continue growing. I am so thankful for the opportunity I had to work with her and am excited to continue my journey towards healing!
      //               </p>
      //               <p className="off-title">- Ashlyn L</p>
      //             </div>
           
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}