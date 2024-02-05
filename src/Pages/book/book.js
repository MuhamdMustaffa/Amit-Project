import React from 'react';
import './book.css';
import  MapImg from './photos/Map.png';

const Book = () => {
  return (
    <>
      <section className="bookTableSection">
        <div className="bookTableContainer">
          <div className="bookTableRegistration">
            <div className="bookTable-title">
              <h2 className="bookTable-heading">Book A Table</h2>
              <p className="bookTable-para">
                We consider all the drivers of change gives you the components
                you need to change to create a truly happens.
              </p>
            </div>

            <div className="bookTableInputs-Form">
              <div className="bookTable-Inputs">
                <div className="bookTableInputs-top">
                  <div className="bookInputsTop-left">
                    <label htmlFor="" className="inputsTopLeft-label">
                      Date
                    </label>
                    <input type="date" className="inputsTopLeft-input"/>
                  </div>
                  <div className="bookInputsTop-right">
                    <label htmlFor="" className="inputsTopRight-label">Time</label>
                    <input type="text" className="inputsTopRight-text"/>
                  </div>
                </div>
                <div className="bookTableInputs-mid">
                  <div className="bookInputsMid-left">
                    <label htmlFor="" className="inputsMidLeft-label">Name</label>
                    <input type="text" className="inputsMidLeft-text" placeholder='Enter your name'/>
                  </div>
                  <div className="bookInputsMid-right">
                    <label htmlFor="" className="inputsMidRight-label" >Phone</label>
                    <input type="text" placeholder="x-xxx-xxx-xxxx" className="inputsMidRight-input"/>
                  </div>
                </div>

                <div className="bookTableInputs-bot">
                  <label htmlFor="" className='tableInputBot-label'>Total Person</label>
                    <select class="tableInputBot-select">
                      <option selected>1 Person</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                </div>

                  <button className='tableInputs-button'>Book A Table</button>
                
              </div>
            </div>
          </div>
        </div>

        <div className="bookTableBackGroundImg">
          <img src={MapImg} alt="" className="bookBgImg" />
        </div>
      </section>
    </>
  );
}

export default Book;
