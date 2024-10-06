import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError } from "../redux/slices/authSlice"; // Update path as needed
import '../styles/auth.css'; // Import your CSS file
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // State for password
  const error = useSelector((state) => state.auth.error); // Access error state from Redux
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(clearError()); // Clear any previous error
    const res = await dispatch(loginUser({ email, password })).unwrap();
    if (res?.id) {
      navigate('/'); // Redirect to home on successful login
    }
  };

  return (
    <>
    <Navbar />
   
    <form className="login-form" onSubmit={handleLogin}>
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
      {error && <p>{error}</p>} {/* Display any error */}
      <button type="submit">Login</button>
    </form>
    </>
  );
};

export default Login;
