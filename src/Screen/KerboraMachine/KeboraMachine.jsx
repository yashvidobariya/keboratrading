import React, { useEffect, useRef, useState } from "react";
import "./KerboraMachine.css";
import img1 from "../../Image/13.jpeg";
import img11 from "../../Image/11.jpeg";
import img18 from "../../Image/18.jpeg";
import img10 from "../../Image/10.png";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import logo from "../../Image/15.jpeg";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

const KeboraMachines = () => {
  const images = [img11, img18, img10];
  const combinedImages = [...images, ...images];
  const slideRef = useRef();

  useEffect(() => {
    const slideContainer = slideRef.current;

    let animation;
    let position = 0;

    const animate = () => {
      position -= 0.2; // Adjust speed here
      if (position <= (-100 * images.length) / 3) {
        position = 0;
      }
      slideContainer.style.transform = `translateX(${position}%)`;
      animation = requestAnimationFrame(animate);
    };
    animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, [images]);

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
      <div className="diamond-flex">
        <img src={img1} alt="Diamond Machine" />
      </div>
      <div className="kebora-container-section">
        <div className="side-header">
          <span className="line"></span>KEBORA MACHINES
        </div>
        <div className="main-content">
          <h1>KEBORA MACHINES</h1>
          <hr />
          <h2>Our Services :</h2>
          <p>
            Our business is to give you business. At Kebora Machines, we
            specialize in providing reliable heavy equipment rentals and expert
            machinery transportation services across Koidu and the Eastern
            Province of Sierra Leone. With a strong focus on performance,
            convenience, and customer satisfaction, we help your projects move
            faster, safer, and more efficiently — from start to finish.
            <br />
            <br />
            <b>Equipment Rental Services:</b> We offer a robust fleet of
            high-performance construction machines, ideal for use in mining,
            roadworks, land development, and infrastructure projects. Our
            equipment is regularly maintained, thoroughly inspected, and always
            delivered in like-new condition for maximum productivity on your
            site.
          </p>
        </div>
      </div>
      <div className="slider-container">
        <div className="auto-slider">
          <div className="auto-slider-track" ref={slideRef}>
            {combinedImages.map((img, idx) => (
              <div className="auto-slide" key={idx}>
                <img src={img} alt={`slide ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="main-content-diamond">
        <div className="content-flex">
          <div className="first-content">
            <h3>Equipment Rental Services:- </h3>
            <div className="ul-info">
              <ul>
                <li>
                  We offer a robust fleet of high-performance construction
                  machines, ideal for use in mining, roadworks, land
                  development, and infrastructure projects. Our equipment is
                  regularly maintained, thoroughly inspected, and always
                  delivered in like-new condition for maximum productivity on
                  your site.
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
            <img src={img1} />
            <h3>Equipment Rental Services:- </h3>
            <p>
              We offer a robust fleet of high-performance construction machines,
              ideal for use in mining, roadworks, land development, and
              infrastructure projects. Our equipment is regularly maintained,
              thoroughly inspected, and always delivered in like-new condition
              for maximum productivity on your site.
            </p>
            <h3>Available rental equipment: </h3>
            <ul>
              {" "}
              <li>
                Excavators – Suitable for digging, trenching, demolition, and
                bulk material handling
              </li>
              <li>
                JCB Backhoe Loaders – Multi-purpose machines combining a loader
                and excavator
              </li>
              <li>
                Front Loaders – Perfect for lifting and transporting heavy
                materials on-site
              </li>
              <li>
                Dozers – Ideal for grading, pushing soil or rubble, and
                land-clearing operations
              </li>
              <h3>What You Get with Our Rental Service:</h3>
              <ul>
                <li>A fleet maintained to the highest industry standards</li>
                <li>Like-new machines delivered clean and ready for work</li>
                <li>
                  24/7 customer support to reduce downtime and handle
                  emergencies
                </li>
                <li>
                  Flexible rental durations – daily, weekly, monthly, or
                  long‑term project plans
                </li>
                <li>
                  Optional trained operator services to improve safety and speed
                  on‑site
                </li>
              </ul>
            </ul>

            <p>
              Our equipment is chosen not just for power and performance, but
              for the reliability your business depends on.
            </p>

            <h3>Machinery Transportation Services</h3>
            <p>
              Transporting heavy equipment requires precision, care, and the
              right experience — which is exactly what Kebora Machines delivers.
              Our dedicated logistics division handles the safe movement of both
              our rental equipment and your personal machinery, so you never
              have to coordinate with multiple vendors.
            </p>
            <h3>We provide transport for:</h3>
            {/* <ol> */}
            <li>
              Our full range of rental equipment (excavators, loaders, dozers,
              etc.)
            </li>
            <li>Customer‑owned machinery and plant equipment</li>
            <li>
              Containers, portable cabins, site tools, and large‑scale cargo
            </li>
            {/* </ol> */}

            <h3>What makes our transport services reliable:</h3>
            {/* <ol> */}
            <li>
              A fleet of heavy‑duty trailers and haulers designed for rough
              terrain
            </li>
            <li>
              An experienced team trained in industrial equipment loading and
              safety
            </li>
            <li>
              Route planning and on‑time delivery across the Eastern Province
            </li>
            <li>
              Proper coordination from pickup to offloading to ensure nothing is
              missed
            </li>
            <li>
              Secure handling and movement of oversized and sensitive machinery
            </li>
            {/* </ol> */}

            <p>
              Whether it's moving a single machine or coordinating transport for
              a full fleet, Kebora Machines is your trusted partner on the
              ground.
            </p>

            <h3>Why Choose Kebora Machines?</h3>
            {/* <ol> */}
            <li>One‑Stop Solution – Rentals and transport in one place</li>
            <li>Reliable Fleet – Maintained for heavy‑duty performance</li>
            <li>
              Skilled Team – Trained and experienced for safety and precision
            </li>
            <li>Flexible Services – Tailored</li>
            <h3>Why Choose Kebora Machines?</h3>
            <ol>
              <li>One‑Stop Solution – Rentals and transport in one place</li>
              <li>
                Reliable Fleet – All machines are fully serviced and
                project‑ready
              </li>
              <li>
                24/7 Support – Always available when your project can’t wait
              </li>
              <li>
                Specialized Transport – Safe, expert handling of all heavy
                machinery
              </li>
              <li>
                Local Expertise – Proudly serving Koidu and the Eastern region
              </li>
              <li>
                Hassle‑Free Logistics – We handle the machinery so you can
                handle the work
              </li>
              {/* </ol> */}

              <h3>Contact Us</h3>
              <p>
                Ready to get started? Reach out to Kebora Machines today for
                bookings, quotes, or more information. Let us help move your
                business forward — because our business is to give you business.
                Call/WhatsApp: +232 74 23 21 28
              </p>
              <p>
                Email id:{" "}
                <a href="mailto:keboramachines@gmail.com">
                  keboramachines@gmail.com
                </a>
              </p>
            </ol>
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
            trading, machinery, gas supply, and financial services. We are
            committed to excellence, reliability, and fostering strong client
            relationships across all our operations.​​
          </p>
          <div className="contact-details">
            <div className="icon-content">
              <IoMail className="icon-contactus" />
              <a href="mailto:keboraoxygen@gmail.com">
                keboramachines@gmail.com
              </a>
            </div>
            <div className="icon-content">
              <IoCall className="icon-contactus" /> +232 74 23 21 28
            </div>
            <div className="icon-content">
              <IoLocationSharp className="icon-contactus" /> 38 masembi road 555
              spot koidu
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

export default KeboraMachines;
