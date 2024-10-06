import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home'

import './App.css'
import Properties from "./pages/Properties";
import SingleProperty from "./components/SingleProperty";
import Thankyou from "./pages/Thankyou";
import YourProperties from "./pages/YourProperties";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/properties/:id" element={<SingleProperty />} />
        <Route path="/Thankyou" element={<Thankyou />} />
        <Route path="/YourProperties" element={<YourProperties />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};


export default App;  

