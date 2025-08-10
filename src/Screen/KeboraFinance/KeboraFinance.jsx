import React, { useState } from "react";
import img16 from "../../Image/16.jpeg";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import img8 from "../../Image/8.jpeg";
import img7 from "../../Image/7.jpeg";
import img6 from "../../Image/6.jpeg";
import img5 from "../../Image/5.jpeg";
import img3 from "../../Image/3.jpeg";
import img2 from "../../Image/2.jpeg";
import img1 from "../../Image/1.jpeg";
import img32 from "../../Image/32.PNG";
import "./KeboraFinance.css";

const KeboraFinance = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    question: "",
  });

  const [errors, setErrors] = useState({});

  const SERVICE_ID = "service_qe5rac8";
  const TEMPLATE_ID = "template_0ql30ti";
  const PUBLIC_KEY = "9v80S1FAWFUDLMZgP";

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
        .then((res) => {
          alert("Your message has been sent!");
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
          console.error("Failed to send:", err);
          alert("Failed to send message. Try again later.");
        });
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <>
      <div className="fin-finance-center">
        <h1>KEBORA FINANCE SERVICES</h1>
        <img src={img16} />
      </div>
      <div className="fin-finance-max">
        <p>Welcome to Kebora Finance Services </p>
        <p>
          Your trusted partner for digital payments, international remittances,
          travel bookings, and car rental solutions in Sierra Leone. Whether
          you’re sending money abroad, paying bills locally, or booking a
          flight, Kebora simplifies your life with secure, fast, and convenient
          services — all in one place.
        </p>
        <h5> Explore our services:</h5>
        <ul>
          <li>Mobile Money (AfroMoney & Orange Money)</li>
          <li>
            {" "}
            International Money Transfers (MoneyGram, Western Union, Ria)
          </li>
          <li>International Flight Bookings</li>
          <li>Car Rental Services</li>
        </ul>
      </div>
      <div className="fin-finacial-main">
        <h1>Mobile Money Services</h1>
        <div className="fin-finance-flex-section">
          <div className="fin-diamond-section">
            <div className="fin-image-container">
              <img src={img32} alt="fin-Kebora Diamond" />
            </div>
            <div className="fin-text-container">
              <h2>Afro Money </h2>
              <p>
                A fully integrated mobile wallet that works with Africell SIM
                cards. Registration is free with a valid ID.
              </p>
              <h2>Key Features:</h2>
              <p> Send and receive money locally or internationally</p>
              <p> Send and receive money locally or internationally</p>
              <p>Pay utility bills (EDSA, Guma), DSTV, and more</p>
              <p>Buy airtime and mobile data</p>
              <p>“Sen fo Mi” emergency request service</p>
              <p>Instant transfer to your bank account</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fin-diamond-section key-feature">
        <div className="fin-text-container">
          <h1>Orange Money</h1>
          <p>
            A secure and flexible service for daily financial transactions
            through Orange agents and mobile access.
          </p>
          <h3>Key Features:</h3>
          <p>• Deposit and withdraw cash anytime</p>
          <p>• Send money to other Orange Money users </p>
          <p>• Buy airtime and data bundles</p>
          <p>• Pay bills and link with your bank account</p>
          <p>
            • Manage your account 24/7 (change PIN, service language, etc.){" "}
          </p>
        </div>
        <div className="fin-image-container">
          <img src={img8} alt="fin-Kebora Diamond" />
        </div>
      </div>
      <div className="fin-international-section">
        <h1>International Money Transfers</h1>
      </div>
      <div className="fin-diamond-section money-gram">
        <div className="fin-image-container">
          <img src={img7} alt="fin-Kebora Diamond" />
        </div>
        <div className="fin-text-container">
          <h1>MONEY GRAM</h1>
          <p>
            Fast and reliable international transfers available via major
            partners in Sierra Leone like Rokel Bank, SLCB, UBA, and FirstBank.
          </p>
          <p>Highlights:</p>
          <p>Send and receive cash or direct-to-bank transfers </p>
          <p>Send and receive cash or direct-to-bank transfers </p>
          <p>No receiving fees</p>
          <p>Over 150 countries and 650,000+ global locations </p>
          <p>Digital and in-person options </p>
        </div>
      </div>
      <div className="fin-diamond-section key-feature">
        <div className="fin-text-container">
          <h1>Western Union</h1>
          <p>
            Global transfers made easy through app or agent locations across
            Sierra Leone.
          </p>
          <p>Highlights:</p>
          <p>Real-time cash pickup or mobile wallet transfer</p>
          <p>Easy sending with MTCN tracking</p>
          <p>Bill payment and prepaid services </p>
          <p>Available in over 200 countries</p>
        </div>
        <div className="fin-image-container">
          <img src={img6} alt="fin-Kebora Diamond" />
        </div>
      </div>
      <div className="fin-diamond-section money-gram-ria">
        <div className="fin-image-container">
          <img src={img5} alt="fin-Kebora Diamond" />
        </div>
        <div className="fin-text-container">
          <h1>Ria Money Transfer</h1>
          <p>
            Efficient global remittance services through FirstBank and SLCB
            branches.
          </p>
          <p> Highlights:</p>
          <ul>
            <li>Send money via app, online, or in person </li>
            <li>Receive through cash pickup or direct deposit </li>
            <li>Valid PIN and ID required for collection</li>
            <li>60+ branches across Sierra Leone support Ria</li>
          </ul>
        </div>
      </div>
      <div className="fin-diamond-section">
        <div className="fin-image-container car-container">
          <img src={img3} alt="fin-Kebora Diamond" />
        </div>
        <div className="fin-text-container">
          <p>International Flight Booking</p>
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
      <div className="contact-us">
        <div className="contact-left">
          <img
            src={img16}
            alt="Kebora Trading Company Limited"
            className="logo"
          />
          <h2>Contact Us</h2>
          <p>For bookings, support, or questions about our services:</p>
          <div className="contact-details">
            <div>
              <IoMail />{" "}
              <a href="mailto:keboraoxygen@gmail.com">
                keborafinance@gmail.com
              </a>
            </div>
            <div>
              <IoCall /> +232 33 05 95 86
            </div>
            <div>
              <IoLocationSharp /> 43, KOIKAIDU ROAD, NEXT TO LEGANCY CLUB OPERA,
              KONO SIERRA LEONE
            </div>
            {/* <p>Follow us on: Facebook | Instagram | WhatsApp Business</p> */}
            <p>
              Kebora Finance Services — Because your money should work for you.
            </p>
          </div>
        </div>
        <div className="contact-right">
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
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeboraFinance;
