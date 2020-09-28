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

  const worksObject = [
    {
      image: moons,
      title: "Shadow Work",
      price: "50",
      description:
        "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    },
    {
      image: stars,
      title: "Meditation Session",
      price: "200",
      description:
        "This session is designed for introspection as we become sensitive to the present. I have a variety of sessions that I can lead you through, whether it is through the art of becoming noone, or using matras.",
    },
    {
      image: circleThing2,
      title: "Loving the Mirror",
      price: "400",
      description:
        "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    },
    {
      image: dipper1,
      title: "Something Else",
      price: "1,000",
      description:
        "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    },
    {
      image: moons,
      title: "Shadow Work",
      price: "50",
      description:
        "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    },
    {
      image: stars,
      title: "Meditation Session",
      price: "200",
      description:
        "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    },
    {
      image: circleThing2,
      title: "Loving the Mirror",
      price: "400",
      description:
        "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    },
    {
      image: dipper1,
      title: "Something Else",
      price: "1,000",
      description:
        "Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.",
    },
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
             <Route path="/connect" component={Connect}/>
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
