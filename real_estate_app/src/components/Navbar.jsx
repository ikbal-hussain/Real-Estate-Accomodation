import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice"; // Assuming you have a logout action

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth); // Accessing the authentication state
  
  //  useEffect(() =>{
  //   console.log("isAuthenticated:- ", isAuthenticated)
  //   console.log("currentUser:- ", user)
  //  }, [logout])
  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav>
      <div className="logo">
        <h2>Property</h2>
        <p>Pulse</p>
      </div>
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs">About</NavLink>
        </li>

       
        {isAuthenticated ? (
          <>
            <li>
              <NavLink to="/Properties">Properties</NavLink>
            </li>
            {user.role == "propertyOwner" && <li>
              <NavLink to="/YourProperties">Your Properties</NavLink>
            </li>}
            <li>
              {/* <button onClick={handleLogout} className="logout-btn">Logout</button> */}
              <NavLink to="/login" onClick={handleLogout} className="logout-btn">Logout</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
