import React from 'react';
import { connect } from 'react-redux';
import CarItem from './CarItem';
import Pagination from "../common/Pagination";


const CarList = ({ carsData, currentPage, itemsPerPage, updateCurrentPage }) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const carsToShow = carsData.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        updateCurrentPage(newPage); // Dispatch action to update current page
    };

    return (
        <div>
            {carsToShow.map((car) => (
                <CarItem key={car.id} car={car} />
            ))}

            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(carsData.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    carsData: state.carsData,
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
});

const mapDispatchToProps = (dispatch) => ({
    updateCurrentPage: (page) => dispatch({ type: 'UPDATE_CURRENT_PAGE', payload: page }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
