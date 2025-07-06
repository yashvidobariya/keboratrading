import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Policy.css";

const ContactUsForm = () => {
  const faqs = [
    {
      question: "What services does your company offer?",
      answer:
        "We offer a wide range of services including web development, mobile apps, UI/UX design, and digital marketing.",
    },
    {
      question: "How can I contact customer support?",
      answer: `You can reach our customer support team by emailing info@yourcompany.example.com, 
               calling +1 555-555-5556, or using the live chat on our website. Our dedicated team is available 24/7 
               to assist with any inquiries or issues. We’re committed to providing prompt and effective solutions.`,
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return any product within 30 days of purchase in its original condition for a full refund or exchange.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-banner">
        <h1>Privacy Policy</h1>
      </div>
      <div className="faq-section">
        <div className="faq-subtitle">
          <h1>Frequently asked questions</h1>
          <p>Here are some common questions about our company.</p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h4>{item.question}</h4>
                  <FaChevronDown
                    className={`faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <div
                    className={`faq-answer ${
                      activeIndex === index ? "open" : ""
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
