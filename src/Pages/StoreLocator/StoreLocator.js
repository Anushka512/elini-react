import React from 'react';
import store from "../../Assets/Images/store.png";

export default function StoreLocator() {
    return (
        <div className='storelocator'>
            <div className="banner">
                <div className=" hero__container">
                    <img src={store} alt="HERO__IMG" />
                </div>
            </div>
            <div className='ch-elini contain contain-bg'>
                <h2 className='sec-head sec-head-ul'>
                    Store Locator
                </h2>
            </div>
        </div>

    )
}
