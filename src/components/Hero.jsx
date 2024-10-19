import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="btn-container">
          <button>Shop now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>
          <div className="brand-icons">
            <img src="/images/flipkart.png" alt="flipkart"></img>
            <img src="/images/amazon.png" alt="amazon"></img>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/images/shoe_image.png" alt="hero-img" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
