import React from "react";
import Home from "./Pages/Home/Home.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
import './App.css';
import Contact from "./Pages/Contact/Contact.js";
import ErrorPage from "./Pages/Error/ErrorPage.js";
import Navbar from "./Components/Navbar/Navbar.js";
import ProudctCardPrice from "./Components/ProductCardPrice/ProductCardPrice.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/productcard" element={<ProudctCardPrice/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
