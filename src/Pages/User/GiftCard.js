import React from 'react';
import './GiftCard.scss';
import Giftcard from "../../Assets/Images/giftcard.png";

const GiftCard = () => {
  return (
    <div className="gift-card">
      <img src={Giftcard} alt="Gift Card" />
      <p>Gift Card Value: $50</p>
      <button>Redeem</button>
    </div>
  );
};

export default GiftCard;
