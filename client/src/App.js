import React, {Component, Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from "react-router-dom";
import history from "./utils/history"
// import Navigation from "./components/Navigation/index"
import Homepage from "./pages/Homepage/index"
import Admin from "./pages/Admin/index.js"
import Blog from "./pages/Blog/index.js"
import About from "./pages/About/index.js"
import Connect from "./pages/Connect/index.js"
import Offerings from "./pages/Offerings/index"
import Retreats from "./pages/Retreats/index"
import Retreat from "./pages/Retreat/index"
import BlogPost from "./pages/BlogPost/index.js"
import Footer from "./components/Footer/index.js"
import WorksDetails from "./pages/WorksDetails"
import moons from "./media/bluemoons.png";
// import Navigation from "../../components/Navigation"
import stars from "./media/stars.png";
import circleThing2 from "./media/circle-thing-2.png";
import ScrollToTop from "./utils/scrollToTop.js"
import dipper1 from "./media/dipper-1.png";
import OfferingsModal from "./components/OfferingsModal/index";
import logo from "./media/moons.png";
import blueLogo from "./media/bluemoons.png";
import circleThing from "./media/circle-thing.png";
import Products from "./components/StoreComponents/Products"
import ShopCollection from "./pages/StoreCollection/index"
import { ThemeContextConsumer, ThemeContextProvider } from "./utils/themeContext";
// import Portfolio from "./components/Portfolio/index"
// import Pricing from "./components/Pricing/index"
// import About from "./components/About/index"
// import Contact from "./components/Contact/index"

import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_NO)
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})
//newtag


