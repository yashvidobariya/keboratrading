import React from "react";
import "../Screen/Teammember.css";

const teamMembers = [
  {
    src: "https://picsum.photos/id/1018/400/300",
    name: "John Doe",
    position: "Project Manager",
  },
  {
    src: "https://picsum.photos/id/1015/400/300",
    name: "Jane Smith",
    position: "UI/UX Designer",
  },
  {
    src: "https://picsum.photos/id/1019/400/300",
    name: "Michael Johnson",
    position: "Developer",
  },
  {
    src: "https://picsum.photos/id/1020/400/300",
    name: "Emily Davis",
    position: "Marketing Lead",
  },
  {
    src: "https://picsum.photos/id/1021/400/300",
    name: "Robert Brown",
    position: "Content Strategist",
  },
  {
    src: "https://picsum.photos/id/1022/400/300",
    name: "Sophia Wilson",
    position: "HR Manager",
  },
  {
    src: "https://picsum.photos/id/1023/400/300",
    name: "David Lee",
    position: "QA Engineer",
  },
  {
    src: "https://picsum.photos/id/1024/400/300",
    name: "Olivia Taylor",
    position: "Business Analyst",
  },
];

export default function TeamMember() {
  return (
    <div className="gallery-container-team">
      {teamMembers.map((member, index) => (
        <div className="gallery-item-team" key={index}>
          <img src={member.src} alt={`Gallery-team ${index + 1}`} />
          <div className="overlay-team">
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
