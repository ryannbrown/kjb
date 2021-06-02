import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import Navigation from "../Navigation"
import {isMobileSafari} from 'react-device-detect';
import OfferingsModal from "../OfferingsModal/index";
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";
import {Link} from "react-router-dom"
import Slider from "react-slick"
import {
  ThemeContextConsumer,
  ThemeContextProvider,
} from "../../utils/themeContext";
var _ = require("lodash");
export default class StoreComp extends Component {
  static contextType = ThemeContextConsumer;
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      showModal: false,
      isMobile: null,
      offeringsObject: [],
      chosenOffering: "",
      servicesShown: 2
    };
  }

  
  incOffering = () => {
    // console.log(chosenOffering)

    this.state.chosenOffering = this.state.chosenOffering + 1;
    console.log("incrementing");
    this.setState({
      chosenOffering: this.state.chosenOffering,
    });
  };
  decOffering = (chosenOffering) => {
    if (this.state.chosenOffering > 0) {
      this.state.chosenOffering = this.state.chosenOffering - 1;
      console.log("decrementing");
      this.setState({
        chosenOffering: this.state.chosenOffering,
      });
    }
  };

  openModal = (i) => {
    console.log(i, "clicked!");

    this.setState({
      showModal: true,
      chosenOffering: i,
    });
  };
  closeModal = () => {
    console.log("clicked!");

    this.setState({
      showModal: false,
    });
  };


  componentDidMount = () => {
let ourContext = this.context;
    ourContext.grabCollection('featured');

    if (window.innerWidth < 997) {
      this.setState({
        isMobile: true,
        servicesShown:2
      });
      console.log("mobile");
    } else {
      this.setState({
        isMobile:false,
        servicesShown:4
      })
    }

      Aos.init();
   
  };

  componentDidUpdate() {
// if (!isMobileSafari) {
//   window.addEventListener(
//     "resize",
//     _.debounce(() => {
//       if (window.innerWidth > 997) {
//         this.setState({
//           isMobile: false,
//           servicesShown:4
//         });
//       }  if (window.innerWidth < 997) {
//         this.setState({
//           isMobile: true,
//           servicesShown:2
//         });
//       }
//     }, 400)
//   );
// }
  }

  render() {
let ourContext = this.context;
// backgroundImage: `url(https://kathrynjudybrown.s3.amazonaws.com/${posts.image})
    if (ourContext.collectionProds.length > 0) {
      var productList = ourContext.collectionProds.map((item, i) => {
        return (
          <div className="prod">
            <div className={`prod-img item-${i}`} style={{backgroundImage:`url(${item.images[0].src})`}} >
                <Link to={`/shop/featured/${item.handle}`}>
         
               {/* <img src={} className={`prod-img item-${i}`}></img> */}
               <p>{item.title}</p>
            </Link>
        </div>
        </div>
        )
      } )
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.servicesShown,
      slidesToScroll: 1,
      lazyLoad:'ondemand'
    };

    const { chosenOffering } = this.state;
    const {worksObject } = this.props;
    if (worksObject) {
        var cards = worksObject.map((item, i) => (
          <div 
          //  data-aos="slide-up"
          >
            <div className="service-box">
            <Link to={`/services/${item.id}`}>
              <Image className="off-image" src={item.image} />
              <div className="off-description">
                <p className="off-title primaryTextColor">{item.title}</p>
                <p className="off-price primaryTextColor">
                  {/* <b>${item.price}</b> */}
                </p>
              </div>
              </Link>
              </div>
          </div>
        ));
    }

    return (
      <div className="off-comp store-comp">
         {/* <Navigation textColor="#B67368" scrolledTextColor="#ffffff7a" logo={blueLogo} scrolledLogo={logo} scrolledDistance='120'/> */}
        <div className="offerings-container store-component">
          <div className="off-boxparent">
            <div className="off-textbox" data-aos="slide-right">
              <h1 className="off-page-title primaryTextColor">
                <h1>Shop</h1>
              </h1>
              {/* <p className="off-page-subtitle">What interests you most?</p> */}
              <br></br>
            </div>
          </div>

          <div className="services-parent">
            <div className="title-service-box">Best Sellers</div>
   
            <div className="service-container">
              {/* {cards} */}
              <div className="slider-container">
              <Slider {...settings}>
                {productList}
              </Slider>
            </div>
            {/* <Slider {...settings}> */}
            {/* </Slider> */}
            </div>
            </div>
        
        </div>

        {this.state.showModal ? (
          <OfferingsModal
            decOffering={this.decOffering}
            incOffering={this.incOffering}
            chosenOffering={chosenOffering}
            worksObject={worksObject}
            closeModal={this.closeModal}
            showModal={this.state.showModal}
          ></OfferingsModal>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