let worksObject = [
  {
    id:0,
    image: stars,
    title: "Shamanic Healing Sessions",
    price: "120",
    description: "These powerful sessions are effective at clearing heavy energies, limiting beliefs, and karmic soul contracts.",
    moreInfo:`Shamanic healing sessions work to clear unwanted patterns by tracing them back to their origin in the energy field and clearing at the source. These powerful sessions are effective at clearing heavy energies, limiting beliefs, and karmic soul contracts. Negative patterns and limiting beliefs that we struggle with often come from trauma that has left an imprint in the energetic field. It is believed that these energetic imprints can also be carried over from past lives as well as though our ancestral lineages. Shamanic healing gets to the core of these patterns and removes them from the soul and subconscious mind. Freeing ourselves at this energetic level is tremendously powerful and paves the way for rapid personal growth. These sessions are incredibly beneficial if you've found yourself: `,
    benefits: ['struggling to break through habitual cycles and patterns', 'desiring to clear barriers to your dreams and goals', 'ready to let go of negative stories and limiting beliefs', ' feeling stuck and unable to move forward', 'struggling with addictions', 'seeking empowerment and inner freedom' ],
    link: 'https://app.acuityscheduling.com/schedule.php?owner=21301691&appointmentType=19999328'
  },
  {
    id:1,
    image: circleThing2,
    title: "Reiki Healing Sessions",
    price: "100",
    description:
      "Energetic assessment, clearing, and balancing.",
      moreInfo: `Reiki, or "universal life energy", is an energy healing modality that works gently and powerfully within the chakras and layers of the auric field. Reiki energy healing provides benefits for a person's physical, emotional, mental, and spiritual wellbeing. It is an effective, complimentary treatment for a myriad of issues and imbalances. Energy is the root and foundation of everything: from the spiritual to the physical, to the thoughts we think and emotions we feel. When our energy is healthy, we thrive. Rejuvenating and therapeutic, this session will clear blockages, release stagnant energy, open up energetic pathways, and create a healthy flow of energy through the body, chakras, and auric field. Reiki puts the body in a rest and digest state which accelerates the body's self-healing ability. These sessions are supportive for:`,
      benefits: ['healing on a cellular level', 'promoting restful sleep', 'promoting mental clarity', 'supporting the immune system', 'enhancing spiritual connection', 'relieving depression and anxiety', 'relieving pain and discomfort', 'healing trauma from abuse', 'healing relationship issues and addictions ', 'balancing the chakras ', 'grounding the body'  ],
      link: 'https://app.acuityscheduling.com/schedule.php?owner=21301691&appointmentType=19999340'
  },
  {
    id:2,
    image: circleThing,
    title: "Intuitive Healing Sessions",
    price: "150",
    description:
      "Combination of shamanic energy healing and reiki energy healing. Each session is unique and tailored to the individual's needs, goals, and intentions.",
    moreInfo: `These sessions are a combination of shamanic energy healing and reiki energy healing with my personalized approach. Depending on the client's energetic needs, sessions may also include guided breathwork, guided meditation, visualization, energetic cord cutting, and somatic release practices. Each session is unique and tailored to the individual's needs, goals, and intentions. Guided by my intuition, I will utilize a combination of energetic tools and techniques to facilitate a deep and restorative healing experience. These sessions can be targeted towards specific issues or general wellbeing. I will relay any intuitive messages I may have received for you during the session. 
    These sessions are wonderful for:`,
    benefits: ['personal breakthrough and empowerment', 'energetic clearing', 'energetic cord cutting', 'increased confidence and self-awareness', 'manifestation work', 'protection work ' ,'emotional release', 'trauma release'   ],
    link: 'https://app.acuityscheduling.com/schedule.php?owner=21301691&appointmentType=19999349'
  },
  {
    id:3,
    image: moons,
    title: "Shadow Work Sessions",
    price: "75",
    description:
      "This is a deep dive into the place you've locked away your inner pain. These sessions are designed to reintegrate aspects of the self that have been rejected or disowned.",
    moreInfo: `These intuitive counseling sessions will center around shadow work, inner child healing, trauma release, and emotional healing. The "shadow" is a place in our psyche where we send the aspects of ourselves that we have denied, rejected, or disowned. These traumatized and fragmented aspects are crying out for integration whenever we experience emotional triggers. If we suppress or reject our emotions, they do not peacefully go away as we might wish. We may be able to temporarily put them out of mind, but inevitably these fragmented parts of the psyche will wreck havoc on our internal state of being until we bring them back into wholeness. These sessions are about wholeness. Since the shadow exists within the subconscious mind, which makes up 90% of our brain function, it is so important to examine our deep-seated beliefs and emotions that live here. Doing this kind of inner work will rewire the neural pathways of brain to support emotional healing and integration. I will guide you each step of the way as we explore your inner landscape and restore harmony within. These session are for you if:`,
    benefits: [' you feel at war within yourself', 'you struggle with explosive reactions', '  you feel overwhelmed by your emotions', "you aren't sure how to handle triggers", ' you need a safe space to process memories and emotions', 'you desire greater self-acceptance and understanding', ' you are seeking guidance' ],
    link: 'https://app.acuityscheduling.com/schedule.php?owner=21301691&appointmentType=19999361'
  },
  {
    id:4,
    image: dipper1,
    title: "Health Coaching Sessions",
    price: "100",
    description:
      "Natural and holistic approach to optimize wellness. Completely tailored to YOU, I give practical tools and insight to help you achieve your goals and feel happy and healthy in the skin you're in.",
      moreInfo: `Trained and certified in integrative health and nutrition, my approach to wellness is holistic and dogma-free. These sessions are meant to guide you towards what is right for YOU, your unique needs and desires. You won't hear me preach one diet or set way of doing things. We will get to the core of what your personal needs are, where you feel stuck, how you want to feel, and where you need support. After learning about you and your lifestyle, we will assess the areas in need of support and create actionable steps and attainable goals that feel good and inspiring to you. We will feel into the energetics of what's going on and begin to shift them in your favor. I will give you as much guidance as you need to help you create lifestyle changes that are practical and sustainable. Health coaching sessions are designed to inspire you and empower you to live in a way that feels amazing. As a bonus, I offer yoga and meditation guidance if that is something you are interested in adding to your lifestyle. Consider a six month program if you are looking for continual support to bridge the gap between where you are and where you want to be.
      These sessions are powerful for:`,
      benefits: [' establishing a healthy relationship with food', ' weight loss', 'loving yourself', ' alleviating stress', " detoxing", ' feeling energized', 'increasing motivation', 'creating a sustainable healthy lifestyle', ' increasing mental clarity', 'correcting hormonal imbalances',' boosting confidence', '+ much more'  ],
      packages: ['5 pack - $400 (save $100)',  '6 month program (12 sessions) $900 (save $300)', 'If you want to book a package, contact me directly'],
      link: 'https://app.acuityscheduling.com/schedule.php?owner=21301691&appointmentType=19999369'

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
    // this.handler = this.handler.bind(this);
  }

  // const history = createHistory({
  //   basename: process.env.PUBLIC_URL,
  // });



componentDidMount() {
  ReactGA.pageview(window.location.pathname + window.location.search)
}



  render() {

    
      return (
        <div className="App">
                 <ThemeContextConsumer>
         {context => (
           <Fragment>
             {/* <Navigation/> */}
             <ScrollToTop/>
               <Switch>
                 {/* <Route path = "/" component={App}/> */}
                 {/* <Route path="/pricing" component={Pricing}/>
                 <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/> */}
                <Route exact path="/" render={(props) => <Homepage {...props} worksObject={worksObject} title={`Props through render`} />}/>
                <Route path="/services/:id" render={(props) => <WorksDetails {...props} worksObject={worksObject} title={`Props through render`} />} />
                 <Route path="/blog/:post" component={BlogPost}/>
                 <Route path="/blog" component={Blog}/>
                 <Route path="/about" component={About}/>
                 <Route path="/retreats/:retreat" component={Retreat}/>
                 <Route path="/retreats" component={Retreats}/>
                 <Route path="/connect/:id" render={(props) => <Connect {...props} worksObject={worksObject} title={`Props through render`} />}/>
                <Route path="/connect" render={(props) => <Connect {...props} worksObject={worksObject} title={`Props through render`}/> } />
                <Route path="/services" render={(props) => <Offerings {...props} worksObject={worksObject} title={`Props through render`}/> } />
                 {/* <Route path="/offerings" component={Offerings}/> */}
                 <Route path="/admin" component={Admin}/>

                 <Route exact path="/shop/:collection/:item" render={(props) => <Products history={history} client={context.client} {...props} isCartOpen={context.isCartOpen} checkout={context.checkout} products={context.products } shop={context.shop} collections={context.collections} addVariantToCart={this.addVariantToCart}
             handleCartClose={this.handleCartClose} updateCartClose={this.updateCartClose} updateQuantityInCart={this.updateQuantityInCart} removeLineItemInCart={this.removeLineItemInCart} />} />


              <Route path="/shop/:collection" render={(props) => <ShopCollection history={history} client={context.client} {...props} isCartOpen={context.isCartOpen} checkout={context.checkout} products={context.products } shop={context.shop} collections={context.collections} addVariantToCart={this.addVariantToCart}
             handleCartClose={this.handleCartClose} updateCartClose={this.updateCartClose} updateQuantityInCart={this.updateQuantityInCart} removeLineItemInCart={this.removeLineItemInCart} />} />

            {/* <Route exact path="/shop">
              <Redirect to="/shop/featured" /> : <ShopCollection />
            </Route> */}

                 {/* <Route path="/" component={Homepage}/> */}
               </Switch>
           <Footer></Footer>
           </Fragment>
           )}
         </ThemeContextConsumer>
        </div>
      
      );
      
    }

}

export default App;
