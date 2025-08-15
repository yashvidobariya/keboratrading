import React from "react";
import "../Screen/Photogallery.css";

const images = Array.from({ length: 62 }, (_, i) => `/Image/t${i + 1}.jpeg`);

export default function PhotoGallery() {
  const teamMembersVideo = [
    { video: "/Image/video1.mp4" },
    { video: "/Image/video3.mp4" },
    { video: "/Image/video4.mp4" },
    { video: "/Image/video5.mp4" },
    { video: "/Image/video2.mp4" },
  ];

  return (
    <>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="gallery-container-1">
        {teamMembersVideo.map((src, index) => (
          <div className="gallery-item-team1" key={index}>
            <video controls>
              <source src={src.video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </>
  );
}
