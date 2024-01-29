import React from "react";
import "./footer.css";
import footerLogo from "./photos/japanses-food.png";
import twitterLogo from "./photos/twitter.png";
import instaLogo from "./photos/instagram.png";
import fbLogo from "./photos/facebook.png";
import githubLogo from "./photos/github.png";
import instaPh1 from "./photos/Mask group.png";
import instaPh2 from "./photos/Mask group (1).png";
import instaPh3 from "./photos/Mask group (2).png";
import instaPh4 from "./photos/Mask group (3).png";

const Footer = () => {
  return (
    <>
      <>
        <div className="footer-section">
          <div className="footer-details container">
          <div className="footer-upper-part">
            <div className="left-footer-part">
              <div className="left-footer-title">
                <img src={footerLogo} alt="" className="left-footerTitle-img"/>
                <h3 className="left-footerTitle-title">Bistro Bliss</h3>
              </div>
              <div className="left-footer-para">
                <p className="leftFooter-paragraph">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
              </div>
              <div className="left-footer-socials">
                <ul className="left-footerSocial-items">
                  <li><img src={twitterLogo} alt="" className="social-item"/></li>
                  <li><img src={fbLogo} alt="" className="social-item"/></li>
                  <li><img src={instaLogo} alt="" className="social-item"/></li>
                  <li><img src={githubLogo} alt="" className="social-item"/></li>
                  </ul>
              </div>
            </div>
            <div className="mid-footer-part">
              <div className="left-midFooter-side">
                <div className="left-midFooter-title">
                  <h3 className="left-midFooterSide-title">Pages</h3>
                </div>
                <div className="left-midFooter-lists">
                  <ul className="left-midFooter-listItems">
                  <li className="midFooter-listItem">Home</li>
                  <li className="midFooter-listItem">About</li>
                  <li className="midFooter-listItem">Menu</li>
                  <li className="midFooter-listItem">Pricing</li>
                  <li className="midFooter-listItem">Blog</li>
                  <li className="midFooter-listItem">Contact</li>
                  <li className="midFooter-listItem">Delivery</li>
                </ul>
                </div>
                
              </div>
              <div className="right-mid-footer-side">
              <div className="right-footerSide-title">
                  <h3 className="right-midFooter-title">Utility Pages</h3>
                </div>
                <div className="right-footerSide-lists">
                  <ul className="rightFooter-lists">
                  <li className="rightFooter-listItem">Start Here</li>
                  <li className="rightFooter-listItem">Style Guide</li>
                  <li className="rightFooter-listItem">Password Protected</li>
                  <li className="rightFooter-listItem">404 Not Found</li>
                  <li className="rightFooter-listItem">Licenses</li>
                  <li className="rightFooter-listItem">Changelog</li>
                  <li className="rightFooter-listItem">View More</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="right-footer-part">
              <h3 className="rightFooter-titlePart">Follow Us On Instagram</h3>
              
                <ul className="right-footerPart-imgs">
                  <li className="rightFooter-img"><img src={instaPh1} alt="" /></li>
                  <li className="rightFooter-img"><img src={instaPh2} alt="" /></li>
                  <li className="rightFooter-img"><img src={instaPh3} alt="" /></li>
                  <li className="rightFooter-img"><img src={instaPh4} alt="" /></li>
                </ul>
              
            </div>
          </div>
          <div className="footer-lower-part">
            <span className="footer-lowerPart-title">Copyright © 2023 Hashtag Developer. All Rights Reserved</span>
          </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Footer;
