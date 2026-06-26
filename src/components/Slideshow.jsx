import React, { useState, useEffect } from 'react';
import './Slideshow.css';

// ★追加：使いたい画像をすべてインポートする
import campImg from '../assets/Slideshow/camp.png';
import seaImg from '../assets/Slideshow/sea.png';
import tateyamaImg from '../assets/Slideshow/tateyama.png';

// ★変更：インポートした変数を配列に入れる
const images = [campImg, seaImg, tateyamaImg];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slideshow;