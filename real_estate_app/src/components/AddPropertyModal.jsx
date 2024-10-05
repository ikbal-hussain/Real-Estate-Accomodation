import React, { useState } from "react";
import "../styles/AddPropertyModal.css"; // Add styles for the wide modal
import { useDispatch, useSelector } from "react-redux";
import { addPropertyToUser } from "../redux/slices/authSlice";
import { addProperty } from "../redux/slices/propertySlice";



const availableAmenities = [
  "Pool",
  "Gym",
  "Parking",
  "WiFi",
  "Air Conditioning",
  "Heating",
  "Washer/Dryer",
  "Pet Friendly",
  "Furnished",
  "Garden",
];

function AddPropertyModal({ show, handleClose, handleSubmit }) {
  if (!show) return null;
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  // State to manage selected amenities and photos
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [photos, setPhotos] = useState(["", "", ""]); // Initialize with three empty strings

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prevSelected) => {
      if (prevSelected.includes(amenity)) {
        return prevSelected.filter((item) => item !== amenity);
      } else {
        return [...prevSelected, amenity];
      }
    });
  };

  const handlePhotoChange = (index, value) => {
    const newPhotos = [...photos];
    newPhotos[index] = value;
    setPhotos(newPhotos);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const propertyData = {
      Uu_id: Math.floor(Math.random() * 1000000), // Random unique whole number
      title: formData.get("title"),
      location: formData.get("location"),
      price: formData.get("price"),
      description: formData.get("description"),
      amenities: selectedAmenities,
      photos: photos.filter((photo) => photo.trim() !== ""), // Filter out empty URLs
      agentEmail: user.email,
      agentName: user.name,
      agentPhone: user.phone

    };
    console.log("propertyData:-- ", propertyData);
    dispatch(addProperty(propertyData))
    dispatch(addPropertyToUser({ userId: user.id, propertyData }));

    handleSubmit(propertyData); // Pass property data to the parent
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add New Property</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-grid">
            <input
              type="text"
              name="title"
              placeholder="Property Title"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
            />
            <input type="number" name="price" placeholder="Price" required />
            <textarea
              name="description"
              placeholder="Description"
              required
            ></textarea>
          </div>

          <div>
            <h4>Select Amenities:</h4>
            <div className="amenities-list">
              {availableAmenities.map((amenity) => (
                <label key={amenity} className="amenity-item">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4>Photos (Enter URLs):</h4>
            {photos.map((photo, index) => (
              <input
                key={index}
                type="text"
                value={photo}
                placeholder={`Photo URL ${index + 1}`}
                onChange={(e) => handlePhotoChange(index, e.target.value)}
              />
            ))}
          </div>

          <button type="submit">Submit</button>
          <button type="button" className="closeButton" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPropertyModal;
