import React from "react";
import img1 from "../../Image/14.jpeg";
import img2 from "../../Image/31.jpeg";
import "./KeboraDiamond.css";

const KeboraDiamond = () => {
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

            <h3>Contact Us</h3>
            <ul>
              <li>
                <strong>Address:</strong> 39 MASEMBI ROAD 555 SPOT KOIDU
              </li>
              <li>
                <strong>Phone:</strong> +232 79343434
              </li>
              <li>
                <strong>Email:</strong> keboraoxygen@gmail.com
              </li>
            </ul>
            <h4>Contact Form:</h4>
            <ul>
              <li>Name (required)</li>
              <li>Email (required)</li>
              <li>Message (required)</li>
              <li>Optional: Subject</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeboraDiamond;
