import { Container, Nav, Button, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
import "./style.css";
import { Drawer } from "@material-ui/core";
import TemporaryDrawer from "../Drawer/index";

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

  componentDidMount() {
    if (window.innerWidth < 667) {
      this.setState({
        isMobile: true,
      });
      console.log("not mobile");
    }

    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= this.props.scrolledDistance) {
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
  }

  render() {
    const { isMobile } = this.state;

    return (
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
              this.state.status === "top" ? "transparent" : "#86BFFF",
            transition: ".6s",
          }}
          className="title"
        >
          {isMobile ? (
            <Navbar.Brand>
              <div className="menu-icon">
                <TemporaryDrawer></TemporaryDrawer>
              </div>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand href="/">
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
                style={{
                  color:
                    this.state.status === "top"
                      ? this.props.textColor
                      : this.props.scrolledTextColor,
                }}
                eventKey="/home"
                href="/"
              >
                Home
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link href="/offerings">Offerings</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              {/* TODO: Figure out these event keys for active pages */}
              <Nav.Link
                style={{
                  color:
                    this.state.status === "top"
                      ? this.props.textColor
                      : this.props.scrolledTextColor,
                }}
                href="/connect"
                eventKey="link-1"
              >
                Connect
              </Nav.Link>
            </Nav.Item>
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
                style={{
                  color:
                    this.state.status === "top"
                      ? this.props.textColor
                      : this.props.scrolledTextColor,
                }}
                eventKey="link-3"
                href="/about"
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="cta-nav-btn">
              <a href="/offerings">
                <Button
                  className="offerings-btn-link"
                  style={{
                    backgroundColor:
                      this.state.status === "top" ? "#86BFFF" : "white",
                    color: this.state.status === "top" ? "white" : "#86BFFF",
                    transition: ".6s",
                  }}
                >
                  Offerings
                </Button>
              </a>
            </Nav.Item>
            <Nav.Item className="nav-arrow">
              <Image
                style={{
                  display: this.state.status === "top" ? "none" : "flex",
                  transition: ".6s",
                }}
                src={whiteArrow}
              ></Image>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
