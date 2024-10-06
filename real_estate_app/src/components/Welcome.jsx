import React from "react";
import "../styles/Welcome.css"; // Importing the CSS file for styling
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Welcome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <div className="welcome-section">
        {/* Left section: Text and CTA button */}
        <div className="welcome-text">
          <h1>Unlock the Door to Your Ideal Location</h1>
          <p>
            Unlock your dream home with our curated listings and expert advice
            every step of the way. Whether you're searching for a cozy apartment
            or a luxury estate, we make finding the perfect place seamless,
            personalized, and stress-free.
          </p>
          <button className="cta-button">Get Started</button>
        </div>

        {/* Right section: Images */}
        <div className="welcome-images">
          <img
            src="https://img.pikbest.com/wp/202408/swimming-pool-3d-rendering-of-a-sunset-ocean-view-resort-villa-complete-with-refreshing_9833131.jpg!bw700"
            alt="Resort poolside view"
            className="main-image"
          />
          <div className="carousel-container">
            <Slider {...settings}>
              <div className="carousel-slide">
                <img
                  src="https://archxstudio.com/wp-content/uploads/2021/04/05-2.jpg"
                  alt="Modern villa"
                />
              </div>
              <div className="carousel-slide">
                <img
                  src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
                  alt="Beach resort"
                />
              </div>
              <div className="carousel-slide">
                <img
                  src="https://www.luxury-hideaway.com/assets/images/objects/1437987850_DSC_7198-ed9ee0f6.jpg"
                  alt="Luxury hideaway"
                />
              </div>
              <div className="carousel-slide">
                <img
                  src="https://www.idesignarch.com/wp-content/uploads/Modern-Tropical-Beachside-Villa-Bali_1.jpg"
                  alt="Tropical villa"
                />
              </div>
              <div className="carousel-slide">
                <img
                  src="https://keyvendors.com/blogs/wp-content/uploads/2023/06/interior-design-company-1-1024x602.jpg"
                  alt="Cozy getaway"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
