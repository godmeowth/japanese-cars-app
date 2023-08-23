import React from 'react';
import classes from "./Pagination.module.css";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <ul className={classes.pagination}>
            {pageNumbers.map((page) => (
                <li key={page} className={currentPage === page ? classes.active : ''}>
                    <button onClick={() => onPageChange(page)}>{page}</button>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
