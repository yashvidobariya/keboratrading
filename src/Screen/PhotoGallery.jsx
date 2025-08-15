import React from "react";
import "../Screen/Photogallery.css";

const images = Array.from({ length: 62 }, (_, i) => `/Image/t${i + 1}.jpeg`);

export default function PhotoGallery() {
  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img src={src} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
