import React from "react";
import "../Screen/Photogallery.css";

const images = [
  "https://picsum.photos/id/1018/400/300",
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1019/400/300",
  "https://picsum.photos/id/1020/400/300",
  "https://picsum.photos/id/1021/400/300",
  "https://picsum.photos/id/1022/400/300",
  "https://picsum.photos/id/1023/400/300",
  "https://picsum.photos/id/1024/400/300",
];

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
