import React from 'react';
import '../Style/Display.css';
import image1 from '../Images/Display.svg'; 

const Display = () => {
  return (
    <div className="display-container">
      <div className="display-left">
        <h1>Discover the Latest in <br />
          Samsung Innovation
        </h1>
        <p>Get up unto 70% Discount</p>
        <button className="explore-button">Explore</button>
      </div>
      <div className="display-right">
        <img src={image1} alt="Display" className="display-image" />
      </div>
    </div>
  );
};

export default Display;
