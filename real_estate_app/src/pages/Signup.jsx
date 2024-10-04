import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "../redux/slices/authSlice"; // Update path as needed
import '../styles/auth.css'; // Import your CSS file
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // State for password
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState(""); // State for role
  const error = useSelector((state) => state.auth.error); // Access error state from Redux
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(clearError()); // Clear previous error
    console.log(email, password, phone, location, name, role);
    const res = await dispatch(registerUser({ email, password, phone, location, name, role })).unwrap();
    console.log("res", res);
    if (res.id) navigate('/login');
  };

  return (
    <>
    <Navbar />
   
    <form className="signup-form" onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Name" // Name input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password" // Password input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <select
        value={role} // Select for role
        onChange={(e) => setRole(e.target.value)}
        required
      >
        <option value="" disabled>Select Role</option> {/* Default disabled option */}
        <option value="propertyOwner">Property Owner</option>
        <option value="tenant">Tenant</option>
      </select>
      {error && <p>{error}</p>}
      <button type="submit">Sign Up</button>
    </form>

    </>
  );
};

export default Signup;
