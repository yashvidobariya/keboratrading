import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../Image/15.jpeg";
import "./ContactUs.css";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";
// import res from "../Image/res.jpeg";
import { useNavigate } from "react-router-dom";
import Restorant from "../Restorant";

const ContactUs = () => {
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
      {/* <Restorant /> */}
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
            trading, machinery, gas supply, financial services and restaurant. We are
            committed to excellence, reliability, and fostering strong client
            relationships across all our operations.​​
          </p>
          <div className="contact-details">
            <div className="icon-content">
              <IoMail className="icon-contactus" />
              <a href="mailto:keboraoxygen@gmail.com">
                keboratrading@gmail.com
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
    </>
  );
};

export default ContactUs;
