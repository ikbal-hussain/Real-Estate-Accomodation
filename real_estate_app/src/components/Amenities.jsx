import React from "react";


const Amenities = ({ imgPath, amenityName }) => {
  return (
    <div className='amenityCard'>
      <div className='imgContainer'>
        <img src={imgPath} alt={amenityName} />
      </div>
      <div className='textContainer'>
        <h3>{amenityName}</h3>
      </div>
    </div>
  );
};

export default Amenities;
