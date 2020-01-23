import React from "react";
import { dataURLToBlob } from "blob-util";

const RestaurantList = ({ restaurantNames }) => {
  return (
    <ul>
      {restaurantNames.map(restaurantName => (
        <li key={restaurantName}>{restaurantName}</li>
      ))}
    </ul>
  );
};

export default RestaurantList;
