import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../Image/15.jpeg";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";
import img2 from "../Image/2.jpeg";

const CarRental = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    question: "",
  });

  const SERVICE_ID = "service_k4pffs7";
  const TEMPLATE_ID = "template_zvh01rn";
  const PUBLIC_KEY = "w_cDNmD5FUGSeOCE6";

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.question.trim()) newErrors.question = "Question is required";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.question,
      };

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((response) => {
          alert("Your message has been sent successfully!");
          console.log("Email sent:", response.status, response.text);
          setFormData({
            name: "",
            phone: "",
            email: "",
            company: "",
            subject: "",
            question: "",
          });
          setErrors({});
        })
        .catch((err) => {
          console.error("Failed to send email:", err);
          alert("Failed to send your message. Please try again later.");
        });
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <div>
      <div className="fin-diamond-section  dhl money-gram car-rental1">
        <div className="fin-image-container">
          <img src={img2} alt="fin-Kebora Diamond " />
          <div className="fin-text-container">
            <h4>Why Choose Us</h4>
            {/* <p>The primary target audience for DHL Express includes:</p> */}
            <ul>
              <li>
                Freedom and Flexibility: We provide the freedom to travel on
                your own schedule, without being tied to public transport
                timetables. You get to choose your route and make stops wherever
                you like.
              </li>
              <li>
                No Ownership Hassles: Say goodbye to the financial burdens and
                headaches of car ownership, such as maintenance costs, insurance
                premiums, and depreciation. We handle all the upkeep, so you can
                just enjoy the ride.
              </li>
              <li>
                Quality and Reliability: Our fleet consists of well-maintained,
                modern vehicles that are regularly serviced and inspected,
                ensuring a safe and reliable journey every time.
              </li>
              <li>
                Convenience: With a variety of locations, including airports and
                city centers, and a seamless online booking process, getting a
                car is quick and easy. Our flexible pick-up and drop-off options
                are designed to fit your schedule, not the other way around.
              </li>
              <li>
                The Right Car for Every Trip: Whether you need a small car for a
                city trip or a large SUV for a family vacation, our diverse
                fleet ensures you'll find the perfect vehicle for any occasion.
              </li>
            </ul>
          </div>
        </div>
        <div className="fin-text-container">
          <h2 className="font-size">Car Rental</h2>
          <h4>What it does</h4>
          <p className="car-retnal">
            A car rental company provides a convenient service for renting
            automobiles for a short period, typically from a few hours to
            several weeks. This allows individuals and businesses to have
            temporary access to a vehicle without the costs and responsibilities
            of ownership. Car rental companies operate a fleet of vehicles,
            offering a range of models from compact cars to SUVs and vans, and
            often have locations at airports and in city centers for easy
            access.
          </p>
          <h4>Target Audience</h4>
          <p>
            The target audience for car rental companies is diverse and
            includes:
          </p>
          <ul>
            <li>
              Travelers (Leisure and Business): This is a primary segment.
              Tourists and business professionals often need a car to get around
              at their destination, either for sightseeing or for meetings and
              client visits.
            </li>
            <li>
              Local Residents: People who need a temporary vehicle for various
              reasons, such as when their own car is being repaired, when they
              need a larger vehicle for a special occasion (like a family trip
              or moving furniture), or for those who don't own a car and need
              one for a weekend getaway.
            </li>
            <li>
              Corporate Clients: Businesses that need to rent vehicles for their
              employees for work-related travel, events, or as part of their
              fleet management. They often seek discounted corporate rates and
              long-term rental options.
            </li>
            <li>
              Special Occasion Renters: Individuals celebrating an event like a
              wedding, prom, or anniversary who want to rent a luxury or unique
              vehicle to make a statement.
            </li>
          </ul>
          <h3>Key Features</h3>
          <ul>
            <li>
              Diverse Fleet of Vehicles: A wide selection of vehicles to suit
              various needs and budgets, from fuel-efficient economy cars to
              spacious SUVs, luxury sedans, and vans.
            </li>
            <li>
              Flexible Rental Plans: Offering options for daily, weekly, or
              monthly rentals, with different pick-up and drop-off locations,
              including one-way rentals.
            </li>
            <li>
              User-Friendly Booking Systems: Easy-to-use online platforms,
              mobile apps, and booking websites that allow customers to quickly
              reserve a car, compare models, and manage their reservations.
            </li>
            <li>
              Transparent Pricing: Clear, upfront pricing with no hidden fees
              for insurance, mileage, or other services, ensuring customers know
              the total cost before they book.
            </li>
            <li>
              Customer Support: Accessible customer service, including 24/7
              roadside assistance, to help with any issues that may arise during
              the rental period.
            </li>
            <li>
              Additional Services: The option to add extra products like GPS
              navigation systems, child safety seats, insurance coverage, and
              mobile Wi-Fi to enhance the rental experience.
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-us">
        <div className="contact-left">
          <img
            src={logo}
            alt="Kebora Trading Company Limited"
            className="logo"
          />
          <h2>Contact Us</h2>
          <p>
            <strong>Kebora Trading Company Limited</strong> serves as the
            umbrella for a diverse portfolio of businesses, including diamond
            trading, machinery, gas supply, financial services and restaurant.
            We are committed to excellence, reliability, and fostering strong
            client relationships across all our operations.​​
          </p>
          <div className="contact-details">
            <div className="icon-content">
              <IoMail className="icon-contactus" />
              <a href="mailto:keboraoxygen@gmail.com">
                keboratradingin@gmail.com
              </a>
            </div>
            <div className="icon-content">
              <IoCall className="icon-contactus" /> +232 79343434
            </div>
            <div className="icon-content">
              <IoLocationSharp className="icon-contactus" /> 38 misingbi road
              Kono Eastern-kono
            </div>
          </div>
        </div>

        <div className="contact-right">
          {/* <form> */}
          <div className="form-group">
            <label>Your Name *</label>
            <div className="input-flex">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error-border" : ""}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <div className="input-flex">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="+232"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Your Email *</label>
            <div className="input-flex">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error-border" : ""}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Your Company</label>
            <div className="input-flex">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Subject *</label>
            <div className="input-flex">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? "error-border" : ""}
              />
              {errors.subject && (
                <span className="error">{errors.subject}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Your Question *</label>
            <div className="input-flex">
              <textarea
                name="question"
                rows="4"
                value={formData.question}
                onChange={handleChange}
                className={errors.question ? "error-border" : ""}
              ></textarea>
              {errors.question && (
                <span className="error">{errors.question}</span>
              )}
            </div>
          </div>

          <div className="form-submit">
            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default CarRental;
