import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../common/Pagination";
import { setCurrentCar } from "../redux/actions";
import CarItem from "./CarItem";
import styles from "./CarItem.module.css";

const CarList = ({ carsData, currentPage, itemsPerPage, updateCurrentPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const carsToShow = carsData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    updateCurrentPage(newPage); // Dispatch action to update current page
  };

  const dispatch = useDispatch();

  return (
    <div>
      {carsToShow.map((car) => (
        <Link to={`/cars/${car.id}`} className={styles.listing}>
          <CarItem key={car.id} car={car} onClick={dispatch(setCurrentCar(car))} />
        </Link>
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
  updateCurrentPage: (page) => dispatch({ type: "UPDATE_CURRENT_PAGE", payload: page }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
