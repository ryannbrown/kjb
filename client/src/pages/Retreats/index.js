
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';
import "./style.css";
// import { Drawer } from "@material-ui/core";
// import Hero from "../../components/Hero";
// import heroImg from "../../media/bread.jpg";
// import Footer from "../../components/Footer/footer";
import Prismic from "prismic-javascript";
import Navigation from "../../components/Navigation/index"
import logo from "../../media/logo2.png";
import blueLogo from "../../media/logo.png";

// import ContactForm from "../../components/ContactForm"
// import { Date, Link, RichText } from "prismic-reactjs";
// import linkResolver from "../../utils/linkResolver";
import { RichText } from "prismic-reactjs";
import { format, parseISO } from "date-fns";
// import fam from '../../media/fam.jpg'
import ClipLoader from "react-spinners/ClipLoader";
// import uniq from 'lodash/uniq';
// import _ from 'lodash'
// import logo from '../../media/logo.png'

require("dotenv").config();
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function Retreats() {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

//   console.log(apiEndpoint, accessToken);
  // This is where you would add your access token for a Private repository

  var Client = Prismic.client(apiEndpoint, { accessToken });

  const [doc, setDocData] = React.useState(null);
  const [pageData, setPageData] = React.useState(null);
  const [cats, setCats] = React.useState(null);
  const [ maxPosts, setMaxPosts] = React.useState(4);



  React.useEffect(() => {
    console.log("hey man!");
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "retreat"),
        { orderings: "[my.retreat.date desc]" }
      );
      if (response) {
console.log(response)
          setDocData(response.results);    

      }
    };
    fetchData();
  }, []);

  if (doc) {
    var retreats = doc.map(
      (post) => (
        <div className="retreat-post">
          {/* <Link to={`/blog/${post.uid}`}> */}
          <Link to={`/retreats/${post.uid}`}>

          <img
            className="latest-blog-img"
            alt="cover"
            src={post.data.main_img.url}
          />
          <h1>{post.data.retreat_title[0].text}</h1>
         </Link>
        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );
    // var categories = cats.map(
    //   (cat) => (
    //     <div onClick={searchByCat} data={cat} className="blog-category">
    //       <p>{cat}</p>
    //       <div className="opacity-layer">

    //       </div>
    //     </div>
    //   )
    //   // <div>post</div>
    //   // <h1>{RichText.asText(doc.data.title)}</h1>
    // );
  //  let theMaxPosts = 4;
    // var nextThreePosts = doc.slice(1, maxPosts).map(
    //   (post) => (
    //     <div className="list-blog-post">
    //       {/* <Link to={`/blog/${post.uid}`}> */}
    //       <div
    //         className="blog-img"
    //         alt="cover"
    //         style={{backgroundImage: `url(${post.data.blog_image.url})`}}
    //         // src={post.data.blog_image.url}
    //       />
    //       <div className="blog-details">
    //         <h1>{post.data.title[0].text}</h1>
    //         <div className="date-cat">
    //           <p>{format(new Date(post.data.date), "MMMM DD, YYYY")}</p>
    //           <p className="lil-circle">●</p>
    //           <p>{post.data.category_name}</p>
    //         </div>
    //         <p className="ta-left list-description">
    //         <RichText
    //           render={post.data["meta-description"]}
    //           linkResolver={linkResolver}
    //         />
    //       </p>
    //       <Link to={`/blog/${post.uid}`}>
    //       <button className="transparent-btn">View Post</button>
    //       </Link>
    //       </div>
    //       {/* </Link> */}
    //     </div>
    //   )
    //   // <div>post</div>
    //   // <h1>{RichText.asText(doc.data.title)}</h1>
    // );
  }

  return (
    <div className="retreat-page">
          <Navigation textColor="#B67368" scrolledTextColor="white" logo={blueLogo} scrolledLogo={logo} scrolledDistance='5' activePage="Retreats"/>
    <div className="retreat-wrapper">
        {retreats}
    </div>
  </div>

  );
}
