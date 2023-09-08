import React from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.scss";

const Dashboard = () => {
  
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="productListContainer">
          <h1 id="productListHeading">User Profile</h1>
          <div className="profile-container">
            <div className="profile-item">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="profile-item">
              <label htmlFor="email">Email ID:</label>
              <input type="email" id="email" placeholder="johndoe@example.com" />
            </div>
            <div className="profile-item">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" placeholder="123-456-7890" />
              <button className="verify-button">Verify</button>
            </div>
            <div className="profile-description">
              <label htmlFor="descr">Wish to change your email?</label>
            </div>
            <div className="profile-description">
              <label htmlFor="descr">Reach out to us at elini@clothingbrand.com or call us at +90 9876543210</label>
            </div>
            <div className="profile-checkbox">
              <label>
                <input type="checkbox" /> Subscribe to newsletter
              </label>
            </div>
            <div className="profile-buttons">
              <button className="cancel-button">Cancel</button>
              <button className="save-button">Save</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
