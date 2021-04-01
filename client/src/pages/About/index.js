import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import "./style.css";
import logo from "../../media/moons.png";
import blueLogo from "../../media/bluemoons.png";
import portrait from "../../media/portrait-min.jpg";
import { Hidden } from "@material-ui/core";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      showModal: false,
      forms: []
    };
  }

  fetchPosts() {}

  componentDidMount() {}

  render() {
    return (
      <div className="about-page">
          {/* <Navigation textColor="#B67368" scrolledTextColor="white" logo={blueLogo} scrolledLogo={logo} scrolledDistance='120' activePage="About"/> */}
        <div className="about-content">
          <div className="white-block">
            <div className="img-container">
              <div
                className="about-img"
                style={{
                  // backgroundImage: `linear-gradient(to top, transparent 85%, #ffffff ),url(${portrait})`,
                  // backgroundColor: `#FF8686`,
                  // opacity: `90%`,
                  // backgroundBlendMode: `lighten`,
                  backgroundPosition: `center`,
                  position: `absolute`,
                  overflow: `hidden`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  height: '75vh',
                  width: '100%',
                  top: '35%',
                }}
              >
              </div>
            </div>
          </div>
          <div className="pink-block">
            <div className="narrow">
            </div>
            <div className="about">
              <h1>A little bit about me!</h1>
              <p>
              Being highly sensitive and intuitive, I've been unknowingly reading energy for as long as I can remember. My personal path led me into the fields of spirituality, psychology, and integrative nutrition. Before I discovered holistic and integrative healing, I was stuck on the relentless self-improvement hamster wheel. I had no idea how deeply I had repressed emotions, or the amount of trauma that had affected me. I had no idea what shadow work was or how the subconscious mind was running the show. I had no idea that physical symptoms were rooted in energetic imbalances. I tried many traditional approaches to healing. I would feel better for a time, but old patterns and stories would inevitably resurface. After an incredibly dark night of the soul, I had a personal spiritual awakening that changed everything. This led me on a deep journey of exploration- I expanded my mind, dropped the dogma, let go of my resistance, and dove headfirst into the shadow of my subconscious. This is is where the deep and restorative healing began. I became well acquainted with my own energy field, the stories it was holding, and the imbalances that needed healing. I discovered the inseparable connection between the mind, body, and spirit. I discovered that when I changed my energy, I changed my whole life. No more recurring, unwanted patterns. No more running from emotions and triggers. No more persistent, underlying anxiety and instability. Energy is the root and foundation of everything. Healing on an energetic level healed my inner world and recalibrated my entire state of being. I was no longer at war within myself. I had transformed my inner world into a complete oasis. It is my personal mission to empower others in their own healing and guide them into a felt sense of wholeness and freedom.
              </p>
<p>I've been immersed in the healing arts for years and have been trained and certified in several wonderful healing modalities. For my life's work, I've decided to put together the ultimate healing cocktail. Using a combination of my own energetic abilities and my years of training, I intuitively design sessions and packages for clients that deliver lasting transformation and results. </p>
<p>As a <strong>Certified Shamanic Practitioner</strong> and <strong>Karuna Reiki Master</strong>, I sense the energy field of my client, uncover blocks and imbalances, and work to restore harmony and healing within the chakras and auric field. </p>
<p>As a <strong>Certified Integrative Health Coach</strong>, I work with clients to create lifestyle changes that will do wonders for the physical body and create lasting change in overall health and wellness.</p>
<p>As a <strong>Certified Meditation Teacher</strong>, I give clients the tools and techniques to dive into deep states of consciousness that will transform the mind, develop the skill of observation, and bring about stillness and quietness.</p>
<p>As a <strong>Shadow Worker</strong>, I am able to hold space for clients to work through their darkest fears and most crippling wounds. Providing a safe space for clients to process difficult memories and emotions, I offer my unconditional presence, compassion, and thought-provoking questions and guidance.</p>
<p>
Currently, I am in training to be a <strong>Certified Yoga Teacher</strong>. I will be able to give clients powerful movement practices as a somatic release to facilitate the process of deep healing.</p>
<p>
I am a happily married to my husband, Ryan, and I am mother to our magical daughter, Haven. As a family, we love travel, adventure, hiking, nature, and good food! In my free time, you can find me goofing around, cooking, writing, taking baths, reading, and talking all things spirituality, consciousness, and cosmic mysteries 🙂</p>
<p>
It is my honor to hold sacred space for your healing and transformation. This work is my utmost passion. Every session is done in compassion, integrity, and excellence. May you break free from your unwanted patterns, experience the freedom that is inherently yours, and feel fully whole and empowered. May you discover the haven within.</p>
<p>Xo
Kathryn</p>
            </div>
          </div>
          <div className="white-block">
            <div className="about-contact">
              <h1>Feel free to reach out!</h1>
              <p>
                Contact me anytime, just fill out the   
                <a href="/connect"> Connect Form
                </a>
              </p>
              <p>
                Also... Follow me on:
                <a href="https://www.instagram.com/kathrynjudybrown/"> @instagram
                </a>
                {/* <a href="https://www.facebook.com/milliegrace22"> @facebook</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
