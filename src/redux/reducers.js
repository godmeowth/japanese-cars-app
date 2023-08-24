import {
    SET_CURRENT_CAR,
    SET_CARS_DATA,
    UPDATE_CURRENT_PAGE,
    FILTER_BY_ASCENDING_PRICE,
    FILTER_BY_DESCENDING_PRICE, CANCEL_FILTER
} from './actions';
import store from "./store";

const initialState = {
    currentCar: null,
    carsData: [],
    originalCarsData: [],
    currentPage: 1,
    itemsPerPage: 5,
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_CURRENT_CAR:
            return {
                ...state,
                currentCar: action.payload,
                originalCarsData: action.payload,
            };
        case SET_CARS_DATA:
            return {
                ...state,
                carsData: action.payload,
            };
        case FILTER_BY_ASCENDING_PRICE:
            return {
                ...state,
                carsData: state.carsData.slice().sort((a, b) => a.price - b.price),
            };
        case FILTER_BY_DESCENDING_PRICE:
            return {
                ...state,
                carsData: state.carsData.slice().sort((a, b) => b.price - a.price),
            };
        case CANCEL_FILTER:
            return {
                ...state,
                carsData: state.originalCarsData,
            };
        default:
            return state;
    }
};

export default carReducer;