import React from "react";
import "../Home/Home.css";
import DiamondSection from "../DiamondSection/DiamondSection";
import ContactUs from "../ContactUs/ContactUs";
import myImage from "../Image/15.jpeg";

function Home() {
  return (
    <div className="app">
      <div className="banner banner-1">
        <div className="banner-content">
          <img src={myImage} alt="Description" />
        </div>
      </div>
      <div className="home-company-section">
        <div className="home-content-section">
          <h1>Kebora Trading Company Limited - Overview</h1>
          <p>
            Kebora Trading Company Limited serves as the umbrella for a diverse
            portfolio of businesses, including diamond trading, machinery, gas
            supply, and financial services. We are committed to excellence,
            reliability, and fostering strong client relationships across all
            our operations.
          </p>
        </div>
      </div>
      <DiamondSection />
      <ContactUs />
    </div>
  );
}

export default Home;
