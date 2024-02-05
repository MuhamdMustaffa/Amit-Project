import React from "react";
import "./menu.css";
import Mask from "./photos/Mask group.png";
import Pizza from "./photos/Pizza.png";
import Cocktail from "./photos/Couple of Cups.png";
import Gateaux from "./photos/Gateaux.png";
import Lemonade from "./photos/Lemonade.png";
import Chocolate from "./photos/ICE Cream.png";
import Burger from "./photos/Burger.png";
import Waffles from "./photos/Waffles.png";
import UberEats from "./photos/UberEats.png";
import GrubHub from "./photos/GRUBHUB.png";
import PostMates from "./photos/Postmates.png";
import DoorDash from "./photos/DOORDASH.png";
import FoodPanda from "./photos/FoodPanda.png";
import Deliver from "./photos/deliver.png";
import InstaCart from "./photos/instacart.png";
import JustEat from "./photos/JustEat.png";
import DidiFood from "./photos/DidiFood.png";

const Menu = () => {
  return (
    <>
      <section className="menu-section">
        <div className="upper-menu-section">
          <div className="upperMenu-Container">
            <div className="upperMenu-details">
              <div className="upperDetails-title">
                <h1 className="upperMenu-title">Our Menu</h1>
                <p className="upperMenu-para">
                  We consider all the drivers of change gives you the components
                  you need to change to create a truly happens.
                </p>
              </div>
              <div className="upperMenu-btn">
                <button className='upperMenu-buttonRed'>All</button>
                <button className='upperMenu-button'>Breakfast</button>
                <button className='upperMenu-button'>Main Dishes</button>
                <button className='upperMenu-button'>Drinks</button>
                <button className='upperMenu-button'>Desserts</button>
              </div>
            </div>
            <div className="upperMenu-Cards">
              <div className="upperMenuCard">
                <img src={Mask} alt="" className="upperMenuCard-img"/>
                <div className="upperMenuCard-details">
                  <h3 className="upperMenuCard-price">$ 9.99</h3>
                  <span className="upperMenuCard-title">Fried Eggs</span>
                  <p className="upperMenuCard-description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
                </div>
              </div>
              <div className="upperMenuCard">
                <img src={Pizza} alt="" className="upperMenuCard-img"/>
                <div className="upperMenuCard-details">
                  <h3 className="upperMenuCard-price">$ 15.99</h3>
                  <span className="upperMenuCard-title">Hawaiian Pizza</span>
                  <p className="upperMenuCard-description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
                </div>
              </div>
              <div className="upperMenuCard">
                <img src={Cocktail} alt="" className="upperMenuCard-img"/>
                <div className="upperMenuCard-details">
                  <h3 className="upperMenuCard-price">$ 7.25</h3>
                  <span className="upperMenuCard-title">Martinez Cocktail</span>
                  <p className="upperMenuCard-description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
                </div>
              </div>

              <div className="upperMenuCard">
                <img src={Gateaux} alt="" className="upperMenuCard-img"/>
                <div className="upperMenuCard-details">
                  <h3 className="upperMenuCard-price">$ 20.99</h3>
                  <span className="upperMenuCard-title">Butterscotch Cake</span>
                  <p className="upperMenuCard-description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
                </div>
              </div>

              <div className="upperMenuCard">
                <img src={Lemonade} alt="" className="upperMenuCard-img"/>
                <div className="upperMenuCard-details">
                  <h3 className="upperMenuCard-price">$ 5.89</h3>
                  <span className="upperMenuCard-title">Mint Lemonade</span>
                  <p className="upperMenuCard-description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
                </div>
              </div>

              <div className="upperMenuCard">
                <img src={Chocolate} alt="" className="upperMenuCard-img"/>
                <div className="upperMenuCard-details">
                  <h3 className="upperMenuCard-price">$ 18.05</h3>
                  <span className="upperMenuCard-title">Chocolate Icecream</span>
                  <p className="upperMenuCard-description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
                </div>
              </div>

              <div className="upperMenuCard">
                <img src={Burger} alt="" className="upperMenuCard-img"/>
                <div className="upperMenuCard-details">
                  <h3 className="upperMenuCard-price">$ 12.55</h3>
                  <span className="upperMenuCard-title">Cheese Burger</span>
                  <p className="upperMenuCard-description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
                </div>
              </div>


              <div className="upperMenuCard">
                <img src={Waffles} alt="" className="upperMenuCard-img"/>
                <div className="upperMenuCard-details">
                  <h3 className="upperMenuCard-price">$ 12.99</h3>
                  <span className="upperMenuCard-title">Classic Waffles</span>
                  <p className="upperMenuCard-description">Made with eggs, lettuce, salt, oil and other ingredients.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="lower-menu-section">
          <div className="lowerMenu-Container">
            <div className="lowerMenu-leftSide">
              <h2 className="lowerLeftSide-title">You can order through apps</h2>
              <p className="lowerLeftSide-para">Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
            </div>
            <div className="lowerMenu-rightSide">
              <div className="lowerRightMenu-up">
                <div className="uberEats-img">
                <img src={UberEats} alt="" className="rightMenuUp-imgs"/>
                </div>
                <div className="grubHub-img">
                <img src={GrubHub} alt=""  className="rightMenuUp-imgs"/>
                </div>
                <div className="postMates-img">
                <img src={PostMates} alt="" className="rightMenuUp-imgs"/>
                </div>
              </div>

              <div className="lowerRightMenu-mid">
                <div className="doorDash-img">
                <img src={DoorDash} alt="" className="rightMenuMid-imgs"/>
                </div>

                <div className="foodPanda-img">
                <img src={FoodPanda} alt="" className="rightMenuMid-imgs"/>
                </div>

                <div className="deliver-img">
                <img src={Deliver} alt="" className="rightMenuMid-imgs"/>
                </div>
              </div>
              <div className="lowerRightMenu-bottom">
              <div className="instaCart-img">
                <img src={InstaCart} alt="" className="rightMenuMid-imgs"/>
                </div>

                <div className="justEat-img">
                <img src={JustEat} alt="" className="rightMenuMid-imgs"/>
                </div>

                <div className="didiFood-img">
                <img src={DidiFood} alt="" className="rightMenuMid-imgs"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
