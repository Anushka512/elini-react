import React from 'react';
import './GiftCard.scss';

const GiftCard = () => {
  return (
    <div className="gift-card">
      <img src="gift-card-image.jpg" alt="Gift Card" />
      <p>Gift Card Value: $50</p>
      <button>Redeem</button>
    </div>
  );
};

export default GiftCard;
