import React from "react";
import Navbar from "./Navbar";
import Amenities from "./Amenities";



function Header() {
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="intro">
          <p>Looking for a property !</p>
          <h1>
            <span>Buy </span> Properties......
          </h1>
        </div>
      </div>
      
    </>
  );
}

export default Header;
