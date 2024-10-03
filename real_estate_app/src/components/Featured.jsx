import React, { useState, useEffect } from "react";
import '../styles/Featured.css'; 

const sampleData = [
    {
        "Uu_id": 1,
        "agentEmail": "ravi.kumar@gmail.com",
        "agentName": "Ravi Kumar",
        "agentPhone": "+91-9876543210",
        "amenities": [
            "WiFi",
            "Parking",
            "24/7 Security"
        ],
        "description": "A beautiful and modern 2BHK apartment in the heart of Koramangala.",
        "location": "Koramangala",
        "photos": [
            "https://images.oyoroomscdn.com/uploads/hotel_image/155753/medium/wrxvmcdqynsx.jpg",
            "https://images.oyoroomscdn.com/uploads/hotel_image/155753/medium/hnisqxvkpslv.jpg",
            "https://images.oyoroomscdn.com/uploads/hotel_image/155753/medium/hknclpcqhiql.jpg"
        ],
        "price": "13000",
        "title": "Modern Apartment in Koramangala"
    },
    {
        "Uu_id": 2,
        "agentEmail": "amit.sharma@gmail.com",
        "agentName": "Amit Sharma",
        "agentPhone": "+91-9876543211",
        "amenities": [
            "WiFi",
            "Housekeeping",
            "Meals"
        ],
        "description": "A cozy and affordable PG accommodation in HSR Layout.",
        "location": "HSR Layout",
        "photos": [
            "https://images.oyoroomscdn.com/uploads/hotel_image/38353/medium/2b32bc48b6bb9925.jpg",
            "https://images.oyoroomscdn.com/uploads/hotel_image/38353/medium/4a2ae9d15f7ff65b.jpg",
            "https://images.oyoroomscdn.com/uploads/hotel_image/38353/medium/8b79b3f6bc94843a.jpg"
        ],
        "price": 8000,
        "title": "Cozy PG in HSR Layout"
    },
    {
        "Uu_id": 3,
        "agentEmail": "priya.singh@gmail.com",
        "agentName": "Priya Singh",
        "agentPhone": "+91-9876543212",
        "amenities": [
            "WiFi",
            "Swimming Pool",
            "Gym"
        ],
        "description": "A luxurious 4BHK villa with a private garden in Whitefield.",
        "location": "Whitefield",
        "photos": [
            "https://images.oyoroomscdn.com/uploads/hotel_image/110273/medium/1f7cf5eb36f16451.jpg",
            "https://images.oyoroomscdn.com/uploads/hotel_image/110273/medium/7f723ecff7adcd09.jpg",
            "https://images.oyoroomscdn.com/uploads/hotel_image/110273/medium/83322d6075340487.jpg"
        ],
        "price": "35050",
        "title": "Spacious Villa in Whitefield"
    }
];




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
      <div className="card">
        <div className="image-container">
          <img
            src={ele.photos[currentImageIndex]}
            alt={ele.title}
            className={`image ${isFading ? 'fade' : ''}`} // Adding fade class during transition
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
  return (
    <div className="featured-container">
      <h1 className="featured-span">Featured</h1>
      <h1 className="featured-title">Explore Our Most Popular Properties</h1>
      <div className="cards-container">
        {sampleData.map((ele) => (
          <FeaturedCard key={ele.Uu_id} ele={ele} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
