import React from 'react';
import './Coupon.scss';
import coupon from "../../Assets/Images/coupon.png";

const Coupon = () => {
  return (
    <div className="coupon">
      <img src={coupon} alt="Gift Card" />
      <h4>Get 20% Off</h4>
      <p>Use code: COUPON20</p>
      <button>Apply</button>
    </div>
  );
};

export default Coupon;
