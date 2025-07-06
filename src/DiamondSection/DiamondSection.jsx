import React from "react";
import "./DiamondSection.css";
import diamondsection from "../Image/14.jpeg";
import diamondsection13 from "../Image/13.jpeg";
import keboraImage from "../Image/17.jpeg";
import logoImage from "../Image/16.jpeg";
import { useNavigate } from "react-router-dom";

const DiamondSection = () => {
  const navigate = useNavigate();

  const handlekoberaDaimond = () => {
    navigate("/kebora-diamond");
  };

  const handleKeboraMachine = () => {
    navigate("/kebora-machines");
  };

  const handleKeboraGas = () => {
    navigate("/kebora-gas-supply");
  };

  const handleKeboraFinance = () => {
    navigate("/kebora-finance");
  };

  return (
    <>
      <div className="diamond-section">
        <div className="image-container">
          <img src={diamondsection} alt="Kebora Diamond" />
        </div>
        <div className="text-container">
          <h2>KEBORA DIAMOND</h2>
          <ul>
            <li>
              <strong>What it Does:</strong> Specializes in the ethical
              sourcing, purchasing, selling, and export of high-quality rough
              and polished diamonds. We work with both local miners and
              international buyers, ensuring fair practices and transparent
              transactions.
            </li>
            <li>
              <strong>Target Audience:</strong> Diamond miners, jewelers,
              international diamond dealers, investors, and private collectors.
            </li>
            <li>
              <strong>Unique Selling Proposition (USP):</strong> Our deep
              understanding of the local market in Sierra Leone, coupled with
              strict adherence to ethical sourcing and international standards,
              ensures authenticity and trust in every transaction.
            </li>
            <li>
              <strong>Call to Action:</strong> "Explore Our Diamond Services" or
              "Contact Us for Diamond Inquiries"
            </li>
          </ul>
          <div className="diamondsection-button">
            <button onClick={handlekoberaDaimond}>Learn more</button>
          </div>
        </div>
      </div>
      <div className="kebora-section">
        <div className="kebora-content">
          <h2>KEBORA MACHINES</h2>
          <p>
            Welcome to Kebora Machines, your dedicated partner in progress,
            right here in the Eastern Province of Sierra Leone. Founded on a
            deep understanding of our region's unique industrial landscape, we
            are committed to fueling the success of your most ambitious projects
            — from vital mining operations to critical infrastructure
            development.
          </p>
          <p>
            Our mission extends beyond simply providing equipment: we strive to
            build lasting relationships based on trust, reliability, and a
            shared vision for growth. By combining world-class machinery with
            unmatched local expertise, we provide the power and precision you
            need to build, develop, and thrive.
          </p>
          <ul>
            <li>
              <strong>Call to Action:</strong> "View Our Machinery Catalog" or
              "Request a Quote for Equipment"
            </li>
          </ul>
          <div className="kebora-button-flex">
            <button onClick={handleKeboraMachine}>Learn more</button>
          </div>
        </div>
        <div className="kebora-image">
          <img src={diamondsection13} alt="Kebora Machines" />
        </div>
      </div>
      <div className="kebora-container">
        <div className="kebora-image">
          <img src={keboraImage} alt="Kebora Oxygen Logo" />
        </div>
        <div className="kebora-content">
          <h1>KEBORA GAS SUPPLY</h1>
          <p>
            Welcome to Kebora Trading Company Ltd., your premier and trusted
            supplier of essential gases and industrial materials in Koidu,
            Eastern Province, Sierra Leone. We are steadfastly dedicated to
            powering our community by providing a reliable and high-quality
            supply of critical products, including medical and industrial
            oxygen, nitrogen, acetylene, and as an authorized seller of Afrigas.
            Understanding the vital importance of safety and timely delivery,
            our committed team strives to exceed expectations, ensuring every
            client—from healthcare facilities to industrial workshops—receives
            the essential materials necessary to foster their success and
            contribute to the economic vitality of our region. Partner with us
            and experience the benchmark of quality and dependable service that
            defines Kebora Trading Company Ltd.
          </p>
          <ul>
            <li>
              <strong>Call to Action:</strong> "Order Gas Now" or "Learn About
              Our Gas Solutions"
            </li>
          </ul>
          <div className="kebora-button-flex">
            <a className="btn" onClick={handleKeboraGas}>
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="kebora-container-last">
        <div className="kebora-text">
          <h1>KEBORA FINANCE</h1>
          <p>
            Welcome to <b>Kebora Finance Services</b>, where we empower your
            wallet and enhance your world. We're your go-to partner for seamless
            digital payments, international remittances, travel bookings, and
            car rental solutions right here in Sierra Leone.
          </p>
          <p>
            Whether you're sending money to family abroad, paying bills at home,
            or planning your next adventure, Kebora makes your life simpler with
            secure, fast, and convenient services — all in one place.
          </p>
          <ul>
            <li>
              <b>Call to Action:</b> "Discover Our Financial Solutions" or "Get
              a Free Financial Consultation"
            </li>
          </ul>
          <div className="kebora-button-flex">
            <button className="learn-more" onClick={handleKeboraFinance}>
              Learn more
            </button>
          </div>
        </div>
        <div className="kebora-image">
          <img src={logoImage} alt="Kebora Finance Services" />
        </div>
      </div>
    </>
  );
};

export default DiamondSection;
