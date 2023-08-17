import { SET_CURRENT_CAR, SET_CARS_DATA } from './actions';

const initialState = {
    currentCar: null,
    carsData: [],
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_CAR:
            return {
                ...state,
                currentCar: action.payload,
            };
        case SET_CARS_DATA:
            return {
                ...state,
                carsData: action.payload,
            };
        default:
            return state;
    }
};

export default carReducer;