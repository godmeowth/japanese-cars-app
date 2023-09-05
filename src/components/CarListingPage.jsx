import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentCar } from "../redux/actions";
import styles from "./CarListingPage.module.css";

const CarListingPage = () => {
  let { carId } = useParams();
  let params = Number(carId);

  const dispatch = useDispatch();

  const car = useSelector((state) => state.currentCar);

  useEffect(() => {
    dispatch(setCurrentCar(params));
  }, []);

  if (!car) {
    return <div>Loading...</div>;
  }

  const imageUrl =
    "https://cdn.images.express.co.uk/img/dynamic/24/590x/secondary/JEREMY-CLARKSON-porsche-top-gear-3200864.jpg?r=1628975199223";

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <img src={imageUrl} alt={`${car.make} ${car.model}`} width="620px" />
        <div className={styles.container}>
          <h2>{`${car.make === "Mazda" ? (car.make = "Yebazda") : car.make} ${car.model}`}</h2>
          <p>{`Year: ${car.year}`}</p>
          <p>{`Price: $${car.price.toLocaleString("en-US")}`}</p>

          {/* Otomoto link */}
          <a
            href={`https://www.otomoto.pl/osobowe/${car.make.toLowerCase()}/${car.model.toLowerCase()}/od-${
              car.year
            }?search%5Bfilter_float_year%3Ato%5D=${car.year}`}
            target="_blank"
            rel="noreferrer"
          >
            View Otomoto
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CarListingPage;
