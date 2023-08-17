import React from 'react';
import { connect } from 'react-redux';
import CarItem from './CarItem';

const CarList = ({ carsData }) => {
    return (
        <div>
            {carsData.map((car) => (
                <CarItem key={car.id} car={car} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    carsData: state.carsData,
});

export default connect(mapStateToProps)(CarList);