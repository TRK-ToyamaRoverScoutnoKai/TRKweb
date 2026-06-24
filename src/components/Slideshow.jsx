import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import campImg from '../assets/Slideshow/camp.png';
import seaImg from '../assets/Slideshow/sea.png';
import tateyamaImg from '../assets/Slideshow/tateyama.png';

// ↓ ここにスライドショーで流したい画像のパスを配列で入れます
const images = [campImg, seaImg, tateyamaImg];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 4秒（4000ミリ秒）ごとに画像を切り替えるタイマー
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