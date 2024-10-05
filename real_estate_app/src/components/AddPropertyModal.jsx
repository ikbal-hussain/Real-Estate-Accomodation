import React, { useState } from "react";
import "../styles/AddPropertyModal.css"; // Add styles for the wide modal
import { useDispatch, useSelector } from "react-redux";
import { addPropertyToUser } from "../redux/slices/authSlice";
import { addProperty, fetchProperties } from "../redux/slices/propertySlice"; // Import fetchProperties action to update the properties list

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
  const dispatch = useDispatch();

  // State to manage selected amenities and photos
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [photos, setPhotos] = useState(["", "", ""]); // Initialize with three empty strings
  const [loading, setLoading] = useState(false); // Add loading state to show the submission progress

  // Handle amenity selection
  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prevSelected) => {
      return prevSelected.includes(amenity)
        ? prevSelected.filter((item) => item !== amenity)
        : [...prevSelected, amenity];
    });
  };

  // Handle photo URL changes
  const handlePhotoChange = (index, value) => {
    const newPhotos = [...photos];
    newPhotos[index] = value;
    setPhotos(newPhotos);
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form submission starts

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
      agentPhone: user.phone,
    };

    try {
      // Dispatch addProperty action to add the new property
      await dispatch(addProperty(propertyData));

      // Dispatch addPropertyToUser to link the property with the user
      await dispatch(addPropertyToUser({ userId: user.id, propertyData }));

      // Fetch the updated list of properties (to immediately show the new property)
      await dispatch(fetchProperties()); // Re-fetch the updated property list

      setLoading(false); // Set loading to false when the submission is done
      handleSubmit(propertyData); // Call the parent handleSubmit function if needed
      handleClose(); // Close the modal after the form submission
    } catch (error) {
      console.error("Failed to add property:", error);
      setLoading(false); // Stop loading if an error occurs
    }
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

          {/* Disable submit button when loading */}
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button type="button" className="closeButton" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPropertyModal;
