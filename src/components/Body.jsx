import React, { useState } from "react";
import mockData from "../mock/data";
import Card from "./Card";

const Body = () => {
  const [restaurantData, setListOfRestaurant] = useState(mockData);

  const handleClick = () => {
    const filterData = mockData.filter((res) => res.rating > 4);
    setListOfRestaurant(filterData);
    console.log(filterData);
  };

  return (
    <div>
      <button onClick={handleClick} className="filter-button">
        Top Rated Restaurant
      </button>
      <div className="card">
        <Card resData={restaurantData}></Card>
      </div>
    </div>
  );
};

export default Body;
