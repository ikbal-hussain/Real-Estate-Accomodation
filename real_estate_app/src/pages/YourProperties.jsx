import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AddPropertyModal from '../components/AddPropertyModal';
import '../styles/YourProperties.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from '../redux/slices/propertySlice'; // Import your fetchProperties action
// import { deletePropertyFromUser } from '../redux/slices/authSlice';


function YourProperties() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  let yourProperties = useSelector((state) => state.properties.properties);
  // console.log("yourProperties:-- ", yourProperties);
  // console.log("user:-- ", user, "isAuthenticated", isAuthenticated);
  // yourProperties = yourProperties.filter((ele) => ele.agentEmail == user.email);
  yourProperties = user.properties
  console.log("yourProperties:- ", yourProperties)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProperties()); // Fetch properties on component mount
  }, [dispatch, showModal ]);

  const handleAddProperty = () => {
    setShowModal(true);
  };

  //   const handleDeleteProperty = (propertyId) => {
  //   if (window.confirm("Are you sure you want to delete this property?")) {

  //     console.log("deleting propertyID: ", propertyId, "of user: ", user)
  //     dispatch(deletePropertyFromUser({ userId: user.id, propertyId }));
  //   }
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePropertySubmit = (propertyData) => {
    console.log('Property added:', propertyData);
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className='your-props-container'>
        <button className='add-props-button' onClick={handleAddProperty}>Add Property</button>
      </div>
      
      <div className='props-list'>
        <h2>Your Added Properties</h2>
        <div className='props-cards'>
          {yourProperties.map((property) => (
            <div className='prop-card' key={property.Uu_id}>
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>Price: ₹{property.price}</p>
              <p>{property.description}</p>
              <img src={property.photos[0]} alt={property.title} className='prop-image' />
              <div className='prop-amenities'>
                {property.amenities.map((amenity, index) => (
                  <span className='prop-amenity-item' key={index}>{amenity}</span>
                ))}
              </div>
               {/* <button onClick={() => handleDeleteProperty(property.Uu_id)} className='delete-button'>Delete</button>  */}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Adding Property */}
      <AddPropertyModal 
        show={showModal} 
        handleClose={handleCloseModal} 
        handleSubmit={handlePropertySubmit} 
      />
    </>
  );
}

export default YourProperties;
