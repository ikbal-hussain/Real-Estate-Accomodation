import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Thankyou.css'; // Create and link this CSS file

function Thankyou() {
  const navigate = useNavigate();

  return (
    <div className="thankyou-container">
      <div className="thankyou-message">
        <h1>🎉 Thank You for Your Purchase!</h1>
        <p>Your transaction was successful. We appreciate your trust in us and hope you enjoy your new property!</p>
        {/* <p>Transaction ID: <strong>#123456789</strong></p> */}

        <div className="thankyou-actions">
          <button onClick={() => navigate('/properties')} className="view-properties-btn">
            View More Properties
          </button>
          <button onClick={() => navigate('/')} className="go-dashboard-btn">
           Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
