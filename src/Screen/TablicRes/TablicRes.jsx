import React from "react";
import pizza from "../../Image/pizza.jpeg";
import sandwich from "../../Image/sandwich.png";
import samosa from "../../Image/smosa.png";
import burger from "../../Image/burger.png";
import wine from "../../Image/win.png";

import "./Tablic.css";

const TablicRes = () => {
  return (
    <div className="flyer-wrapper">
      <header className="flyer-header">
        <h1>Now Serving Delicious Moments</h1>
        <p className="subheading">Open Daily | 10:00 AM – 2:00 AM</p>
      </header>

      <div className="image-grid">
        <img src={pizza} alt="Pizza" />
        <img src={sandwich} alt="Sandwich" />
        <img src={samosa} alt="Samosa" />
        <img src={burger} alt="Burger" />
      </div>

      <section className="flyer-details">
        <h2>WE'RE OPEN</h2>
        <p>{/* <strong>Form 10.00 am to 02.00 am</strong> */}</p>
        <p>
          <a href="tel:+23233059586">Vishal Rudani +232 33059586</a>
        </p>
        <div>
          <p>
            43, Koinkaidu Road, Next to Legecy Club Opera, Kono, Sierra Leone
          </p>
        </div>
      </section>
      <div className="Menu-main-div">
        <h1>Soft Drinks</h1>
        <div className="card-grid">
          <div className="card">
            <img src={wine} alt="Soft Drinks" />
            <div className="card-content">
              <h3>Bar Menu</h3>
              <ul>
                <li>
                  Apple Cedar <span>20 LE</span>
                </li>
                <li>
                  Bintu<span>20 LE</span>
                </li>
                <li>
                  Vitomo <span>20 LE</span>
                </li>
                <li>
                  Tonic <span>20 LE</span>
                </li>
                <li>
                  Tropical<span>20 LE</span>
                </li>
                <li>
                  Siera Mango <span>20 LE</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <li>
                Mega Cola <span>20 LE</span>
              </li>
              <li>
                King Cola <span>20 LE</span>
              </li>
              <li>
                Vandam<span>20 LE</span>
              </li>
              <li>
                Commando Btl<span>20 LE</span>
              </li>
              <li>
                24 Hours <span>20 LE</span>
              </li>
              <li>
                Fresh Up <span>20 LE</span>
              </li>
              <li>
                Mummy Fruity<span>20 LE</span>
              </li>
              <ul>
                <li>
                  Herbal Bitter<span>20 LE</span>
                </li>
                <li>
                  7 Up <span>25 LE</span>
                </li>
                <li>
                  Coca Cola <span>25 LE</span>
                </li>
                <li>
                  Herbal Bitter <span>20 LE</span>
                </li>
                <li>
                  Bita Kola<span>20 LE</span>
                </li>
                <li>
                  Fruite Wine <span>25 LE</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <ul>
                <li>
                  Big Daddy<span>25 LE</span>
                </li>
                <li>
                  Orange Vodka <span>25 LE</span>
                </li>
                <li>
                  Kiss N Fly(Red Wine) <span>25 LE</span>
                </li>
                <li>
                  charger<span>25 LE</span>
                </li>
                <li>
                  Star<span>30 LE</span>
                </li>
                <li>
                  Cody's (300ML) <span>30 LE</span>
                </li>
                <li>
                  Amstel Larger<span>35 LE</span>
                </li>
                <li>
                  Mutzig <span>35 LE</span>
                </li>
                <li>
                  GUiness<span>40 LE</span>
                </li>
                <li>
                  X-Tra Tropical <span>25 LE</span>
                </li>
                <li>
                  Commando<span>25 LE</span>
                </li>
                <li>
                  Pepsi <span>30LE</span>
                </li>
                <li>
                  Sprite <span>30 LE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablicRes;
