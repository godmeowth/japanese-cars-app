import React from 'react';

const CarItem = ({ car }) => {
    const { make, model, year, price, imageUrl } = car;

    return (
        <div>
            <img src={imageUrl} alt={`${make} ${model}`} />
            <h2>{`${make} ${model}`}</h2>
            <p>{`Year: ${year}`}</p>
            <p>{`Price: $${price}`}</p>
            {/* Add "Details" link to view the car details */}
            <hr></hr>
        </div>
    );
};

export default CarItem;