import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home'

import './App.css'
import Properties from "./pages/Properties";
import SingleProperty from "./components/SingleProperty";
import Thankyou from "./pages/Thankyou";

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
      </Routes>
    </Router>
  );
};


export default App;  

