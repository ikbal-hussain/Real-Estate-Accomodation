import React, { useState, useEffect } from "react";
import "../styles/Featured.css";
import { useSelector } from "react-redux";

const FeaturedCard = ({ ele }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ele.photos.length);
      setIsFading(false);
    }, 400); // Adjust this delay to match the CSS transition duration
  };

  const prevImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + ele.photos.length) % ele.photos.length
      );
      setIsFading(false);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="card" >
      <div className="image-container">
        <img
          src={ele.photos[currentImageIndex] || `https://img.staticmb.com/mbimages/project/Photo_h0_w320/2019/12/30/Project-Photo-41-SNN-Raj-Greenbay-Bangalore-5082567_667_1000_0_320.jpg`}
          alt={ele.title}
          className={`image ${isFading ? "fade" : ""}`} 
        />
        <div className="image-overlay">
          <button className="prev-button" onClick={prevImage}>
            &lt;
          </button>
          <button className="next-button" onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>
      <div className="text-container">
        <h2 className="title">{ele.title}</h2>
        <p className="price">Price: ₹{ele.price}</p>
        <p className="description">{ele.description}</p>
        <p className="amenities-title">Amenities:</p>
        <div className="amenities-buttons">
          {ele.amenities.map((amenity, index) => (
            <button key={index} className="amenity-button">
              {amenity}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Featured = () => {
  const { properties, loading, error } = useSelector(
    (state) => state.properties
  );

  return (
    <div className="featured-container">
      <h1 className="featured-span">Featured</h1>
      <h1 className="featured-title">Explore Our Most Popular Properties</h1>
      <div className="cards-container">
        {properties.slice(1, 4).map((ele) => (
          <FeaturedCard key={ele.Uu_id} ele={ele} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
