import React from "react";
import Home from "./Home.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
import './App.css';
import Contact from "./Contact";
import ErrorPage from "./ErrorPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
