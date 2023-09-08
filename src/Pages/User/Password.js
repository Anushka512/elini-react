import React, { Fragment, useState } from "react";
import "./Password.scss";
import SideBar from "./Sidebar";

const ProductList = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">Passwords</h1>
          <div className="profile-container">
            <div className="profile-items">
              <label htmlFor="name">Current Password:</label>
              <input type="password" id="password"
                placeholder="Enter your current password" />
            </div>
            <div className="profile-items">
              <label htmlFor="email">New password  (Min 8 char, Uppercase, Lowercase, Number & Special char.):</label>
              <input type="password"
                id="password"
                placeholder="Enter your new password"
                value={password}
                onChange={handlePasswordChange} />
            </div>
            <div className="profile-items">
              <label htmlFor="phone">Confirm new password:</label>
              <input type="password"
                id="confirmPassword"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange} />
            </div>
            <div className="profile-descr">
              <label htmlFor="descr">Reach out to us at elini@clothingbrand.com or call us at +90 9876543210</label>
            </div>
            <div className="profile-buttons">
              <button className="cancel-button">Cancel</button>
              <button className="save-button">Save</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
