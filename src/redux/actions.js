export const SET_CURRENT_CAR = 'SET_CURRENT_CAR';
export const SET_CARS_DATA = 'SET_CARS_DATA';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE'
export const FILTER_BY_ASCENDING_PRICE = "FILTER_BY_ASCENDING_PRICE";
export const FILTER_BY_DESCENDING_PRICE = "FILTER_BY_DESCENDING_PRICE";

export const filterByAscendingPrice = () => ({
    type: FILTER_BY_ASCENDING_PRICE,
});
export const filterByDescendingPrice = () => ({
    type: FILTER_BY_DESCENDING_PRICE,
});
export const setCurrentCar = (car) => ({
    type: SET_CURRENT_CAR,
    payload: car,
});

export const setCarsData = (cars) => ({
    type: SET_CARS_DATA,
    payload: cars,
});

export const updateCurrentPage = (page) => ({
    type: UPDATE_CURRENT_PAGE,
    payload: page,
});