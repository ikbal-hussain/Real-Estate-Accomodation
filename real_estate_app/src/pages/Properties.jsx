import React, { useState, useEffect } from "react";
import "../styles/Properties.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProperties } from "../redux/slices/propertySlice";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const PropertyCard = ({ ele }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/properties/${ele.Uu_id}`);
  };

  const nextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ele.photos.length);
      setIsFading(false);
    }, 400);
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

  return (
    <div className="property-card" onClick={handleCardClick}>
      <div className="image-container">
        <img
          src={ele.photos[currentImageIndex]}
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
        <h2 className="property-title">{ele.title}</h2>
        <p className="property-price">Price: ₹{ele.price}</p>
        {/* <p className="description">{ele.description}</p> */}
        {/* <p className="amenities-title">Amenities:</p> */}
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

const Properties = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { properties, loading, error } = useSelector(
    (state) => state.properties
  );
  console.log("properties: ", properties)
  const { isAuthenticated, user } = useSelector((state) => state.auth); 
  const [searchTerm, setSearchTerm] = useState("");
  const [bhkFilter, setBhkFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleBhkFilter = (e) => {
    setBhkFilter(e.target.value);
  };

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const handleAISuggetionsClick = () =>{
       navigate('/aisuggestions')
  }

  const filteredProperties = properties
    .filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm) ||
        property.description.toLowerCase().includes(searchTerm);

      const matchesBhkFilter =
        bhkFilter === "" || property.title.includes(bhkFilter);

      return matchesSearch && matchesBhkFilter;
    })
    .sort((a, b) => {
      if (sortOrder === "low-to-high") {
        return a.price - b.price;
      } else if (sortOrder === "high-to-low") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  return (
    <>
      <Navbar />
      <div className="properties-container">
        <div className="topmost-bar"> 
           <span className="properties-title">Explore Properties</span>
        <span><button onClick={handleAISuggetionsClick}>AI Suggestions</button></span>
        </div>
       

        <div className="filters-container">
          <input
            type="text"
            placeholder="Search by title, location, or description"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />

          <select
            value={bhkFilter}
            onChange={handleBhkFilter}
            className="bhk-filter"
          >
            <option value="">All</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="4BHK">4BHK</option>
          </select>

          <select
            value={sortOrder}
            onChange={handleSortOrder}
            className="sort-order"
          >
            <option value="">Sort by Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        <div className="properties-cards-container">
          {isAuthenticated && loading ? (
            <div className="loading-container">
              <ClipLoader color="#236c7d" loading={loading} size={110} />
            </div>
          ) : error ? (
            <p>Error loading properties: {error}</p>
          ) : isAuthenticated && filteredProperties.length > 0 ? (
            filteredProperties.map((ele) => (
              <PropertyCard key={ele.Uu_id} ele={ele} />
            ))
          ) : 
            isAuthenticated? (<h1>No properties found.</h1>)
              : <h1>Login to view Properties</h1>
              }
        </div>
      </div>
    </>
  );
};

export default Properties;
