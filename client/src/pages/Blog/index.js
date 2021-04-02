import React, { Component, useState } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  CardDeck,
  Modal,
} from "react-bootstrap";
// import App from '../../App'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../../components/Navigation";
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
var Moment = require("moment");

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      createSession: false,
      editSession: false,
      posts: [],
      updatePosts: false,
      itemDeleted: false,
      itemPosted: null,
      pageRefresh: false,
      show: false,
      setShow: false,
      showMorePosts: false
    };
    // this.handleDelete = this.handleDelete.bind(this);
  }

  usePlaceholderImg(ev) {
    ev.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/1/15/No_image_available_600_x_450.svg";
    console.log(ev);
  }

  fetchPosts() {
    fetch(`/api/posts/`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json.data.date);
        this.setState({
          posts: json.data,
        });
      });
  }

  showPosts = () => {
    if (!this.state.showMorePosts) {
      this.setState({showMorePosts: true})
    } else {
      this.setState({showMorePosts: false})
    }
  }


  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    // var dt = "2016-05-02T00:00:00";

    var now = Moment();
    console.log(now);
    let m1 = Moment(now).subtract(1, 'months').format("MMM");
    let m2 = Moment(now).subtract(2, 'months').format("MMM");
    let m3 = Moment(now).subtract(3, 'months').format("MMM");
    // console.log(newNow);

    var showItems = 5;
    var itemLength= this.state.posts.length;
    console.log(itemLength);
    console.log(this.state.posts);
    const {
      createSession,
      editSession,
      show,
      showDialogue,
      showId,
      editId,
      showMorePosts
    } = this.state;
    console.log(editSession);
    const items = this.state.posts.slice(0, showItems).map(
      (item, i) => (
        <div key={i} className={`blog-card card-${i}`}>
           <a href={`/blog/${item.id}`}>
          <div className={`blogbox blog-text-box-${i}`}>
            <p className="blog-title">{item.title}</p>
            <p className="blog-date libre">
              {Moment(item.date).format("MMM D")}
            </p>
          </div>
         
            <img
              className="post-img"
              alt={`${item.itemdesc1}`}
              src={`https://kathrynjudybrown.s3.amazonaws.com/${item.image}`}
              onError={this.usePlaceholderImg}
            />
          </a>
        </div>
      )

      // </div>
    );

    const moreItems = this.state.posts.slice(5, itemLength).map(
      (item, i) => (
        <div key={i} className={`add-blog-card add-card-${i}`}>
           <a href={`/blog/${item.id}`}>
          <div className={`add-blogbox blog-text-box-${i}`}>
            <p className="blog-title">{item.title}</p>
            <p className="blog-date libre">
              {Moment(item.date).format("MMM D")}
            </p>
          </div>
         
            <img
              className="post-img"
              alt={`${item.itemdesc1}`}
              src={`https://kathrynjudybrown.s3.amazonaws.com/${item.image}`}
              onError={this.usePlaceholderImg}
            />
          </a>
        </div>
      )

      // </div>
    );

    const placeholderText = <div>There are no blog posts</div>;

    return (
      <div className="page-content blog-page">
        {/* <Navigation
          textColor="#B67368"
          scrolledTextColor="#ffffff7a"
          logo={blueLogo}
          scrolledLogo={logo}
          scrolledDistance="120"
        /> */}
        <div className="blog-page-content">
          <div className="text-date-container">
            <div className="blog-text-box">
              <h1 className="blog-page-title libre primaryTextColor">
                <i>My Blog</i>
              </h1>
              <p className="blog-page-subtitle">
                <FontAwesomeIcon
                  className="bolt-icon"
                  icon={faBolt}
                ></FontAwesomeIcon>
                November 6-25th
              </p>
            </div>
            <div className="blog-date-box">
              <button className="main-btn" variant="basic">
                {m1}
              </button>
              <button className="main-btn" variant="basic">
                {m2}
              </button>
              <button className="main-btn" variant="basic">
                {m3}
              </button>
            </div>
          </div>
          <div className="grid">{items}</div>
          <h1 onClick={this.showPosts}>+ Additional Posts</h1>
          {showMorePosts &&
          <div className="add-item-wrapper">
            {moreItems}
          </div>
          }
          <div className="button-wrapper">
            <a href="offerings" className="main-btn" variant="basic">
              Check out my offerings
            </a>
            <a href="/connect" className="main-btn" variant="basic">
              Contact me
            </a>
            <a href="/" className="main-btn" variant="basic">
              Home
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
