import React from 'react';
import './customerSays.css';
import sophImg from "./Photos/Sophire.png";
import matImg from "./Photos/Matt.png";
import andyImg from "./Photos/Andy.png";




const CustomerSays = () => {
  return (
    <>
    <section className="section5">
          <div className="sec5-container">
            <div className="sec5-title">
              <h6 className="sec5-header">What Our Customers Say</h6>
            </div>

            <div className="sec5-cards">
              <div className="sec5-card  mb-3">
                <h2 className="sec5-card-title">"The best restaurant"</h2>
                <div className="card-body">
                  <p className="sec5-card-text">
                    Last night, we dined at place and were simply blown away.
                    From the moment we stepped in, we were enveloped in an
                    inviting atmosphere and greeted with warm smiles.
                  </p>
                  <br />
                  <hr className="sec5-line" />

                  <div className="per-details">
                    <div className="person-img">
                      <img src={sophImg} alt="" />
                    </div>

                    <div className="person-info">
                      <h6 className="person-name">Sophire Robson</h6>
                      <p className="person-location">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sec5-card">
                <h2 className="sec5-card-title">"Simply delicious"</h2>
                <div className="card-body">
                  <p className="sec5-card-text">
                    Place exceeded my expectations on all fronts. The ambiance
                    was cozy and relaxed, making it a perfect venue for our
                    anniversary dinner. Each dish was prepared and beautifully
                    presented.
                  </p>
                  <br />
                  <hr className="sec5-line" />

                  <div className="per-details">
                    <div className="person-img">
                      <img src={matImg} alt="" />
                    </div>

                    <div className="person-info">
                      <h6 className="person-name">Matt Cannon</h6>
                      <p className="person-location">San Diego, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sec5-card">
                <h2 className="sec5-card-title">"One of a kind restaurant"</h2>
                <div className="card-body">
                  <p className="sec5-card-text">
                    The culinary experience at place is first to none. The
                    atmosphere is vibrant, the food - nothing short of
                    extraordinary. The food was the highlight of our evening.
                    Highly recommended/
                  </p>
                  <br />
                  <hr className="sec5-line" />

                  <div className="per-details">
                    <div className="person-img">
                      <img src={andyImg} alt="" />
                    </div>

                    <div className="person-info">
                      <h6 className="person-name">Andy Smith</h6>
                      <p className="person-location">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default CustomerSays;
