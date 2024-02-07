import React from 'react';
import './blog.css';
import sushiImg from './photos/Sushi.png';
import pastryKing from './photos/Pastry King.png';
import fries from './photos/Fries.png';
import chickenTenders from './photos/Chicken Tenders.png';
import gadgets from './photos/Gadgets.png';
import burger from './photos/Burger.png';
import cheeseCake from './photos/cheeseCake.png';
import pizza from './photos/Pizza.png';
import cookingGadgets from './photos/cookingGadgets.png';
import sushi from './photos/glutenSushi.png';
import simpleDesserts from './photos/simpleDesserts.png';
import quickDesserts from './photos/quickDesserts.png';

const Blog = () => {
  return (
    <>
      <section className='blogSection'>
        <div className="blogSectionBody container">
          <div className="sectionBody-upperPart">
            <h1 className='blogUpperPart-title'>Our Blog & Articles</h1>
            <p className='blogUpperPart-para'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
          </div>
          <div className="sectionBody-lowerPart">
            <div className="blogCard">
              <img src={sushiImg} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>How to prepare a delicious gluten free sushi</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={pastryKing} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>Exclusive baking lessons from the pastry king</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={fries} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>How to prepare the perfect fries in an air fryer</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={chickenTenders} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>How to prepare delicious chicken tenders</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={gadgets} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>5 great cooking gadgets you can buy to save time</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={burger} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>The secret tips & tricks to prepare a perfect burger</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={cheeseCake} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>7 delicious cheesecake recipes you can prepare</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={pizza} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>5 great pizza restaurants you should visit this city</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={cookingGadgets} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>5 great cooking gadgets you can buy to save time</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={sushi} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>How to prepare a delicious gluten free sushi</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={simpleDesserts} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>Top 20 simple and quick desserts for kids</p>
              </div>
            </div>
            <div className="blogCard">
              <img src={quickDesserts} alt="" className='blogCard-img'/>
              <div className="blogCard-details">
                <span className='cardDetails-date'>January 3, 2023</span>
                <p className='cardDetails-para'>Top 20 simple and quick desserts for kids</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
