import React, { useEffect, useRef, useState } from "react";
import "./KeboraGasSupply.css";
import img1 from "../../Image/20.jpeg";
import img2 from "../../Image/24.jpeg";
import img22 from "../../Image/22.jpeg";
import img21 from "../../Image/21.jpeg";
import img19 from "../../Image/19.jpeg";
import img9 from "../../Image/9.jpeg";
import img17 from "../../Image/17.jpeg";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import logo from "../../Image/15.jpeg";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

const KeboraGasSupply = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    question: "",
  });

  const SERVICE_ID = "service_qe5rac8";
  const TEMPLATE_ID = "template_0ql30ti";
  const PUBLIC_KEY = "9v80S1FAWFUDLMZgP";

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
    <>
      <div className="keboradiamond-main">
        <div
          className="diamond-flex-gas"
          style={{
            backgroundImage: "/Image/bggas.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src={img17} alt="Diamond Machine" />
        </div>
      </div>
      <div className="gas-supply-container-section">
        <div className="gas-side-header">
          <span className="line">KEBORA TRADING COMPANY LIMITED</span>
        </div>
        <div className="gas-main-content">
          <h1>KEBORA TRADING COMPANY LIMITED</h1>
          <p>
            Welcome to Kebora Trading Company Ltd., your premiersupplier of
            essential gases and industrial materials in Koidu, Eastern Province,
            Sierra Leone. We are dedicatedto providing high-quality products and
            reliable service tomeet the critical needs of our diverse clientele.
            At Kebora Trading Company Ltd., we specialize in the supply of:
          </p>
          <ul className="gas-kebora-section">
            <li>
              Medical Oxygen: Ensuring a vital lifeline for healthcare
              facilities and patients.
            </li>
            <li>
              Industrial Oxygen: Supporting various industrial processes with a
              reliable and consistent supply.
            </li>
            <li>
              Nitrogen Gas Cylinders: Providing essential nitrogenfor industrial
              applications.{" "}
            </li>
            <li>
              Acetylene Gas Cylinders: Supplying high-quality acetylene for
              welding and cutting needs.
            </li>
            <li>
              Afrigas (Authorized Seller): We are proud to be an authorized
              seller of Afrigas, offering reliable and safe LPG solutions.{" "}
            </li>
            <li>
              Calcium Carbonate Drums: Supplying high-quality calcium carbonate
              for various industrial applications.
            </li>
          </ul>
          <p>
            As a trusted trading company, we understand the importance of
            safety, reliability, and timely delivery. Ourteam is committed to
            upholding the highest standards of quality and service, ensuring
            that our customers receive the products they need, when they need
            them. Kebora Trading Company Ltd. is dedicated to fostering strong
            relationships with our customers and partners, and we are committed
            to contributing to the economic growth of our region. We prioritize
            customer satisfaction and strive to exceed expectations with every
            transaction. Contact Kebora Trading Company Ltd. today to learn how
            we can meet your medical, industrial, and trading needs with our
            comprehensive range of products and services."
          </p>
          <h1>MEDICAL OXYGEN</h1>
          <img src={img2} />
        </div>
      </div>
      <div className="gas-supply-container-section">
        <div className="gas-side-header">
          <span className="line">MEDICAL OXYGEN</span>
        </div>
        <div className="gas-main-content">
          <h1>MEDICAL OXYGEN</h1>

          <p>
            Medical Oxygen Cylinder: This clearly indicates the intended use of
            the cylinder, which is for medical purposes. This is crucial, as
            medical-grade oxygen has strict purity requirements.
          </p>
          <p>
            D-Type Valve: This refers to a specific type of valve used on the
            cylinder. It's important to ensure that the valve is compatible with
            standard medical oxygen regulators and delivery systems.{" "}
          </p>
          <p>
            D-Type Valve: This refers to a specific type of valve used on the
            cylinder. It's important to ensure that the valve is compatible with
            standard medical oxygen regulators and delivery systems.{" "}
          </p>
          <p>
            Good Purity/Good Pressure: These are essential qualities for medical
            oxygen. "Good purity" signifies that the oxygen is free from
            contaminants, and "good pressure" ensures that it can be delivered
            effectively.
          </p>
          <p>
            24-Hour Observing for Bottle Safety: This highlights a crucial
            safety measure. Continuous monitoring is vital to prevent leaks,
            pressure buildup, or other hazards.
          </p>
        </div>
      </div>
      <div className="gas-diamond-section">
        <div className="gas-image-container">
          <img src={img22} alt="gas-Kebora Diamond" />
        </div>
        <div className="gas-text-container">
          <h2>INDUSTRIAL OXYGEN</h2>
          <p>Product: Industrial Oxygen Cylinder</p>
          <p>
            Capacity: Standard 50L Water Capacity (Approx.) Pressure: 150 Bar/
          </p>
          <p>
            Purity: 95% Oxygen Applications: Ideal for welding, cutting, metal
          </p>
          <p>fabrication, and various industrial processes. </p>
          <p>
            Key Feature: High-pressure storage for extended use and reliable
            performance.
          </p>
          <p>Safety: Handled with strict safety standards.</p>
        </div>
      </div>
      <div className="gas-diamond-section white-background">
        <div className="gas-text-container">
          <h2>NITROGEN GAS</h2>
          <p>
            Industrial Nitrogen Gas: Nitrogen (N₂) is an inert, colorless,
            odorless, and non-flammable gas.{" "}
          </p>
          <p>
            Its inertness makes it valuable for applications where preventing
            unwanted chemical reactions, like oxidation, is crucial.
          </p>
          <p>Applications Metalworking:</p>
          <p>
            Used for purging and creating inert atmospheres during welding and
            heat treating.{" "}
          </p>
          <p>
            Food Processing: Used for packaging to displace oxygen, extending
            shelf life.
          </p>
          <p>
            Chemical Industry: Used in various chemical processes and as a
            blanketing gas.{" "}
          </p>
          <p>Electronics: Used in semiconductor manufacturing. </p>
          <p>Pharmaceuticals: Used in drug manufacturing and packaging. </p>
          <p>Oil and Gas: Used for pipeline purging and pressure testing.</p>
          <p>Laser cutting: Used as assist gas. </p>
          <div className="diamondsection-button">
            <button>Learn more</button>
          </div>
        </div>
        <div className="gas-image-container">
          <img src={img21} alt="gas-Kebora Diamond" />
          <h2>Nitrogen Gas Cylinders:</h2>
          <p>
            {" "}
            Cylinder Specifications: Cylinders come in various sizes, typically
            measured by their water capacity{" "}
          </p>
          <p>
            Storage pressures are high, often around 150 to 300 bar, to maximize
            the amount of gas stored.
          </p>
          <p>
            {" "}
            Purity levels vary depending on the application, ranging from
            standard industrial grades to high-purity grades.
          </p>
        </div>
      </div>
      <div className="gas-diamond-section">
        <div className="gas-image-container">
          <img src={img1} alt="gas-Kebora Diamond" />
          <p>Availability:</p>
          <p>
            Various cylinder sizes available. Delivery and refill services.{" "}
          </p>
          {/* <p>
            Important Note: Due to the hazardous nature of acetylene, emphasize
            safety and proper handling in your catalog. By emphasizing safety
            and the unique characteristics of acetylene cylinders, you can
            provide your customers with the necessary information for safe and
            effective use.
          </p> */}
        </div>
        <div className="gas-text-container">
          <h2>ACTYLENE GAS</h2>
          <p>Product: Acetylene Gas Cylinders</p>
          <p>Key Features:</p>
          <ul>
            <li>High-temperature flame for welding and cutting. </li>
            <li>Specially designed cylinders for safe storage. </li>
            <li>Reliable supply for metalworking applications. </li>
          </ul>
          <p>Applications:</p>
          <ul>
            <li>Oxy-acetylene welding and cutting.</li>
            <li>Metal fabrication and repair.</li>
            <li>Heating and brazing.</li>
          </ul>
          <p>Safety Information:</p>
          <ul>
            <li>Handle with extreme care.</li>
            <li>Store upright and away from heat.</li>
            <li>
              Use appropriate safety equipment, including flashback arrestors.
              Consult the SDS.
            </li>
          </ul>
        </div>
      </div>
      <div className="gas-main-content-diamond">
        <div className="gas-content-flex">
          <div className="gas-first-content gas-content">
            <h3>LPG(AFRIGAS )</h3>
            <div className="ul-info">
              <p>
                We bring this versatile and readily available fuel in portable
                solutions for our wide range of customers in Commercial,
                Industrial and Domestic Sector and allow people to use our gas
                as required. Supplied in an extensive range of cylinders to suit
                the requirements and delivered at your door step backed by an
                ultra-modern fleet of distribution vehicles. Backed by tailor
                made engineering solutions of manifold systems with a range of
                accessories like regulators, valves, etc… we also provide our
                varied customer base with options of Liquid Off Take Valve (
                LOT), Large Cylinders and other solutions
              </p>
            </div>
          </div>
          <div className="gas-second-content">
            <img src={img19} />
          </div>
        </div>
      </div>
      <div className="gas-diamond-section">
        <div className="gas-image-container">
          <img src={img9} alt="gas-Kebora Diamond" />
        </div>
        <div className="gas-text-container">
          <h2>CALCIUM CARBONATE</h2>
          <p>
            Calcium carbonate (CaCO₃) is a very versatile mineral with a wide
            range of industrial and commercial applications. When supplied in
            drums, it indicates that it's being provided in bulk for these
            various uses.
          </p>
          <p>Calcium Carbonate Properties:</p>
          <ul>
            <li>
              It's a naturally occurring mineral found in rocks, shells, and
              limestone.{" "}
            </li>
            <li>It's a white, odorless powder.</li>
            <li> It's relatively inexpensive and abundant.</li>
            <li>It reacts with acids, producing carbon dioxide.</li>
          </ul>
          <h1>Common Uses of Calcium Carbonate:</h1>
          <ul className="gas-Kebora Diamond-ul">
            <li>Agriculture: It's used to neutralize acidic soils.</li>
            <li>It provides calcium for plant growth.</li>
            <li>
              {" "}
              Food and Pharmaceutical: It's used as a calcium supplement.
            </li>
            <li> It's used as an antacid.</li>
            <li> It is used in some food processing applications.</li>
          </ul>
        </div>
      </div>
      <div className="keboragassupply">
        <h1>SERVICE & FACILITY</h1>
        <p>
          Gas Cylinder Supply and Delivery: Offer a wide range of industrial
          gases: Oxygen, Nitrogen, Acetylene, Argon, CO2, etc.
        </p>
        <p> Provide various cylinder sizes to meet diverse customer needs.</p>
        <p>
          Establish a reliable delivery system with efficient routes and
          schedules.
        </p>
        <p>Offer emergency delivery services for urgent situations.</p>
        <p>
          Cylinder Refilling and Exchange: Set up a safe and efficient cylinder
          refilling facility.
        </p>
        <p>
          Implement a cylinder tracking system to manage inventory and ensure
          timely exchanges.
        </p>
        <p>Provide cylinder testing and maintenance services.</p>
        <p>
          {" "}
          Gas Equipment and Accessories: Supply welding equipment, regulators,
          hoses, flashback arrestors, and other related accessories.
        </p>
        <p>Offer equipment rentals or sales.</p>
        <p> Provide safety gear.</p>
        <p>
          Gas System Installation and Maintenance: Offer installation services
          for gas piping systems and equipment.
        </p>
        <p>
          Provide regular maintenance and inspections to ensure safety and
          efficiency.
        </p>
        <p>Offer leak detection services.</p>
        <p>
          Safety Training and Consulting: Conduct safety training sessions on
          gas handling, storage, and usage.
        </p>
        <p>
          Provide consulting services on gas safety regulations and best
          practices.
        </p>
        <p>
          Offer safety audits. Maintenance and Testing Workshop: A workshop for
          inspecting, testing, and repairing cylinders and equipment.
        </p>
        <p> Hydrostatic testing equipment for cylinder safety.</p>
        <p>
          Delivery Vehicles: A fleet of well-maintained vehicles equipped for
          safe cylinder transport.
        </p>
        <p>
          Vehicles should follow all regulations related to transporting
          compressed gasses.​
        </p>
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
              <a href="mailto:keboraoxygen@gmail.com">keboraoxygen@gmail.com</a>
            </div>
            <div className="icon-content">
              <IoCall className="icon-contactus" /> +232 33078662
            </div>
            <div className="icon-content">
              <IoLocationSharp className="icon-contactus" />
              1, nyama saqure street, koidu city, Sierra Leone.
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
    </>
  );
};

export default KeboraGasSupply;
