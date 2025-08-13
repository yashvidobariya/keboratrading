import React, { useState } from "react";
import img1 from "../../Image/14.jpeg";
import img2 from "../../Image/31.jpeg";
import emailjs from "@emailjs/browser";
import logo from "../../Image/15.jpeg";
import "./KeboraDiamond.css";
import { useNavigate } from "react-router-dom";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

const KeboraDiamond = () => {
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
    <div className="keboradiamond-main">
      <div className="diamond-flex">
        <img src={img1} />
      </div>
      <div className="diamond-center-content">
        <div className="center-flex">
          <h1>
            Kebora Diamond - Premier Diamond & Gold Trading from Sierra Leone
          </h1>
          <p>
            Kebora Diamond - Premier Diamond & Gold Trading from Sierra Leone
          </p>
        </div>
      </div>
      <div className="main-content-diamond">
        <div className="content-flex">
          <div className="first-content">
            <h3>About Us</h3>
            <div className="ul-info">
              <ul>
                <li>
                  Our Mission: "To provide reliable, compliant, and transparent
                  diamond and gold trading services, connecting Sierra Leone’s
                  rich resources to global markets while upholding the highest
                  ethical standards."
                </li>
                <li>
                  Our Vision: "To be a leading and reputable name in the diamond
                  and gold industry, recognized for promoting sustainable
                  practices, fostering economic growth in Sierra Leone, and
                  facilitating equitable trade."
                </li>
                <ul className="keboradiamond-li">
                  <li>Our Values:</li>
                </ul>
                <li>
                  Integrity: Conducting all business with honesty and strong
                  moral principles.
                </li>
                <li>
                  Transparency: Ensuring clear and open communication in all our
                  dealings.
                </li>
                <li>
                  Compliance: Adhering strictly to all local and international
                  regulations.
                </li>
                <li>
                  Customer Satisfaction: Prioritizing the needs and trust of our
                  clients.
                </li>
                <li>
                  Sustainability: Committed to environmentally responsible and
                  socially beneficial practices.
                </li>
              </ul>
            </div>
          </div>
          <div className="second-content">
            <p>
              "Kebora Diamond is your trusted partner in diamond mining,
              trading, and export services from Sierra Leone to Dubai and
              Belgium. We ensure compliance, quality, and integrity in every
              transaction, fostering transparent and reliable connections
              between Sierra Leone's precious resources and global markets."
            </p>
            <img src={img2} />
            <h3>Services</h3>
            <ul>
              <li>
                Diamond Mining & Trading: "We specialize in sourcing and trading
                high-quality, ethically mined diamonds directly from Sierra
                Leone’s most reputable mines, ensuring authenticity and value."
              </li>
              <li>
                Gold Trading & Export: "Kebora Diamond facilitates the compliant
                buying and exporting of gold from Sierra Leone, adhering to all
                international standards and ensuring a secure supply chain."
              </li>
              <li>
                Global Export Services: "Leveraging our expertise and
                established networks, we provide seamless export logistics from
                Sierra Leone to key global hubs such as Dubai, Belgium, and
                beyond, ensuring timely and secure delivery."
              </li>
              <li>
                Compliance & Certification: "Our commitment to compliance is
                paramount. We guarantee that all our transactions strictly
                adhere to local and international regulations, including full
                Kimberley Process Certification, ensuring conflict-free
                diamonds."
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-content-diamond">
        <div className="content-flex">
          {/* Left Section: Markets */}
          <div className="first-content">
            <h3>Markets</h3>
            <ul>
              <li>
                <strong>Dubai:</strong> "A strategically vital market, Dubai
                serves as a major international hub for diamond trading, jewelry
                manufacturing, and a gateway to the broader Middle Eastern and
                Asian markets. We connect Sierra Leone's diamonds and gold to
                this dynamic center."
              </li>
              <li>
                <strong>Belgium:</strong> "Antwerp, Belgium, is renowned
                globally as the world's leading diamond district. We leverage
                this direct connection to one of the most significant diamond
                trading centers, offering unparalleled access for our clients."
              </li>
            </ul>
          </div>

          {/* Right Section: Why Choose and Contact */}
          <div className="second-content">
            <h3>Why Choose Kebora Diamond?</h3>
            <ul>
              <li>
                <strong>Trusted Local Mining Partners:</strong> Established
                relationships with ethical and reliable local miners in Sierra
                Leone.
              </li>
              <li>
                <strong>Fully Compliant with International Trade Laws:</strong>{" "}
                Strict adherence to all global regulations, including the
                Kimberley Process.
              </li>
              <li>
                <strong>Certified and High-Quality Products:</strong> Guarantee
                of authenticity, quality, and conflict-free sourcing for all
                diamonds and gold.
              </li>
              <li>
                <strong>Efficient Export Logistics:</strong> Streamlined and
                secure processes for global delivery.
              </li>
              <li>
                <strong>Customer-Centric Approach:</strong> Dedicated to
                building long-term relationships through trust, transparency,
                and exceptional service.
              </li>
            </ul>

            {/* <h3>Contact Us</h3>
            <ul>
              <li>
                <strong>Address:</strong> 38 Misingbi road kono Eastern-Kono.
              </li>
              <li>
                <strong>Phone:</strong> +232 79343434
              </li>
              <li>
                <strong>Email:</strong> pradeepborada@gmail.com
              </li>
            </ul> */}
            {/* <h4>Contact Form:</h4>
            <ul>
              <li>Name (required)</li>
              <li>Email (required)</li>
              <li>Message (required)</li>
              <li>Optional: Subject</li>
            </ul> */}
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
                pradeepborada@gmail.com
              </a>
            </div>
            <div className="icon-content">
              <IoCall className="icon-contactus" /> +232 79343434
            </div>
            <div className="icon-content">
              <IoLocationSharp className="icon-contactus" /> 38 Misingbi road
              kono Eastern-Kono.
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

export default KeboraDiamond;
