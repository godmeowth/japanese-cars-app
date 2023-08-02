import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import carReducer from './reducers';
import { setCarsData } from './actions';
import {scrapeOtomoto} from "../scrapeOtomoto";

const storeParse = createStore(carReducer, applyMiddleware(thunk));

scrapeOtomoto().then((carsData) => {
    storeParse.dispatch(setCarsData(carsData));
});

export default storeParse;
