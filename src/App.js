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
import Shop from "./Pages/Shop Now/ShopNow.js";
import Signup from "./Pages/Signup/Signup";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.js";
import User from "./Pages/User/Dashboard.js";
import Password from "./Pages/User/Password.js";
import Pincodes from "./Pages/User/MyOrders.js";
import Address from "./Pages/User/AddressBook.js";
import Gifts from "./Pages/User/GiftCardpage.js";
import Checkout from "./Pages/Checkout/CheckoutPage.js";
import Login from "./Pages/Login/Login.js";
import Blog from "./Pages/Blog/Blog";
import Sitemap from "./Pages/SiteMap/Sitemap";
import FAQ from "./Pages/FAQ/Faq";
import Privacy from "./Pages/Privacy/Privacy";
import TD from "./Pages/Terms/Terms.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopnow" element={<Shop />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/ethnicwear" element={<Ethnic />} />
        <Route path="/storelocator" element={<StoreLocator />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/productcard" element={<ProudctCardPrice />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/password" element={<Password />} />
        <Route path="/user/orders" element={<Pincodes />} />
        <Route path="/user/giftcards" element={<Gifts />} />
        <Route path="/user/address" element={<Address />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/terms&conditions" element={<TD />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;