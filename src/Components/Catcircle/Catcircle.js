import React from 'react';
import "./Catcircle.scss";

const catcircles = [
    {
        id: 1,
        category: 'Kurta',
        bgimage: require('../../Assets/Images/image-box1.png'),
    },
    {
        id: 2,
        category: 'Shrugs',
        bgimage: require('../../Assets/Images/image-box2.png'),
    },
    {
        id: 3,
        category: 'Bottoms',
        bgimage: require('../../Assets/Images/image-box3.png'),
    },
    {
        id: 4,
        category: 'Sets',
        bgimage: require('../../Assets/Images/image-box2.png'),
    },
    // Add more products as needed
];

export default function Catcircle() {
    return (
        <>
            {catcircles.map(catcircle => (
                <div className='cat-circle' key={catcircle.id}>
                    <img src={catcircle.bgimage} className='cr' alt={catcircle.category} />
                    <p>{catcircle.category}</p>
                </div>
            ))}

        </>
    )
}
