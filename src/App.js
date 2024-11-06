import React,{ useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Services from "./component/Services";
import Works from "./component/Works";
import Team from "./component/Team";
import Pricing from "./component/Pricing";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import LearnMore from "./component/LearnMore";
// import Features from "./component/Features";

import "./component/assets/lib/et-line-font/et-line-font.css";
import "./component/assets/lib/bootstrap/dist/css/bootstrap.min.css";
import "./component/assets/lib/animate.css/animate.css";
import "./component/assets/lib/components-font-awesome/css/font-awesome.min.css";
import "./component/assets/lib/flexslider/flexslider.css";
import "./component/assets/lib/owl.carousel/dist/assets/owl.carousel.min.css";
import "./component/assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css";
import "./component/assets/lib/magnific-popup/dist/magnific-popup.css";
import "./component/assets/lib/simple-text-rotator/simpletextrotator.css";
import "./component/assets/css/style.css";
import "./component/assets/css/colors/default.css";
import Portfolio from "./component/Portfolio";

function App() {

  const [navSize, setNavSize] = useState('10rem');
  const [navColor, setNavColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#0a0a0ae6") : setNavColor("transparent");
    window.scrollY > 10 ? setNavSize("5rem") : setNavSize("10rem");
    window.scrollY > 10 ? setTextColor("#ffffffe6") : setTextColor("white");
  };

  useEffect(() => {
    window.addEventListener( "scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  return (
    <div className="App">
      <NavBar navSize={navSize} navColor={navColor} textColor={textColor}/>
      <Switch>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/home/learn_more">
          <LearnMore />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
