import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
// import Navigation from "./components/Navigation/index"
import Homepage from "./pages/Homepage/index"
import Admin from "./pages/Admin/index.js"
import Blog from "./pages/Blog/index.js"
import About from "./pages/About/index.js"
import Connect from "./pages/Connect/index.js"
import Offerings from "./pages/Offerings/index"
import BlogPost from "./pages/BlogPost/index.js"
import Footer from "./components/Footer/index.js"
import WorksDetails from "./pages/WorksDetails"
import moons from "./media/bluemoons.png";
// import Navigation from "../../components/Navigation"
import stars from "./media/stars.png";
import circleThing2 from "./media/circle-thing-2.png";
import dipper1 from "./media/dipper-1.png";
import OfferingsModal from "./components/OfferingsModal/index";
import logo from "./media/moons.png";
import blueLogo from "./media/bluemoons.png";
import circleThing from "./media/circle-thing.png";
// import Portfolio from "./components/Portfolio/index"
// import Pricing from "./components/Pricing/index"
// import About from "./components/About/index"
// import Contact from "./components/Contact/index"
import createHistory from 'history/createBrowserHistory';


function App() {


  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  let worksObject = [
    {
      image: stars,
      title: "Shamanic Healing Sessions",
      price: "120",
      description: "These powerful sessions are effective at clearing heavy energies, limiting beliefs, and karmic soul contracts.",
      moreInfo:`Shamanic healing sessions work to clear unwanted patterns by tracing them back to their origin in the energy field and clearing at the source. These powerful sessions are effective at clearing heavy energies, limiting beliefs, and karmic soul contracts. Negative patterns and limiting beliefs that we struggle with often come from trauma that has left an imprint in the energetic field. It is believed that these energetic imprints can also be carried over from past lives as well as though our ancestral lineages. Shamanic healing gets to the core of these patterns and removes them from the soul and subconscious mind. Freeing ourselves at this energetic level is tremendously powerful and paves the way for rapid personal growth. These sessions are incredibly beneficial if you've found yourself: struggling to break through habitual cycles and patterns desiring to clear barriers to your dreams and goals ready to let go of negative stories and limiting beliefs feeling stuck and unable to move forward struggling with addictions seeking empowerment and inner freedom`
    },
    {
      image: circleThing2,
      title: "Reiki Healing Session",
      price: "120",
      description:
        "Energetic assessment, clearing, and balancing.",
        moreInfo: `Reiki, or "universal life energy", is an energy healing modality that works gently and powerfully within the chakras and layers of the auric field. Reiki energy healing provides benefits for a person's physical, emotional, mental, and spiritual wellbeing. It is an effective modality for a myriad of issues and imbalances with zero risk. Everything is made up of energy.. thoughts, emotions, spirit, and the physical body. When your energy is healthy, you thrive. Rejuvenating and therapeutic, this session will clear blockages, release stagnant energy, open up energetic pathways, and create a healthy flow of energy through the body, chakras, and auric field. Benefits from these sessions can include:
        healing on a cellular level
        healing unconscious patterns 
       healing trauma from child abuse
       healing trauma from sexual and physical abuse
       healing relationship issues, codependency, and addictions
       healing depression and anxiety
       healing fear and panic
       increases creativity, learning abilities, and personal sense of power
       empowers your goals
       brings peace and trust in life balances the chakras and grounds the body`
    },
    {
      image: circleThing,
      title: "Intuitive Healing Sessions",
      price: "150",
      description:
        "Combination of shamanic energy healing and reiki energy healing. Each session is unique and tailored to the individual's needs, goals, and intentions.",
      moreInfo: `These sessions are a combination of shamanic energy healing and reiki energy healing. Each session is unique and tailored to the individual's needs, goals, and intentions. Guided by my intuition, I will utilize a combination of energetic tools and techniques to facilitate a deep and restorative healing experience. These sessions can be targeted towards specific issues or general wellbeing. I will relay any intuitive messages I may have received for you during the session. `
    },
    {
      image: moons,
      title: "Shadow Work Sessions",
      price: "75",
      description:
        "This is a deep dive into the place you've locked away your inner pain. These sessions are designed to reintegrate aspects of the self that have been rejected or disowned.",
      moreInfo: `These intuitive counseling sessions will center around shadow work, inner child healing, trauma release, and emotional healing. The "shadow" is a place in our psyche where we send the aspects of ourselves that we have denied, rejected, or disowned. These traumatized and fragmented aspects are crying out for integration whenever we experience emotional triggers. If we suppress or reject our emotions, they do not peacefully go away as we might wish. We may be able to temporarily put them out of mind, but inevitably these fragmented parts of the psyche will wreck havoc on our internal state of being until we bring them back into wholeness. These sessions are about wholeness. Since the shadow exists within the subconscious mind, which makes up 90% of our brain function, it is so important to examine our deep-seated beliefs and emotions that live here. Doing this kind of inner work will rewire the neural pathways of brain to support emotional healing and integration. I will guide you each step of the way as we explore your inner landscape and restore harmony within. These session are for you if:
      you feel at war within yourself
      you struggle with explosive reactions
      you feel overwhelmed by your emotions
      you aren't sure how to handle triggers
      you need a safe space to process memories and emotions
      you desire greater self-acceptance and understanding
      you are seeking guidance`
    },
    {
      image: dipper1,
      title: "Health Coaching Sessions",
      price: "100",
      description:
        "Natural and holistic approach to optimize wellness. Completely tailored to YOU, I give practical tools and insight to help you achieve your goals and feel happy and healthy in the skin you're in.",
        moreInfo: `Trained and certified in integrative health and nutrition, my approach to wellness is holistic and dogma-free. These sessions are meant to guide you towards what is right for YOU. There is not one perfect diet or way of living because each person is completely unique with different needs. We will get to the core of what your personal needs are, where you feel stuck, how you want to feel, and where you need support. After learning about you and your lifestyle, we will assess the areas in need of support and create actionable steps and attainable goals. I will give you as much guidance as you need to help you create lifestyle changes that are practical and sustainable. Health coaching sessions are designed to inspire you and empower you to live in a way that feels amazing. As a bonus, I offer yoga and meditation guidance if that is something you are interested in adding to your lifestyle. Consider a six month program if you are looking for continual support to bridge the gap between where you are and where you want to be.
        These sessions can be very powerful for:
        establishing a healthy relationship with food
        weight loss
        alleviating stress
        detoxing
        feeling energized
        increasing motivation
        creating a sustainable healthy lifestyle
        increasing mental clarity
        correcting hormonal imbalances
        boosting confidence
        + much more. 
        5 pack - $400 (save $100)
        6 month program (12 sessions) $900 (save $300)`
    },
    // {
    //   image: moons,
    //   title: "Shadow Work",
    //   price: "50",
    //   description:
    //     "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    // },
    // {
    //   image: stars,
    //   title: "Meditation Session",
    //   price: "200",
    //   description:
    //     "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    // },
    // {
    //   image: circleThing2,
    //   title: "Loving the Mirror",
    //   price: "400",
    //   description:
    //     "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    // },
    // {
    //   image: dipper1,
    //   title: "Something Else",
    //   price: "1,000",
    //   description:
    //     "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    // },
  ];

  return (
    <div className="App">
         {/* <Navigation/> */}
         <Router history = {history}>
           <Switch>
             {/* <Route path = "/" component={App}/> */}
             {/* <Route path="/pricing" component={Pricing}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/> */}
            <Route path="/works/:id" render={(props) => <WorksDetails {...props} worksObject={worksObject} title={`Props through render`} />} />
             <Route path="/blog/:post" component={BlogPost}/>
             <Route path="/blog" component={Blog}/>
             <Route path="/about" component={About}/>
             <Route path="/connect/:id" render={(props) => <Connect {...props} worksObject={worksObject} title={`Props through render`} />}/>
            <Route path="/connect" render={(props) => <Connect {...props} worksObject={worksObject} title={`Props through render`}/> } />
            <Route path="/offerings" render={(props) => <Offerings {...props} worksObject={worksObject} title={`Props through render`}/> } />
             {/* <Route path="/offerings" component={Offerings}/> */}
             <Route path="/admin" component={Admin}/>
             <Route path="/" component={Homepage}/>
           </Switch>
         </Router>
       <Footer></Footer>
         
    </div>
  
  );
}

export default App;
