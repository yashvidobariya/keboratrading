import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../Image/15.jpeg";
import img2 from "../Image/flight.png";
import img1 from "../Image/benifit.png";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

const InternationFlight = () => {
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
      <div>
        <div className="fin-diamond-section  dhl money-gram car-rental">
          <div className="fin-text-container">
            <h2 className="font-size">International Flight Booking</h2>
            <p>
              International flight booking is the process of reserving and
              purchasing air tickets for travel between two different countries.
              This can be done directly through an airline's website, or more
              commonly, through an online travel agency (OTA) or a Global
              Distribution System (GDS).
            </p>
            <h4>What it Dose</h4>
            <p>
              An international flight booking platform acts as a one-stop-shop
              for travelers. It aggregates flight data, including fares,
              schedules, and availability, from various airlines to provide
              users with a comprehensive list of options. The platform allows
              you to:
            </p>
            <ul>
              <li>
                Search and Compare: Instantly search for flights based on your
                origin, destination, and travel dates. You can easily compare
                prices, airlines, flight durations, and layovers.
              </li>
              <li>
                Book and Pay: Securely book your chosen flight and make a
                payment using various methods, such as credit cards, debit
                cards, or digital wallets.
              </li>
              <li>
                Manage Your Booking: After booking, you can manage your
                reservation online, including checking in, making changes to
                your itinerary (subject to airline policies), and viewing your
                e-ticket.
              </li>
              <li>
                Access Additional Services: The platform may also offer
                supplementary services like travel insurance, hotel bookings,
                car rentals, and information on visa requirements and baggage
                policies.
              </li>
            </ul>
            <h3>Target Audience:</h3>
            <p>
              The target audience for international flight booking services is
              diverse and can be segmented into several groups:
            </p>
            <ul>
              <li>
                Leisure Travelers: Individuals, couples, and families planning
                vacations, holidays, or trips to visit friends and relatives
                abroad. This group often prioritizes finding the best deals and
                flexible booking options.
              </li>
              <li>
                Business Travelers: Professionals and corporate employees who
                need to travel for work-related purposes, such as meetings,
                conferences, or company assignments. They typically value
                convenience, direct flights, and premium cabin classes like
                business or first class.
              </li>
              <li>
                Students: Students traveling for academic purposes, including
                study abroad programs, internships, or returning home for
                holidays. They are often budget-conscious and look for
                affordable fares and student-specific discounts.
              </li>
              <li>
                Frequent Flyers and Loyalty Program Members: Individuals who
                travel frequently and are part of airline or credit card loyalty
                programs. They are interested in earning and redeeming points,
                as well as accessing exclusive benefits and deals.
              </li>
              <li>
                Travel Agents and Agencies: B2B customers who use these
                platforms to book flights and other travel services on behalf of
                their own clients.
              </li>
            </ul>
          </div>
          <div className="fin-image-container car-container">
            <img src={img2} alt="fin-Kebora Diamond " />
            <div className="fin-text-container">
              <h4>Key Features</h4>
              <p>
                A robust international flight booking platform should offer the
                following key features:
              </p>
              <ul>
                <li>
                  Real-time Availability and Pricing: Provides up-to-the-minute
                  information on flight schedules, seat availability, and ticket
                  prices to prevent overbooking and ensure transparency.
                </li>
                <li>
                  Advanced Search Filters: Allows users to refine their search
                  by various criteria, such as airline, number of stops,
                  departure/arrival times, price range, and cabin class.
                </li>
                <li>
                  Multi-city and Flexible Date Search:* Enables complex
                  itineraries and helps users find the cheapest days to fly by
                  showing a calendar view of fares.
                </li>
                <li>
                  Secure Payment Gateway: Offers a safe and reliable way to
                  process payments with multiple payment options.
                </li>
                <li>
                  Price Alerts and Fare Tracking: Notifies users of price
                  changes for their desired routes, helping them book at the
                  optimal time.
                </li>
                <li>
                  Mobile Responsiveness and App: A user-friendly interface that
                  works seamlessly on desktops, tablets, and mobile phones,
                  often with a dedicated mobile app for convenience.
                </li>
                <li>
                  Customer Support: Provides 24/7 support through various
                  channels (phone, email, live chat) to assist with bookings,
                  changes, and cancellations.
                </li>
                <li>
                  Information Hub: A resource for essential international travel
                  details, including passport and visa requirements, baggage
                  allowances, and in-flight services.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fin-diamond-section  dhl money-gram car-rental1">
          <div className="fin-image-container">
            <img src={img1} alt="fin-Kebora Diamond " />
          </div>
          <div className="fin-text-container">
            <h4>Benefits</h4>
            <p>
              The benefits of using an international flight booking service are
              numerous:
            </p>
            <ul>
              <li>
                Convenience and Time-Saving: Book flights anytime, anywhere,
                without the need to visit a physical travel agency.
              </li>
              <li>
                Cost-Effectiveness: Easily compare prices from multiple airlines
                and OTAs to find the best deals and save money.
              </li>
              <li>
                Flexibility: Many platforms offer flexible fare options that
                allow for changes or cancellations, providing peace of mind in
                case plans change.
              </li>
              <li>
                Comprehensive Information: Access all the necessary details for
                your trip in one place, from flight schedules to visa rules.
              </li>
              <li>
                Personalized Experience: Some platforms use AI and machine
                learning to recommend flights and travel add-ons based on your
                preferences.
              </li>
            </ul>
          </div>
        </div>
        <div className="fin-diamond-section money-gram car-rental  contact-if">
          <div className="fin-text-container">
            <h2>Why Choose Us</h2>
            <ul>
              <li>
                Extensive Network: We have access to a vast network of global
                airlines, offering you a wide range of choices for any
                destination.
              </li>
              <li>
                Competitive Pricing: Our advanced search technology ensures you
                get the most competitive fares by comparing prices across all
                major providers.
              </li>
              <li>
                User-Friendly Platform: Our intuitive website and mobile app
                make the booking process simple and stress-free.
              </li>
              <li>
                Dedicated 24/7 Support: Our team of experienced travel
                consultants is available around the clock to assist you with any
                questions or issues.
              </li>
              <li>
                Secure and Reliable: We prioritize the security of your data and
                transactions, ensuring a safe booking experience.
              </li>
            </ul>
          </div>
          <div className="fin-image-container car-container">
            <h1>Contact Us</h1>
            <p>
              For any inquiries or assistance, please contact us through the
              following channels:
            </p>
            <ul>
              <li>Email: [insert email address]</li>
              <li>Phone: [insert phone number]</li>
              <li>Live Chat: [provide link to live chat]</li>
              <li>Social Media: [list social media handles]</li>
            </ul>
            {/* <img src={img2} alt="fin-Kebora Diamond " /> */}
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

export default InternationFlight;
