import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from '../redux/slices/propertySlice'; // Import your Redux action
import Navbar from './Navbar';
import '../styles/SingleProperty.css'

const SingleProperty = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch properties and loading/error states from Redux
  const { properties, loading, error } = useSelector((state) => state.properties);

  useEffect(() => {
    if (properties.length === 0) {
      dispatch(fetchProperties()); // Fetch properties if not already loaded
    }
  }, [dispatch, properties.length]);
  


  const handleBuyProperty = () =>{
       window.location.href = 'https://rzp.io/rzp/propertypulse'
  }

  


  const property = properties.find((prop) => prop.Uu_id == id);

  if (loading) {
    return <div className="loading-spinner">Loading property details...</div>;
  }

  if (error) {
    return <div className="error-message">Error loading property: {error}</div>;
  }

  if (!property) {
    return <div className="error-message">Property not found.</div>;
  }

  return (

    <>
    <Navbar />
    
    <div className="single-property-container">
      <div className="property-header">
        <h1>{property.title}</h1>
        <p className="property-location">{property.location}</p>
      </div>
      <div className="property-main-content">
        <div className="property-images">
          {property.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Property ${index + 1}`} />
          ))}
        </div>
        <div className="property-details">
          <h3>Property Details</h3>
          <p className='property-price'><strong>Price:</strong> ₹{property.price}</p>
          <p><strong>Description:</strong> {property.description}</p>
          {/* <p><strong>Size:</strong> {property.size} sq ft</p> */}
          {/* <p><strong>Bedrooms:</strong> {property.bedrooms}</p> */}
          {/* <p><strong>Bathrooms:</strong> {property.bathrooms}</p> */}
          <h3>Amenities:</h3>
          <ul>
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="property-additional-info">
        {/* <h3>Nearby Facilities</h3> */}
        {/* <p>{property.nearbyFacilities}</p> */}
        <h3>Agent Details</h3>
        <p><strong>Name:</strong> {property.agentName}</p>
        <p><strong>Contact:</strong> {property.agentEmail}</p>
        <p><strong>Contact:</strong> {property.agentPhone}</p>
      </div>
      <button className='buyButton' onClick={handleBuyProperty}>Buy Property</button>
    </div>
    </>
  );
};

export default SingleProperty;
