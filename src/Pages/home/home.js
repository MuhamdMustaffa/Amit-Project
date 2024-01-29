import React from "react";
import "./home.css";
import siteBg from "./photos/bg.jpg";
import teaIcon from "./photos/tea 1.png";
import dishIcon from "./photos/icon.png";
import drinkIcon from "./photos/icon (2).png";
import dessertIcon from "./photos/icon (1).png";
import sandwichImg from "./photos/Image.jpg";
import phoneLogo from "./photos/phone.png";
import mailLogo from "./photos/mail.png";
import locationMarker from "./photos/location-marker.png";
import { NavLink } from "react-router-dom";
import kebabImg1 from "./photos/kebab-set-table 1.jpg";
import girlImg from "./photos/Mask group.jpg";
import coupleImg from "./photos/Mask group2.jpg";
import groupImg from "./photos/Mask group3.jpg";
import chefImg from "./photos/chef-holding-plate.jpg";
import sourImg from "./photos/sour-curry-with-snakehead-fish.jpg";
import meatImg from "./photos/sadj-iron-pot.jpg";
import burgerImg from "./photos/burger.png";
import potatosImg from "./photos/potatos.png";
import crespyImg from "./photos/crespy.png";
import chocoImg from "./photos/chocolate.png";
import pizzaImg from "./photos/Pizza.png";
import CustomerSays from "../../Components/CustomerSays/customerSays";
const Home = () => {
  return (
    <>
      <div className="homeBody">
        <section className="head-section">
            <img src={siteBg} alt="" className="head-img" />
          <div className="head-upper-details">
            <div className="head-section-text">
              <span className="head-section-title">Best food for your taste</span>
              <p className="head-section-para">
                Discover delectable cuisine and unforgettable moments in our
                welcoming, culinary haven.
              </p>
            </div>
            <div className="head-btn">
              <button className="left-head-btn">Book A Table</button>
              <button className="Right-head-btn">Explore Menu</button>
            </div>
          </div>
        </section>

        <section className="section1">
          <h1 className="sec1-title">Browse Our Menu</h1>
          <div className="container">
            <div className="section_content">
              <div className="section_icon">
                <img src={teaIcon} alt="" />
              </div>
              <h3>Breakfast</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <NavLink to="/">Explore Menu</NavLink>
            </div>
            <div className="section_content">
              <div className="section_icon">
                <img src={dishIcon} alt="" />
              </div>
              <h3>Main Dishes</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <NavLink to="/">Explore Menu</NavLink>
            </div>
            <div className="section_content">
              <div className="section_icon">
                <img src={drinkIcon} alt="" />
              </div>
              <h3>Drinks</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <NavLink to="/">Explore Menu</NavLink>
            </div>
            <div className="section_content">
              <div className="section_icon">
                <img src={dessertIcon} alt="" />
              </div>
              <h3>Desserts</h3>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <NavLink to="/">Explore Menu</NavLink>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="parent">
            <div className="section2_img">
              <img src={sandwichImg} alt="" />
            </div>
            <div className="section2_about">
              <h2>We provide healthy food for your family.</h2>
              <p className="section2_p1">
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance. Rooted in city's rich culinary culture, we aim
                to honor our local roots while infusing a global palate.
              </p>
              <p className="section2_p2">
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
              <button>More About Us</button>
            </div>
            <div className="come_visit">
              <div className="come_visitP">
                <h3>Come and visit us</h3>
                <div>
                  <img src={phoneLogo} alt="" />
                  <p>(414) 857 - 0107</p>
                </div>
                <div>
                  <img src={mailLogo} alt="" />
                  <p>happytummy@restaurant.com</p>
                </div>
                <div>
                  <img src={locationMarker} alt="" />
                  <span className="us_p">
                    <p>
                      837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />

        <section className="section3">
          <div className="section3-details">
            <p className="section3-Para">
              We also offer unique services for your events
            </p>

            <div className="section3-images">
              <div className="sec3-card">
                <img src={kebabImg1} className="sec3-card-img" alt="..." />
                <div className="sec3-card-body">
                  <h5 className="sec3-card-title">Caterings</h5>
                  <p className="sec3-card-text">
                    In the new era of technology we look in the future with
                    certainty for life.
                  </p>
                </div>
              </div>

              <div className="sec3-card">
                <img src={girlImg} className="sec3-card-img" alt="..." />
                <div className="sec3-card-body">
                  <h5 className="sec3-card-title">Birthdays</h5>
                  <p className="sec3-card-text">
                    In the new era of technology we look in the future with
                    certainty for life.
                  </p>
                </div>
              </div>

              <div className="sec3-card">
                <img src={coupleImg} className="sec3-card-img" alt="..." />
                <div className="sec3-card-body">
                  <h5 className="sec3-card-title">Weddings</h5>
                  <p className="sec3-card-text">
                    In the new era of technology we look in the future with
                    certainty for life.
                  </p>
                </div>
              </div>

              <div className="sec3-card">
                <img src={groupImg} className="sec3-card-img" alt="..." />
                <div className="sec3-card-body">
                  <h5 className="sec3-card-title">Events</h5>
                  <p className="sec3-card-text">
                    In the new era of technology we look in the future with
                    certainty for life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />

        <section className="section4">
          <div className="section4-details">
            <div className="section4-left">
              <img src={chefImg} className="chefImg" alt="" />
              <img src={sourImg} className="sourImg" alt="" />
              <img src={meatImg} className="meatImg" alt="" />
            </div>

            <div className="section-right">
              <h6 className="section4-title">Fastest Food Delivery in City</h6>
              <p className="section4-Para">
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.
              </p>

              <ul className="section4-list">
                <li className="sec4-list-first">Delivery within 30 minutes</li>
                <li className="sec4-list-second">Best Offer & Prices</li>
                <li className="sec4-list-third">Online Services Available</li>
              </ul>
            </div>
          </div>
        </section>

        <CustomerSays />

        <section className="section6">
          <div className="sec6-content">
            <div className="sec6-header">
              <h1 className="sec6-head-title">Our Blog & Articles</h1>
              <button className="sec6-head-btn">
                <span>Read All Articles</span>
              </button>
            </div>
            <div className="sec6-cards">
              <div class="sec6-card-burger">
                <img src={burgerImg} class="card-burger-top" alt="..." />
                <div class="sec6-burger-body">
                  <span className="sec6-burger-date">January 3, 2023</span>
                  <h3 className="sec6-burger-title">
                    The secret tips & tricks to prepare a perfect burger & pizza
                    for our customers
                  </h3>
                  <p class="sec6-burger-text">
                    Lorem ipsum dolor sit amet consectetur of a adipiscing
                    elitilmim semper adipiscing massa gravida nisi cras enim
                    quis nibholm varius amet gravida ut facilisis neque egestas.
                  </p>
                </div>
              </div>

              <div class="sec6-card">
                <img src={potatosImg} class="card-img-top" alt="..." />
                <div class="sec6-card-body">
                  <span className="sec6-card-date">January 3, 2023</span>
                  <h3 className="sec6-card-title">
                    How to prepare the perfect french fries in an air fryer
                  </h3>
                </div>
              </div>

              <div class="sec6-card">
                <img src={crespyImg} class="card-img-top" alt="..." />
                <div class="sec6-card-body">
                  <span className="sec6-card-date">January 3, 2023</span>
                  <h3 className="sec6-card-title">
                    How to prepare delicious chicken tenders
                  </h3>
                </div>
              </div>

              <div class="sec6-card">
                <img src={chocoImg} class="card-img-top" alt="..." />
                <div class="sec6-card-body">
                  <span className="sec6-card-date">January 3, 2023</span>
                  <h3 className="sec6-card-title">
                    7 delicious cheesecake recipes you can prepare
                  </h3>
                </div>
              </div>

              <div class="sec6-card">
                <img src={pizzaImg} class="card-img-top" alt="..." />
                <div class="sec6-card-body">
                  <span className="sec6-card-date">January 3, 2023</span>
                  <h3 className="sec6-card-title">
                    5 great pizza restaurants you should visit this city
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <br />
        </section>
      </div>
    </>
  );
};

export default Home;
