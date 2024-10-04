import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home'

import './App.css'
import Properties from "./pages/Properties";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<Properties />} />
      </Routes>
    </Router>
  );
};


export default App;  

