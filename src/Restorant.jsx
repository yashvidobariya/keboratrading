import React from "react";
import { useNavigate } from "react-router-dom";
import res from "../src/Image/res.jpeg";

const Restorant = () => {
  const navigate = useNavigate();
  const handlekoberaDaimond = () => {
    navigate("/tablic-restaurants");
  };

  return (
    <div>
      <div className="diamond-section reasutant-section">
        <div className="image-container">
          <img src={res} alt="Kebora Diamond" />
        </div>
        <div className="text-container">
          <h2>KEBORA TABLIC RESTAURANTS</h2>
          <p>
            Welcome to Kebora & Tablic Restaurant, where we redefine
            all-vegetarian dining with a commitment to exceptional flavor and
            uncompromising hygiene. Whether you're joining us for a meal in our
            spotless restaurant, celebrating a special occasion, or enjoying our
            delicious food at home, we've got you covered. We're proud to offer:
          </p>
          <ul>
            <li>
              100% Vegetarian Delights: A diverse and vibrant menu crafted with
              the freshest ingredients.
            </li>
            <li>
              Impeccable Hygiene: Your health and safety are our top priority.
            </li>
            <li>
              Full-Service Bar: Complement your meal with our extensive
              selection of beers, wines, whiskies, champagnes, and soft drinks.
            </li>
            <li>
              Special Event Hosting: Let us make your birthday parties and
              anniversary celebrations truly memorable in our perfect venue.
            </li>
            <li>
              Convenient Home Delivery: Enjoy your favorite dishes from Kebora &
              Tablic delivered right to your doorstep.
            </li>
          </ul>
          <p>
            Ready to experience the Kebora & Tablic difference or plan your next
            event?
          </p>
          <p>
            Contact <strong>Vishal Rudani</strong> at{" "}
            <strong>+23233 059586 </strong>
            for reservations, delivery, or party bookings. We look forward to
            serving you!
          </p>
          <div className="diamondsection-button">
            <button onClick={handlekoberaDaimond}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restorant;
