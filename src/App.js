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
import Ethnic from "./Pages/EthnicWear/EthnicWear";
import StoreLocator from "./Pages/StoreLocator/StoreLocator";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/ethnicwear" element={<Ethnic />} />
        <Route path="/storelocator" element={<StoreLocator />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/productcard" element={<ProudctCardPrice />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;