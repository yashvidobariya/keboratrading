import React from "react";
import "../Screen/Teammember.css";

const teamMembers = [
  {
    src: "/Image/team1.jpeg",
    name: "Pradip Borda",
    position: "Founder of kebora– Kebora Trading Company",
    content:
      "Pradip Borda founded Kebora Trading Company in 2014 with a strong vision to build a dynamic, multi-industry business that delivers quality, trust, and innovation. Under his leadership, Kebora has grown into a versatile company with operations spanning several key sectors: diamond trading, industrial machinery, medical and industrial gas supply, car rental services, money transfer, flight booking, and hospitality (restaurant business).",
    content1:
      "With over a decade of entrepreneurial experience, Pradip has successfully positioned Kebora as a trusted name across both local and international markets. His ability to adapt to changing market needs, build reliable partnerships, and lead diverse teams has been critical to the company’s continued growth and success.",
    content2:
      "Driven by a passion for service excellence and long-term sustainability, Pradip remains deeply involved in every aspect of the business, ensuring that Kebora Trading Company maintains its reputation for quality, transparency, and customer satisfaction.",
  },
  {
    src: "/Image/team2.jpeg",
    name: "Ankit Anghan",
    position: "Head of Machinery Division – Kebora Trading Company",
    content:
      "Ankit Anghan plays a key leadership role at Kebora Trading Company, overseeing the industrial machinery division. With deep technical knowledge and a hands-on approach, he is responsible for managing operations related to the sourcing, distribution, installation, and maintenance of heavy and specialized machinery.",
    content1:
      "Since joining Kebora, Ankit has been instrumental in streamlining operations, building strong supplier networks, and ensuring the timely delivery of high-quality equipment to clients across various industries. His focus on reliability, safety, and after-sales support has helped Kebora earn a strong reputation in the machinery sector.",
    content2:
      "Ankit is known for his problem-solving mindset, customer-first attitude, and commitment to continuous improvement — making him a valuable part of the company’s growth and long-term success.",
  },
  {
    src: "/Image/team3.jpeg",
    name: "Vedant Rajyaguru",
    position: "Gas Supply Operations Head – Kebora Trading Company",
    content:
      "Vedant Rajyaguru plays a crucial role at Kebora Trading Company, overseeing the operations of the Gas Supply Department. He is responsible for managing the distribution and logistics of medical and industrial gases, ensuring safe handling, timely delivery, and strict compliance with all safety regulations.",
    content1:
      "Vedant's role includes coordinating with suppliers, managing inventory, supervising filling and dispatch processes, and ensuring customer satisfaction across both commercial and healthcare sectors. His focus on operational efficiency and safety standards has made him a trusted leader within the division.",
    content2:
      "With a strong commitment to quality and reliability, Vedant continues to support Kebora’s reputation as a dependable provider in the critical gas supply industry.",
  },
  {
    src: "/Image/team4.jpeg",
    name: "Hardik Soni",
    position: "Accountant – Kebora Trading Company",
    content:
      "Hardik Soni is the backbone of the financial operations at Kebora Trading Company, serving as the company’s Accountant. With strong expertise in financial management, budgeting, and compliance, he ensures that all financial records are accurate, up-to-date, and in line with regulatory standards.",
    content1:
      "He plays a vital role in managing day-to-day accounting tasks, preparing financial reports, overseeing audits, and supporting strategic decision-making with clear financial insights. Known for his attention to detail and integrity, Hardik helps maintain the financial health and transparency of the company.",
    content2:
      "His dedication and systematic approach make him an essential part of Kebora’s continued growth and multi-sector success.",
  },
  {
    src: "/Image/team5.jpeg",
    name: "Vishal Rudani",
    position:
      "Manager – Service Operations   (Restaurant, Flight Booking, Car Rental & Money Transfer) Kebora Trading Company",
    content:
      "Vishal Rudani is a versatile and dynamic team member at Kebora Trading Company, managing a diverse portfolio of services including the restaurant, flight booking, car rental, and money transfer divisions. His ability to efficiently handle multiple departments makes him a key asset in delivering smooth, customer-focused experiences across all service areas.",
    content1:
      "In the restaurant division, Vishal ensures high standards of hospitality, food quality, and customer satisfaction. In travel services, he oversees flight bookings and car rentals, providing clients with convenient, reliable options tailored to their needs. Additionally, he manages the money transfer segment, ensuring secure, fast, and compliant financial transactions for both domestic and international clients.",
    content2:
      "Vishal is known for his organizational skills, customer-first mindset, and commitment to excellence — qualities that drive the continued success and trust in Kebora’s service departments.",
  },
];

export default function TeamMember() {
  return (
    <div className="gallery-container-team">
      {teamMembers.map((member, index) => (
        <div className="gallery-item-team" key={index}>
          <img src={member.src} alt={`Gallery-team ${index + 1}`} />
          <div className="overlay-team">
            <h2>{member.name}</h2>
            <h4>{member.position}</h4>
            <p>{member.content}</p>
            <p>{member.content1}</p>
            <p>{member.content2}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
