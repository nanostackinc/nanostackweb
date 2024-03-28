import React, { useState, useEffect } from 'react';
import './style.css';

const Carousel = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % data.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, data.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container d-flex flex-column justify-content-center mx-auto">
     <div className="carousel-slides">
  <div className="slide" style={{ width:"100%" }}>
    <div className="row d-flex align-items-center" >
      <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center" style={{ padding:16 }}>
        <p className='title'>{data[currentIndex].title}</p>
      </div>
      <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center" style={{ padding:16 }}>
        <p className='highlight'>{data[currentIndex].description}</p>
      </div>
    </div>
  </div>
</div>

      <div className="indicators">
        {data.map((item, index) => (
          <span           
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
