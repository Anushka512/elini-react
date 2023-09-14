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
<<<<<<< Updated upstream
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
=======
import Admin from "./Pages/Admin/Dashboard/Dashboard.js";
import ProductList from "./Pages/Admin/ProductList/ProductList.js";
import CreateProduct from "./Pages/Admin/CreateProduct/CreateProduct.js";
import CreateCategory from "./Pages/Admin/CreateCategory/CreateCategory.js";
import Categories from "./Pages/Admin/Categories/Categories.js";
import UpdateCategory from "./Pages/Admin/UpdateCategory/UpdateCategory.js";
import UpdateProduct from "./Pages/Admin/UpdateProduct/UpdateProduct.js";
import UserList from "./Pages/Admin/UserList/UserList.js";
import Pincodes from "./Pages/Admin/Pincodes/Pincodes.js";
import CreatePincode from "./Pages/Admin/CreatePincode/CreatePincode.js";
import HeaderOffer from "./Pages/Admin/HeaderOffer/HeaderOffer.js";
import CouponList from "./Pages/Admin/CouponList/CouponList.js";
import CreateCoupon from "./Pages/Admin/CreateCoupon/CreateCoupon.js";
import Orders from "./Pages/Admin/Orders/Orders.js";
import Blogs from "./Pages/Admin/Blog/Blog.js";
import UpdateBlog from "./Pages/Admin/UpdateBlog/UpdateBlog.js";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopnow" element={<Shop />} />
        <Route path="/productdetails" element={<ProductDetails />} />
=======

      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/products" element={<ProductList />} />
      <Route path="/admin/product/create" element={<CreateProduct />} />
      <Route path="/admin/product/:id" element={<UpdateProduct />} />

      <Route path="/admin/categories/create" element={<CreateCategory />} />
      <Route path="/admin/categories" element={<Categories />} />
      <Route path="/admin/category/:id" element={<UpdateCategory />} />

      <Route path="/admin/users" element={<UserList />} />

      <Route path="/admin/pincodes" element={<Pincodes />} />
      <Route path="/admin/pincodes/create" element={<CreatePincode />} />

      <Route path="/admin/header" element={<HeaderOffer />} />
      <Route path="/admin/coupons" element={<CouponList />} />
      <Route path="/admin/coupon/create" element={<CreateCoupon />} />
      <Route path="/admin/orders" element={<Orders />} />

      <Route path="/admin/blogs" element={<Blogs />} />
      <Route path="/admin/blog/:id" element={<UpdateBlog />} />

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shopnow" element={<Shop />} />
        {/* <Route path="/productdetails" element={<ProductDetails />} /> */}
>>>>>>> Stashed changes
        <Route path="/about" element={<About />} />
        <Route path="/ethnicwear" element={<Ethnic />} />
        <Route path="/storelocator" element={<StoreLocator />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/productcard" element={<ProudctCardPrice />} />
<<<<<<< Updated upstream
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
=======

>>>>>>> Stashed changes
      </Routes>
      <Footer />
    </div>
  );
}

export default App;