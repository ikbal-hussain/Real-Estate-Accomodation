import React from "react";

// Sample data
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
    return (
        <div style={cardStyle}>
            <img src={ele.photos[0]} alt={ele.title} style={imageStyle} />
            <div style={textContainerStyle}>
                <h2 style={titleStyle}>{ele.title}</h2>
                <p style={priceStyle}>Price: ₹{ele.price}</p>
                <p style={descriptionStyle}>{ele.description}</p>
            </div>
        </div>
    );
};


const Featured = () => {
    return (
        <div style={featuredContainerStyle}>
            <h1 style={featuredSpanStyle}>Featured</h1>
            <h1 style={featuredTitleStyle}>Explore Our Most Popular Properties</h1>
            <div style={cardsContainerStyle}>
                {sampleData.map((ele) => (
                    <FeaturedCard key={ele.Uu_id} ele={ele} />
                ))}
            </div>
        </div>
    );
};


const featuredContainerStyle = {
    padding: '20px',
    textAlign: 'center',
};

const featuredSpanStyle = {
    // fontSize: '1.2rem',
    color: '#236c7e',
    fontSize: '2rem',
};

const featuredTitleStyle = {
    fontSize: '2rem',
    margin: '10px 0 20px',
    color: '#236c7e',
    // fontWeight: "900"
};

const cardsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '90px',
    flexWrap: 'wrap',
};

const cardStyle = {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    width: '360px',
    cursor: 'pointer',
    height: "430px"
};

const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
};

const textContainerStyle = {
    padding: '10px',
};

const titleStyle = {
    fontSize: '1.5rem',
    margin: '5px 0',
};

const priceStyle = {
    fontSize: '1.25rem',
    // color: '#888',
    fontWeight: "bold",
    color: "#236c7e", 

    
};

const descriptionStyle = {
    fontSize: '0.9rem',
    // color: '#666',
};


export default Featured;
