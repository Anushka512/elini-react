import React, { Fragment } from "react";
import SideBar from "./Sidebar";
import GiftCard from './GiftCard';
import Coupon from './Coupon';
import './GiftCardPage.scss';

function HeaderOffer() {

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">Gift Cards / Coupons</h1>
          <div className="gift-container">
            <div className="gift-cards">
              <h2>Gift Cards</h2>
              <GiftCard />
              <GiftCard />
<<<<<<< Updated upstream
              <GiftCard />
=======
              {/* Add more GiftCard components as needed */}
>>>>>>> Stashed changes
            </div>
            <div className="coupons">
              <h2>Coupons</h2>
              <Coupon />
              <Coupon />
<<<<<<< Updated upstream
              <Coupon />
=======
              {/* Add more Coupon components as needed */}
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HeaderOffer;
