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
    {
        id: 3,
        make: 'Nissan',
        model: 'Sentra',
        year: 2019,
        price: 11000,
        imageUrl: 'car3.jpg',
    },
    {
        id: 4,
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        price: 15000,
        imageUrl: 'car4.jpg',
    },
    {
        id: 5,
        make: 'Ford',
        model: 'Focus',
        year: 2016,
        price: 8500,
        imageUrl: 'car5.jpg',
    },
    {
        id: 6,
        make: 'Chevrolet',
        model: 'Malibu',
        year: 2018,
        price: 12500,
        imageUrl: 'car6.jpg',
    },
    {
        id: 7,
        make: 'Hyundai',
        model: 'Elantra',
        year: 2017,
        price: 9500,
        imageUrl: 'car7.jpg',
    },
    {
        id: 8,
        make: 'Mazda',
        model: 'Mazda3',
        year: 2019,
        price: 11500,
        imageUrl: 'car8.jpg',
    },
    {
        id: 9,
        make: 'Kia',
        model: 'Forte',
        year: 2018,
        price: 10500,
        imageUrl: 'car9.jpg',
    },
    {
        id: 10,
        make: 'Subaru',
        model: 'Impreza',
        year: 2020,
        price: 15500,
        imageUrl: 'car10.jpg',
    },
    {
        id: 11,
        make: 'Volkswagen',
        model: 'Jetta',
        year: 2017,
        price: 10000,
        imageUrl: 'car11.jpg',
    },
    {
        id: 12,
        make: 'Audi',
        model: 'A3',
        year: 2018,
        price: 13000,
        imageUrl: 'car12.jpg',
    },
];

const store = createStore(carReducer);

store.dispatch(setCarsData(carsData));

export default store;