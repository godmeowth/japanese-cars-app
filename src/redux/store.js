import { createStore } from 'redux';
import carReducer from './reducers';
import { setCarsData } from './actions';

const carsData = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Corolla',
        year: 2018,
        price: 12000,
        imageUrl: 'car1.jpg',
    },
    {
        id: 2,
        make: 'Honda',
        model: 'Civic',
        year: 2017,
        price: 10000,
        imageUrl: 'car2.jpg',
    },
];

const store = createStore(carReducer);

store.dispatch(setCarsData(carsData));

export default store;