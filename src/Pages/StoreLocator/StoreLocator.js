import React, { useState } from 'react';
import store from "../../Assets/Images/store.png";
import Map from "./Map";
import "./StoreLocator.scss";
import Search from "../../Components/SearchBar/SearchBar";
import StoreInfo from "./StoreInfo";

const StoreLocator = () => {
    const initialAccordionStates = [false, false, false, false]; // One state for each accordion
    const [accordionStates, setAccordionStates] = useState(initialAccordionStates);

    const toggleAccordion = (index) => {
        const newAccordionStates = [...initialAccordionStates];
        newAccordionStates[index] = !accordionStates[index];
        setAccordionStates(newAccordionStates);
    };
    const stores = [
        {

            place: 'Delhi',
            name: 'Elini Brand Outlet (M/s Sai Paridhaan) – Karol Bagh',
            address: 'Shop no- 114, VVIP style mall, raj nagar extenion, Ghaziabad- 201017',
            number: 'Phn : 2345678901',
            timings: 'Store Timings:10 am to 8 pm',
            email: 'Elinidelhi@gmail.com',
        },
        {
            place: 'Punjab',
            name: 'Elini Brand Outlet (M/s Sai Paridhaan) – Karol Bagh',
            address: 'Shop no- 114, VVIP style mall, raj nagar extenion, Ghaziabad- 201017',
            number: 'Phn : 2345678901',
            timings: 'Store Timings:10 am to 8 pm',
            email: 'Elinipunjab@gmail.com',
        },
        {
            place: 'Kerala',
            name: 'Elini Brand Outlet (M/s Sai Paridhaan) – Karol Bagh',
            address: 'Shop no- 114, VVIP style mall, raj nagar extenion, Ghaziabad- 201017',
            number: 'Phn : 2345678901',
            timings: 'Store Timings:10 am to 8 pm',
            email: 'Elinikerela@gmail.com',
        },
        {
            place: 'Uttar Pradesh',
            name: 'Elini Brand Outlet (M/s Sai Paridhaan) – Karol Bagh',
            address: 'Shop no- 114, VVIP style mall, raj nagar extenion, Ghaziabad- 201017',
            number: 'Phn : 2345678901',
            timings: 'Store Timings:10 am to 8 pm',
            email: 'Eliniuttarpradesh@gmail.com',
        },
    ];

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
            <div className="app contain">
                <div className="left-panel">
                    <h2 className='sec-head'>Our Store</h2>
                    <div className="top-bar">
                        <div className="search-bar">
                            <Search />
                        </div>
                    </div>
                    <div className="store-section">
                        {stores.map((store, index) => (
                            <StoreInfo
                                key={index}
                                place={store.place}
                                name={store.name}
                                address={store.address}
                                number={store.number}
                                timings={store.timings}
                                email={store.email}
                                isOpen={accordionStates[index]}
                                toggleAccordion={() => toggleAccordion(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="right-panel">
                    <Map />
                </div>
            </div>
        </div>

    )
}
export default StoreLocator;