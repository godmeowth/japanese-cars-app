import {
  CANCEL_FILTER,
  FILTER_BY_ASCENDING_PRICE,
  FILTER_BY_DESCENDING_PRICE,
  SET_CARS_DATA,
  SET_CURRENT_CAR,
  UPDATE_CURRENT_PAGE,
} from "./actions";

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
        currentCar: state.carsData[action.payload - 1],
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
