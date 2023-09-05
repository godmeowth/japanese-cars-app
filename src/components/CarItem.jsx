import React from "react";
import styles from "./CarItem.module.css";

const CarItem = ({ car }) => {
  let { make, model, year, price, imageUrl } = car;

  return (
    <div>
      <div className={styles.flexBoxer}>
        <img src={imageUrl} alt={`${make} ${model}`} width="320px" />
        <div className={styles.listingContent}>
          <h2>{`${make === "Mazda" ? (make = "Yebazda") : make} ${model}`}</h2>
          <p>{`Year: ${year}`}</p>
          <p>{`Price: $${price.toLocaleString("en-US")}`}</p>
        </div>
        {/* Add "Details" link to view the car details */}
      </div>
      <hr></hr>
    </div>
  );
};

export default CarItem;
