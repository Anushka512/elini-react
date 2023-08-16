import React from "react";
import Home from "./Pages/Home/Home.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from "./Pages/Contact/Contact.js";
import ErrorPage from "./Pages/Error/ErrorPage.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Footer from "./Components/Footer/Footer.js";
import About from "./Pages/About/Aboutus";
import ProudctCardPrice from "./Components/ProductCardPrice/ProductCardPrice.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/productcard" element={<ProudctCardPrice/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;