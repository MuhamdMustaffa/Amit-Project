import React from "react";
import "./about.css";
import sandwichImg from "./photos/Image.png";
import CustomerSays from "../../Components/CustomerSays/customerSays";
import upperImg from "./photos/sec2-img.png";
import leftImg from "./photos/book.png";
import midImg from "./photos/menu.png";
import rightImg from "./photos/clock.png";
import cookingImg from "./photos/Cooking.png";

const About = () => {
  return (
    <>
      <main className="about-body">
        <section className="about1-section">
          <div className="about1-container">
            <div className="img-about1-left">
              <img src={sandwichImg} alt="" className="about-img-details" />
              <div className="about1-left-contact">
                <div className="left-contact-info">
                  <h2 className="left-contact-title">Come and visit us</h2>
                  <ul className="about1-contact-details">
                    <li className="phone-left-contact">(414) 857 - 0107</li>
                    <li className="mail-left-contact">
                      happytummy@restaurant.com
                    </li>
                    <li className="location-left-contact">
                      837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="about1-right-side">
              <h2 className="about1-right-title">
                We provide healthy food for your family.
              </h2>
              <p className="about1-right-para">
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance. Rooted in city's rich culinary culture, we aim
                to honor our local roots while infusing a global palate.
              </p>
              <span className="about1-right-details">
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </span>
            </div>
          </div>
        </section>
        <br />

        <section className="about2-section">
          <div className="about2-upper-side">
            <img src={upperImg} alt="" className="about2-upper-img" />
          </div>

          <div className="about2-lower-side">
            <div className="about2-left-side">
              <img src={leftImg} alt="" className="about2-left-img" />
              <div className="about2-left-details">
                <h3 className="about2-left-title">Multi Cuisine</h3>
                <p className="about2-left-para">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>

            <div className="about2-mid-side">
              <img src={midImg} alt="" className="about2-mid-img" />
              <div className="about2-mid-details">
                <h3 className="about2-mid-title">Easy To Order</h3>
                <p className="about2-left-para">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>

            <div className="about2-right-side">
              <img src={rightImg} alt="" className="about2-right-img" />
              <div className="about2-right-details">
                <h3 className="about2-right-title">Fast Delivery</h3>
                <p className="about2-left-para">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about3-section">
          <div className="about3-container">
            <div className="about3-left-side">
              <div className="about3-left-upper">
                <h2 className="about3-upper-title">
                  A little information for our valuable guest
                </h2>
                <p className="about3-upper-para">
                  At place, we believe that dining is not just about food, but
                  also about the overall experience. Our staff, renowned for
                  their warmth and dedication, strives to make every visit an
                  unforgettable event.
                </p>
              </div>

              <div className="about3-left-lower">
                <div className="about3-upLeft-box">
                  <h1 className="about3-upLeft-title">3</h1>
                  <span className="about3-upLeft-detail">Locations</span>
                </div>

                <div className="about3-downLeft-box">
                  <h1 className="about3-downLeft-title">1995</h1>
                  <span className="about3-downLeft-detail">Founded</span>
                </div>

                <div className="about3-downRight-box">
                  <h1 className="about3-downRight-title">65+</h1>
                  <span className="about3-downRight-detail">Staff Members</span>
                </div>

                <div className="about3-upRight-box">
                  <h1 className="about3-upRight-title">100%</h1>
                  <span className="about3-upRight-detail">
                    Satisfied Customers
                  </span>
                </div>
              </div>
            </div>

            <div className="about3-right-side">
              <img src={cookingImg} alt="" className="about3-right-img" />
            </div>
          </div>
        </section>
        <section className="about4-section">
          <CustomerSays />
        </section>
      </main>
    </>
  );
};

export default About;
