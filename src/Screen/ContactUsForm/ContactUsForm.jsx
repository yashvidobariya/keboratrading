import React, { useState } from "react";
import "./ContactUsForm.css";
import emailjs from "@emailjs/browser";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { IoMailUnreadSharp } from "react-icons/io5";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    question: "",
  });

  const [errors, setErrors] = useState({});

  const SERVICE_ID = "service_k4pffs7";
  const TEMPLATE_ID = "template_zvh01rn";
  const PUBLIC_KEY = "w_cDNmD5FUGSeOCE6";

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
    <div className="contact-wrapper">
      <div className="contact-banner">
        <h1>Contact us</h1>
      </div>

      <div className="contact-description">
        <p>
          Contact us about anything related to our company or services. We'll do
          our best to get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-main-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group-contact">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error-border" : ""}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group-contact">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="+232"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-contact">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error-border" : ""}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group-contact">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group-contact-full">
            <label>Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "error-border" : ""}
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>

          <div className="form-group-contact-full">
            <label>Question *</label>
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

          <button type="submit">Submit</button>
        </form>

        <div className="contact-info">
          <h3>Kebora Trading Company Limited</h3>
          <p className="flex-contact">
            <HiOutlineLocationMarker className="icon-contact-us" />
            <p>38 misingbi road Kono Eastern-kono</p>
          </p>
          <p className="flex-contact">
            <IoMdCall className="icon-contact-us" />
            <p>+232 79343434 </p>
          </p>
          <p className="flex-contact">
            <IoMailUnreadSharp className="icon-contact-us" />
            <p> keboratradingin@gmail.com</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
