import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Aisuggestions.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { filter } from "framer-motion/client";

function AiSuggestions() {
  const { properties, loading, error } = useSelector((state) => state.properties);
  const [userInput, setUserInput] = useState("");
  const [aisuggestions, setAisuggestions] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Helper function to extract keywords
  const extractKeywords = (input) => {
    const keywords = {
      price: input.match(/\d+k|\d+ lacs|\d+ crores/i),
      bhk: input.match(/\d+ bhk/i),
      location: input.match(/in [a-zA-Z ]+/i),
      owner: input.match(/owner [a-zA-Z ]+/i),
      amenities: input.match(/(gym|parking|pool|garden)/i),
    };
    return keywords;
  };

  // Function to filter properties
  const filterProperties = (keywords) => {
  return properties.filter((property) => {
    const price = property.price || "";
    const bhk = property.bhk || "";
    const location = property.location || "";
    const amenities = property.amenities || [];

    const matchesPrice = keywords.price ? price.includes(keywords.price[0]) : true;
    const matchesBHK = keywords.bhk ? bhk.includes(keywords.bhk[0]) : true;
    const matchesLocation = keywords.location ? location.includes(keywords.location[0]) : true;
    const matchesAmenities = keywords.amenities ? amenities.includes(keywords.amenities[0]) : true;

    return matchesPrice && matchesBHK && matchesLocation && matchesAmenities;
  });
};


  async function generateAiSuggestions() {
    try {
      console.log("Generating AI-based listings for..", properties);
      
      // Extract keywords from user input
      const keywords = extractKeywords(userInput);
      console.log("Extracted keywords:", keywords);
      
      // Filter properties based on keywords
      const filtered = filterProperties(keywords);
      setFilteredProperties(filtered);
      
      // Generate AI suggestions using Gemini API
      const prompt = ``;

      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyARWErCJLtu2XQpVCLTi6YV0EeYwSVTXWI",
        method: "post",
        data: { contents: [{ parts: [{ text: prompt }] }] },
      });

      const res = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      console.log("AI Suggestions generated:", res);
      setAisuggestions(res);
    } catch (error) {
      console.error("Error generating suggestions:", error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="ai-main-container">
        <h3>Get AI assistance</h3>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Type your query"
        />
        <button onClick={generateAiSuggestions}>Submit</button>

        {/* Show AI Suggestions */}
        <div className="ai-suggestions">
          <h4>AI Suggestions:</h4>
          <p>{aisuggestions}</p>
        </div>

        {/* Display Filtered Properties */}
        <div className="filtered-properties">
          <h4>Filtered Properties:</h4>
          <div className="property-cards">
            {filteredProperties.map((property, index) => (
              <div key={index} className="property-card">
                <h5>{property.title}</h5>
                <p>Price: {property.price}</p>
                <p>BHK: {property.bhk}</p>
                <p>Location: {property.location}</p>
                <p>Amenities: {property.amenities.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AiSuggestions;
