import { legacy_createStore } from "redux";
import { setCarsData } from "./actions";
import carReducer from "./reducers";

const imageUrl = "https://cdn.carbuzz.com/gallery-images/840x560/207000/500/207564.jpg";

const carsData = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    price: 12000,
    imageUrl,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2017,
    price: 10000,
    imageUrl,
  },
  {
    id: 3,
    make: "Nissan",
    model: "Sentra",
    year: 2019,
    price: 11000,
    imageUrl,
  },
  {
    id: 4,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    price: 15000,
    imageUrl,
  },
  {
    id: 5,
    make: "Mazda",
    model: "Mazda3",
    year: 2019,
    price: 11500,
    imageUrl,
  },
  {
    id: 6,
    make: "Subaru",
    model: "Impreza",
    year: 2020,
    price: 15500,
    imageUrl,
  },
  {
    id: 7,
    make: "Nissan",
    model: "Altima",
    year: 2018,
    price: 12500,
    imageUrl,
  },
  {
    id: 8,
    make: "Toyota",
    model: "RAV4",
    year: 2021,
    price: 18500,
    imageUrl,
  },
  {
    id: 9,
    make: "Honda",
    model: "Accord",
    year: 2019,
    price: 13500,
    imageUrl,
  },
  {
    id: 10,
    make: "Mazda",
    model: "CX-5",
    year: 2020,
    price: 16000,
    imageUrl,
  },
  {
    id: 11,
    make: "Subaru",
    model: "Forester",
    year: 2019,
    price: 17500,
    imageUrl,
  },
  {
    id: 12,
    make: "Nissan",
    model: "Maxima",
    year: 2022,
    price: 20500,
    imageUrl,
  },
];

const store = legacy_createStore(carReducer);

store.dispatch(setCarsData(carsData));

export default store;
