import React from "react";
import "../Home/Home.css";
import DiamondSection from "../DiamondSection/DiamondSection";
import ContactUs from "../ContactUs/ContactUs";
import img3 from "../Image/3.jpeg";
import myImage from "../Image/15.jpeg";
import img2 from "../Image/2.jpeg";
import img1 from "../Image/1.jpeg";

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
      <div className="fin-diamond-section">
        <div className="fin-image-container car-container">
          <img src={img3} alt="fin-Kebora Diamond" />
        </div>
        <div className="fin-text-container">
          <h1>International Flight Booking</h1>
          <p>
            Book flights abroad with ease, expert support, and access to global
            travel deals.{" "}
          </p>
          <h4>Benefits:</h4>
          <p>Access exclusive fares and agency discounts</p>
          <p>Book complete travel packages (flights + hotel) </p>
          <p>Full itinerary planning and e-ticketing</p>
          <p>24/7 customer support during your journey</p>
        </div>
      </div>
      <div className="fin-diamond-section money-gram car-rental">
        <div className="fin-text-container">
          <h2>Car Rental Services</h2>
          <p>
            Travel comfortably with reliable car rental services tailored to all
            road conditions.{" "}
          </p>
          <p>What We Offer:</p>
          <ul>
            <li>4x4s, sedans, and executive vehicles </li>
            <li>Self-drive or driver-included options</li>
            <li>Daily, weekly, or monthly rental plans </li>
            <li>Insurance, maintenance, and GPS included </li>
            <li>
              Partnered with Flash Vehicles, Kebora Travel, and Sierra Leone Car
              Hire
            </li>
          </ul>
          <h3>Why Choose Us: </h3>
          <ul>
            <li>Why Choose Us: </li>
            <li>Clean, well-maintained vehicles </li>
            <li>Transparent pricing — no hidden fees </li>
            <li>Support for long trips and rugged terrain</li>
          </ul>
        </div>
        <div className="fin-image-container car-container">
          <img src={img2} alt="fin-Kebora Diamond " />
        </div>
      </div>
      <div className="fin-diamond-section">
        <div className="fin-image-container">
          <div className="car-container">
            <img src={img1} alt="fin-Kebora Diamond " />
          </div>
          <h4>5. E-commerce Logistics</h4>
          <p>
            Specialized solutions for online sellers including order fulfillment
            and last-mile delivery.
          </p>
          <h4>6. Supply Chain Management</h4>
          <p>
            Integrated logistics services to optimize your supply chain and
            reduce costs.
          </p>
          <h4>7. Tracking & Customer Support</h4>
          <p>
            Real-time shipment tracking and dedicated customer service to keep
            you informed.
          </p>
          <h4>8. Specialized Services</h4>
          <p>
            Handling of sensitive, oversized, or hazardous shipments with expert
            care.
          </p>
        </div>
        <div className="fin-text-container">
          <h2>DHL - Dalsey, Hillblom and Lynn</h2>
          <p>"Your Trusted Partner in Every Shipment"</p>
          <h4>1. Express Parcel Delivery</h4>
          <p>
            Fast and reliable delivery of documents and parcels worldwide with
            guaranteed transit times.
          </p>
          <h4>2. Freight Shipping Solutions</h4>
          <p>
            Comprehensive air, sea, and road freight services tailored to your
            business needs.
          </p>
          <h4>3. Customs Clearance Assistance</h4>
          <p>
            Expert support to navigate customs regulations smoothly and ensure
            timely delivery.
          </p>
          <h4>4. Warehousing & Distribution</h4>
          <p>
            Secure storage and efficient inventory management with flexible
            distribution options.
          </p>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export default Home;
