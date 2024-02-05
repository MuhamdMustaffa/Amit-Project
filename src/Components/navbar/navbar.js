import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import siteLogo from "./photos/japanese-food.svg";
import './navbar.css';
import { Link,NavLink } from "react-router-dom";
import twitterLogo from "./photos/twitter.png";
import instaLogo from "./photos/insta.png";
import fbLogo from "./photos/facebook.png";
import githubLogo from "./photos/github.png";
import mailLogo from "./photos/mail.png";
import phoneLogo from "./photos/phone.png";

const Navbar = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  useEffect(() => {
    import("jquery/dist/jquery.min.js");
  }, []);

  return (
    <>
    <section className="Navbar-Section">
        <div className="head-Nav">
        <div className="left-head-nav">
          <div className="left-call">
          <img src={phoneLogo} alt="" className="left-call-img" />
          <span className="left-call-text">(414) 857 - 0107</span>
          </div>
          <div className="left-mail">
          <img src={mailLogo} alt="" className="left-mail-img"/>
          <span className="left-mail-text">yummy@bistrobliss</span>
          </div>
        </div>

        <div className="right-head-nav">
          <ul className="right-side-socials">
            <li className="socials-container">
              <img src={twitterLogo} alt="" className="socials-img"/>
            </li>
            <li className="socials-container">
              <img src={fbLogo} alt="" className="socials-img"/>
            </li>
            <li className="socials-container">
              <img src={instaLogo} alt="" className="socials-img"/>
            </li>
            <li className="socials-container">
              <img src={githubLogo} alt="" className="socials-img"/>
            </li>
          </ul>
        </div>
      </div>

      <div className="Main-Nav">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img src={siteLogo} alt=""/>

          <Link className="navbar-brand" to="/">
            <b className="siteTitle">Bistro Bliss</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/blog">
                  Pages
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active"  to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <NavLink to='/book'>
                <button className="btn bookBtn btn-outline-secondary ms-5" type="submit">
                Book A Table
              </button>
              </NavLink>
              
            </form>
          </div>
        </div>
      </nav>
      </div>
      
  
      
    </section>
    
    </>
  );
};

export default Navbar;
