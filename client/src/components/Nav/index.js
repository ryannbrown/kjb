import React, { Component } from "react";
import "./style.css";
// import Mobile from "./mobile"
import logo from "../../media/logo.png";
import lightLogo from "../../media/logo2.png";
import Cart from "../StoreComponents/Cart";
import {isMobileSafari} from 'react-device-detect';

import {
  ThemeContextConsumer,
  ThemeContextProvider,
} from "../../utils/themeContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";

var _ = require("lodash");

export default class Nav extends Component {
  static contextType = ThemeContextConsumer;
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      // status: "top",
      mobileNavToggle: false,
      scrollingUp: false,
      hideNav: false,
      isMobile: false,
      modalOpened: false,
      overflowHidden: true,
      status: "top",
      // registrationToggled: false
    };
  }

  toggleNav = () => {
    if (this.state.mobileNavToggle) {
      this.setState({
        mobileNavToggle: false,
      });
    } else if (!this.state.mobileNavToggle) {
      this.setState({
        mobileNavToggle: true,
      });
    }
  };

  // toggleRegister = () => {
  //   this.setState({
  //     registrationToggled: !this.state.registrationToggled
  // })
  // }

  logOut = () => {
    var ourContext = this.context;
    ourContext.logoutUser();
    sessionStorage.removeItem("userLoggedIn");
    sessionStorage.removeItem("email");
    // window.location.reload();
  };

  toggleModal = () => {
    this.fixOverflow();
    console.log("clicked");
    this.setState({
      modalOpened: !this.state.modalOpened,
    });
  };

  handleNavigation = (e) => {
    // console.log("handling nav");

    // if (window.innerWidth < 750) {

    const window = e.currentTarget;

    if (this.prev > window.scrollY) {
      // console.log("scrolling up")
      this.setState({
        hideNav: false,
      });
    } else if (this.prev < window.scrollY) {
      // console.log("scroll down, hide nav")
      this.setState({
        hideNav: true,
      });
    }
    this.prev = window.scrollY;
    // };
  };

  handleMobileNav = () => {
    this.fixOverflow();
    this.setState({ mobileNavToggle: false });
    document.getElementById("responsive-menu").checked = false;
  };

  getCats = () => {
    fetch(`/api/cats`)
      .then((res) => res.json())
      .then((json) => {
        console.log("nav-cats", json);
        if (json.length > 0) {
          // console.log("we have length")
          this.setState({
            cats: json,
            isLoading: false,
            truthyCats: true,
            // userHasReviewed: false,
          });
        } else {
          // console.log("we have else")
          this.setState({
            cats: [],
            truthyReviews: false,
            isLoading: false,
            truthyCats: false,
          });
        }
      });
  };

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        if (this.state.status !== "bgChanged") {
          this.setState({ status: "bgChanged" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });

    this.getCats();

    var ourContext = this.context;
    // console.log(ourContext);
    // console.log("HEY!")
    this.prev = window.scrollY;
    window.addEventListener("scroll", (e) => this.handleNavigation(e));

    if (window.innerWidth < 725) {
      this.setState({
        isMobile: true,
      });
    } else if (window.innerWidth < 725) {
      this.setState({
        isMobile: false,
      });
    }
  }

  handleMobileNav = () => {
    this.fixOverflow();
    this.setState({ mobileNavToggle: false });
    document.getElementById("responsive-menu").checked = false;
  };

  fixOverflow = () => {
    console.log(this.state.overflowHidden);
    if (this.state.overflowHidden) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = "unset";
    }
    this.setState({ overflowHidden: !this.state.overflowHidden });
  };

  componentDidUpdate() {
    // console.log(this.state);
    document.removeEventListener("scroll", this.listener);

    // console.log(this.state.modalOpened);
    // if (this.state.lastPosition > 0) {
    //   console.log("here boy")
    //       if (position < this.state.lastPosition) {
    //         // console.log(position, "scrolling up")
    //         // console.log("scrolling up")
    //       }
    //     }

    if (!isMobileSafari) {
// console.log("not safari")
      window.addEventListener(
        "resize",
        _.debounce(() => {
          if (document.getElementById("responsive-menu").checked) {
            // console.log("its true");
            document.getElementsByTagName("body")[0].style.overflowY = "hidden";
          }
  
          if (window.innerWidth > 725) {
            this.setState({
              mobileNavToggle: false,
              isMobile: false,
            });
            // change header from mobile view
            // document.getElementById("navvy-bar").className = "header";
            // // hide the nav sub columns if expanded from mobile width
            // document.getElementById("nav-toggle").checked = false;
            // // uncheck the hamburger to reset icon style
            // document.getElementById("menu-toggle").checked = false;
          }
          if (window.innerWidth < 725) {
            this.setState({
              isMobile: true,
            });
            // document.getElementById("menu-toggle").checked = false;
            if (this.state.mobileNavToggle) {
              document.getElementById("menu-toggle").checked = true;
            }
          }
        }, 400)
      );
      }
    }


  render() {
    const { truthyCats, cats } = this.state;

    if (truthyCats) {
      // console.log(truthyReviews, reviews)
      var items = cats.map((item, i) => (
        <Link
          onClick={this.handleMobileNav}
          to={`/categories/${item.panda_cat}`}
        >
          {item.panda_cat}
        </Link>
      ));
    }

    return (
      <ThemeContextConsumer>
        {(context) => (
          <nav
            style={{
              backgroundColor:
                this.state.status === "top" ? "#F8F5F2" : "#B67368",
              color: this.state.status === "top" ? "#F0DED1" : "#B67368",
              transition: ".6s",
            }}
          >
            <div classname="container">
              <div className="mobile-nav-section">
              <input
                onClick={this.fixOverflow}
                id="responsive-menu"
                type="checkbox"
              ></input>
              <label id="menu-label" for="responsive-menu" onClick={()=>{this.setState({status:"top"})}}><span
                  class={
                    this.state.status === "top"
                      ? "menu-icon"
                      : "menu-icon scrolled"
                  }
                ></span></label>
              <div id="overlay"></div>
              <div className="inner-menu">
                <div className="menu-content">
                  <div className="menu-links">
                    <NavLink onClick={this.handleMobileNav} to="/">Home</NavLink>
                    <NavLink onClick={this.handleMobileNav} to="/about">About</NavLink>
                    <NavLink onClick={this.handleMobileNav} to="/shop/featured">Shop</NavLink>
                    <NavLink onClick={this.handleMobileNav} to="/services">Services</NavLink>
                    <NavLink onClick={this.handleMobileNav} to="/connect">Connect</NavLink>
                  </div>
                  <div className="category-block">
                    <div className="cat-wrapper">{items}</div>
                  </div>
                </div>
              </div>
            
            
              </div>
              <NavLink activeClassName="active" exact to="/">
                <img
                  className="brand-icon"
                  src={this.state.status === "top" ? logo : lightLogo}
                ></img>
              </NavLink>
              <div className="nav-center">
                <NavLink  activeStyle={{
   opacity:1
  }} style={{
              color: this.state.status === "top" ? "#B67368" : "#F0DED1",
              transition: ".6s",
            }} activeClassName="active" exact to="/">Home</NavLink>
                <NavLink activeStyle={{
    opacity:1
  }} style={{
              color: this.state.status === "top" ? "#B67368" : "#F0DED1",
              transition: ".6s",
            }} activeClassName="active" exact to="/about">About</NavLink>
                <NavLink activeStyle={{
     opacity:1
  }} style={{
              color: this.state.status === "top" ? "#B67368" : "#F0DED1",
              transition: ".6s",
            }} to="/shop/featured">Shop</NavLink>
                <NavLink activeStyle={{
     opacity:1
  }} style={{
              color: this.state.status === "top" ? "#B67368" : "#F0DED1",
              transition: ".6s",
            }} to="/services">Services</NavLink>
                <NavLink activeStyle={{
   opacity:1
  }} style={{
              color: this.state.status === "top" ? "#B67368" : "#F0DED1",
              transition: ".6s",
            }} exact to="/connect">Connect</NavLink>
              </div>
              <div className="nav-right">
                <p></p>
                {context.checkout.lineItems.length > 0 && (
                      <p style={{
                        color: this.state.status === "top" ? "#B67368" : "#F0DED1",
                        transition: ".6s",
                      }} className="cart-count">
                        {context.checkout.lineItems.length}
                      </p>
                    )}
              <i onClick={context.handleCartOpen}  style={{
                    color: this.state.status === "top" ? "#B67368" : "#F0DED1",
                    transition: ".6s",
                  }} className="lni lni-cart"></i>
                {/* <button
                  className="main-btn"
                  style={{
                    backgroundColor:
                      this.state.status === "top" ? "#B67368" : "#F0DED1",
                    color: this.state.status === "top" ? "#F0DED1" : "#B67368",
                    transition: ".6s",
                  }}
                >
                  Services
                </button> */}
              </div>
             
            </div>
            <Cart
              // updateCartClose={this.state.updateCartClose}
              checkout={context.checkout}
              isCartOpen={context.isCartOpen}
              handleCartClose={context.handleCartClose}
              updateQuantityInCart={context.updateQuantityInCart}
              // removeLineItemInCart={this.removeLineItemInCart}
            />
          </nav>
        )}
      </ThemeContextConsumer>
    );
  }
}
