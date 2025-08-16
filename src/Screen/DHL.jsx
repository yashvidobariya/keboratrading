import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../Image/15.jpeg";
import img2 from "../Image/dh.png";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

const DHL = () => {
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
      <div className="fin-diamond-section  dhl money-gram car-rental">
        <div className="fin-text-container">
          <h2 className="font-size">DHL Express</h2>
          <p className="dhl-express">
            What it does DHL Express is a global leader in international express
            shipping, courier, and mail services. It provides time-definite,
            door-to-door delivery of documents and parcels to over 220 countries
            and territories. The company focuses on speed and reliability, with
            many international shipments arriving by the next possible business
            day.
          </p>
          <h4>Target Audience</h4>
          <p>The primary target audience for DHL Express includes:</p>
          <ul>
            <li>
              Businesses of all sizes: From small and medium-sized enterprises
              (SMEs) to large corporations, DHL Express serves businesses that
              need to ship goods internationally. This includes industries such
              as e-commerce, technology, automotive, and healthcare.
            </li>
            <li>
              E-commerce businesses: With the rise of online retail, DHL Express
              has a strong focus on e-commerce, offering solutions tailored for
              online merchants, including real-time tracking, seamless returns,
              and integrations with e-commerce platforms.
            </li>
            <li>
              Individuals: DHL Express also caters to individuals who need to
              send urgent, time-sensitive, or valuable documents and packages
              internationally.
            </li>
          </ul>
          <h3>Key Features</h3>
          <ul>
            <li>
              Global Network: DHL Express has an extensive network that covers
              over 220 countries and territories, providing a vast reach for
              international shipping.{" "}
            </li>
            <li>
              Speed and Time-Definite Delivery: The company is known for its
              fast and reliable service, offering time-definite options such as
              next-day delivery and specific delivery time slots (e.g., Express
              9:00, Express 12:00).
            </li>
            <li>
              Customs Expertise: With significant experience in international
              shipping, DHL has a team of customs experts to help streamline
              customs procedures, reducing delays and complications for
              cross-border shipments.
            </li>
            <li>
              Advanced Tracking: DHL Express provides real-time tracking and
              proactive delivery updates, allowing customers to monitor their
              shipments throughout the entire journey.
            </li>
            <li>
              Flexible Delivery Options: Through its "On Demand Delivery"
              service, recipients can customize their delivery experience by
              choosing a convenient day, time, or location for their package.
            </li>
            <li>
              Technology Integration: The company offers various digital tools
              and APIs that can be integrated with e-commerce platforms and
              business systems to automate and simplify shipping processes.
            </li>
          </ul>
        </div>
        <div className="fin-image-container">
          <img src={img2} alt="fin-Kebora Diamond " />
          <div className="fin-text-container">
            <h4>Why Choose Us</h4>
            {/* <p>The primary target audience for DHL Express includes:</p> */}
            <ul>
              <li>
                Unrivaled International Expertise: As "The International
                Specialists," DHL Express has a deep understanding of global
                logistics and customs regulations, ensuring your shipments
                navigate international borders efficiently.
              </li>
              <li>
                Speed and Reliability: When time is of the essence, DHL Express
                provides a dependable, time-definite service that gets your
                shipments to their destination on the next possible business
                day.
              </li>
              <li>
                Comprehensive Solutions: We offer a wide range of services and
                tools, from simple online shipping for individuals to tailored,
                automated solutions for businesses, ensuring we can meet your
                specific needs.
              </li>
              <li>
                Customer-Centric Approach: We prioritize customer satisfaction
                by providing flexible delivery options and transparent tracking,
                giving both senders and recipients control and peace of mind.
              </li>
              <li>
                Commitment to Sustainability: DHL is at the forefront of
                sustainable logistics, offering eco-friendly solutions for
                businesses that prioritize environmental responsibility.
              </li>
            </ul>
          </div>
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
            <strong>Kebora Trading Company Limited </strong>
            serves as the umbrella for a diverse portfolio of businesses,
            including diamond trading, machinery, gas supply, financial services
            and restaurant. We are committed to excellence, reliability, and
            fostering strong client relationships across all our operations.​​
          </p>
          <div className="contact-details">
            <div className="icon-content">
              <IoMail className="icon-contactus" />
              <a href="mailto:keboraoxygen@gmail.com">
                keboratradingin@gmail.com
              </a>
            </div>
            <div className="icon-content">
              <IoCall className="icon-contactus" /> +232 33 059586
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

export default DHL;
