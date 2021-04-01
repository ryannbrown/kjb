import { Container, Nav, Button, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
import "./style.css";
import Cart from "../StoreComponents/Cart";
import { Drawer } from "@material-ui/core";
import TemporaryDrawer from "../Drawer/index";
import {Link} from 'react-router-dom';
import {
  ThemeContextConsumer,
  ThemeContextProvider,
} from "../../utils/themeContext";

import logo from "../../media/moons.png";
import whiteArrow from "../../media/white-arrow.png";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false,
    };
  }

  scrollUp =() => {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    if (window.innerWidth < 667) {
      this.setState({
        isMobile: true,
      });
      console.log("mobile");
    }

    this.listener = document.addEventListener("scroll", (e) => {
   
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        console.log("scroll")
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

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
    console.log(this.state);
  }

  render() {
    const { isMobile } = this.state;

    return (
      <ThemeContextConsumer>
      {(context) => (
      // <Navbar style={{padding:'0px'}}>
      //   <div className="nav-brand-box">
      //     <div className="menu-icon"><TemporaryDrawer></TemporaryDrawer></div>
      //     <div style={{backgroundColor: this.state.status ==="top" ? "transparent" : "rgba(217, 189, 189, 1)"}} className="title">
      //       <Navbar.Brand href="/">Kathryn Judy Brown</Navbar.Brand>
      //       <Navbar.Brand className="tagline" href="#home">Not your Mama's Healer</Navbar.Brand>
      //     </div>

      //   </div>
      // </Navbar>

      <div>
        <Navbar
          fixed="top"
          style={{
            backgroundColor:
              this.state.status === "top" ? "transparent" : "#B67368",
            transition: ".6s",
            
          }}
          className="title"
        >
          {isMobile ? (
            <Navbar.Brand>
              <div className="menu-icon">
                <TemporaryDrawer
                logo={this.state.status === "top" ? this.props.logo :
              this.props.scrolledLogo}
                >
                </TemporaryDrawer>
              </div>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand as={Link} to="/">
              {this.state.status === "top" ? (
                <img
                  src={this.props.logo}
                  width="75"
                  height="auto"
                  className="d-inline-block align-top"
                  alt="Kathryn Judy Brown"
                />
              ) : (
                <img
                  src={this.props.scrolledLogo}
                  width="75"
                  height="auto"
                  className="d-inline-block align-top"
                  alt="Kathryn Judy Brown"
                />
              )}
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link
              as={Link} 
                style={{
                  color:
                    this.state.status === "top"
                      ? this.props.textColor
                      : this.props.scrolledTextColor,
                      opacity: this.props.activePage === 'Home' ? 1 : .5
                }}
                eventKey="/home"
                to="/"
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
              as={Link} 
                style={{
                  color:
                    this.state.status === "top"
                      ? this.props.textColor
                      : this.props.scrolledTextColor,
                      opacity: this.props.activePage === 'Shop' ? 1 : .5
                }}
                eventKey="link-4"
                to="/shop/featured"
              >
                Shop
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link href="/offerings">Offerings</Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
              <Nav.Link
                style={{
                  color:
                    this.state.status === "top"
                      ? this.props.textColor
                      : this.props.scrolledTextColor,
                }}
                eventKey="link-2"
                href="/blog"
              >
                Blog
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link
              as={Link} 
                style={{
                  color:
                    this.state.status === "top"
                      ? this.props.textColor
                      : this.props.scrolledTextColor,
                      opacity: this.props.activePage === 'About' ? 1 : .5
                }}
                eventKey="link-3"
                to="/about"
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
              as={Link} 
                style={{
                  color:
                    this.state.status === "top"
                      ? this.props.textColor
                      : this.props.scrolledTextColor,
                      opacity: this.props.activePage === 'Retreats' ? 1 : .5
                }}
                eventKey="link-3"
                to="/retreats"
              >
                Retreats
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* TODO: Figure out these event keys for active pages */}
              <Nav.Link
              as={Link} 
                style={{
                  color:
                    this.state.status === "top"
                      ? this.props.textColor
                      : this.props.scrolledTextColor,
                      opacity: this.props.activePage === 'Connect' ? 1 : .5
                }}
                to="/connect"
                eventKey="link-1"
              >
                Connect
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="cta-nav-btn">
              <a href="/services">
                <button
                  className="main-btn"
                  style={{
                    backgroundColor:
                      this.state.status === "top" ? "#B67368" : "#F0DED1",
                    color: this.state.status === "top" ? "#F0DED1" : "#B67368",
                    transition: ".6s",
                  }}
                >
                  Services
                </button>
              </a>
            </Nav.Item>
            <Nav.Item className="nav-arrow">
              <Image onClick={this.scrollUp}
                style={{
                  display: this.state.status === "top" ? "none" : "flex",
                  transition: ".6s",
                }}
                src={whiteArrow}
              ></Image>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Cart
              // updateCartClose={this.state.updateCartClose}
              checkout={context.checkout}
              isCartOpen={context.isCartOpen}
              handleCartClose={context.handleCartClose}
              updateQuantityInCart={context.updateQuantityInCart}
              // removeLineItemInCart={this.removeLineItemInCart}
            />
                 </div>
                 )}
      </ThemeContextConsumer>
    );
  }
}
