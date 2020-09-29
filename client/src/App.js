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
      image: moons,
      title: "Shadow Work",
      price: "50",
      description:
        "This is a deep dive into the place you've locked away your inner pain. These sessions are designed to reintegrate aspects of the self that have been rejected or disowned.",
      moreInfo: '95% of your behaviors, emotional reactions, and beliefs are programmed into your unconscious mind. Shadow work illuminates these unconscious beliefs so they can be transformed and integrated back into wholeness, no longer wreaking havoc on your life and relationships. We will walk through your underworld and bring all things into the light of healing love.'
    },
    {
      image: stars,
      title: "Shamanic Healing Session",
      price: "200",
      description:
        "energetic healing session designed to clear your unwanted patterns from the root-- your energetic field, subconscious mind, and soul.",
        moreInfo: ''
    },
    {
      image: circleThing2,
      title: "Reiki Session",
      price: "400",
      description:
        "Energetic assessment, clearing, and balancing.",
        moreInfo: ''
    },
    {
      image: dipper1,
      title: "Health Coaching",
      price: "1,000",
      description:
        "Natural and holistic approach to optimize wellness. Completely tailored to YOU, I give practical tools and insight to help you achieve your goals and feel happy and healthy in the skin you're in.",
        moreInfo: ''
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
             {/* <Route path="/blog" component={Blog}/> */}
             <Route path="/about" component={About}/>
             <Route path="/connect/:id" render={(props) => <Connect {...props} worksObject={worksObject} title={`Props through render`} />}/>
            <Route path="/connect" render={(props) => <Connect {...props} worksObject={worksObject} title={`Props through render`}/> } />
             <Route path="/offerings" component={Offerings}/>
             <Route path="/admin" component={Admin}/>
             <Route path="/" component={Homepage}/>
           </Switch>
         </Router>
       <Footer></Footer>
         
    </div>
  
  );
}

export default App;
