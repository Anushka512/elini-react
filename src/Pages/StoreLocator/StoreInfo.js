import React from 'react';
import './StoreInfo.scss';


const StoreInfo = ({ place, name, address, number, timings, email, isOpen, toggleAccordion }) => {

    const handleEmailClick = () => {
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className={`store-info ${isOpen ? 'open' : ''}`}>
            <div className="header" onClick={toggleAccordion}>
                <div className="store-place">{place}</div>
                <div className="toggle-button">{isOpen ? '-' : '+'}</div>
            </div>
            {isOpen && (
                <div className="details">
                    <div className="store-name">{name}</div>
                    <div className="store-address">{address}</div>
                    <div className="store-number">{number}</div>
                    <div className="store-timings">{timings}</div>
                    <div className='direction'>
                        <div onClick={handleEmailClick} className="store-email" >{email}</div>
                        <button className="get-directions-button">Get Directions</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StoreInfo;
