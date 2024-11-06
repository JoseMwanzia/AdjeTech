import React,{useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/images/logo/ADJETECH-LOGO.png";

/* COPY THE ENTIRE "NEW NAVIGATION BAR" section from App.css */ 
function NavBar({ navSize, navColor, textColor }) {
  const [isActive, setIsActive] = useState(false);

  function mobileMenu() {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="containerr text-uppercase" style={{display: 'flex', justifyContent: "space-between",zIndex: 1,backgroundColor: navColor, position: 'fixed', transition: "all 1.25s"}}>
        <div className="logo" style={{width: '15%'}}>
          <a href="/"><img className="main-logo" src={logo} alt="main-logo"/></a>
        </div>
        <div className={`hamburger ${isActive?'active-hamburger':''}`} onClick={mobileMenu} style={{backgroundColor: 'transparent'}}>
          <span className="barr"></span>
          <span className="barr"></span>
          <span className="barr"></span>
        </div>
        <div className={`navigation ${isActive?'active-hamburger':''}`} >
          <NavLink className="nav-btn" style={{color: textColor}} exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-btn" style={{color: textColor}} to="/services">
            services
          </NavLink>
          <NavLink className="nav-btn" style={{color: textColor}} to="/team">
            Team
          </NavLink>
          <NavLink className="nav-btn" style={{color: textColor}} to="/pricing">
            pricing
          </NavLink>
          <NavLink className="nav-btn" style={{color: textColor}} to='/contact'>
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
