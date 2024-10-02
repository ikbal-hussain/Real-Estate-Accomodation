import React from "react";






const Amenities = ({ imgPath, amenityName }) => {


 



  return (
    <>
    <div className='amenityCard'>
      <div className='imgContainer'>
        <img src={imgPath} alt={amenityName} />
      </div>
      <div className='textContainer'>
        <h3>{amenityName}</h3>
      </div>



    </div>
  <section className='amenitiesSection'>
  <div className='amenitiesTextContainer'>
    <h3>Our Amenities</h3>
    <p>Building Amenities</p>
  </div>

  <div className='amenitiesCardContainer'>
    {amenitiesData.map((amenity, index) => (
      <Amenities
        key={index}
        imgPath={amenity.imgPath}
        amenityName={amenity.amenityName}
      />
    ))}
  </div>
</section>
    </>
    
  );
};

export default Amenities;
