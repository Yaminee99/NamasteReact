import React, { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [restaurantData, setListOfRestaurant] = useState([]);

  const handleClick = () => {
    const filterData = restaurantData.filter((res) => res?.info?.avgRating > 4);
    setListOfRestaurant(filterData);
    console.log(filterData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    // console.log(
    //   jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
    let json =
      jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(
    //   json.map((data) => {
    //     console.log(data.info.name);
    //     console.log(data.info.id);
    //     console.log(data.info.avgRating);
    //     console.log(data.info.cuisines);
    //     console.log(data.info.cloudinaryImageId);
    //   })
    // );
    setListOfRestaurant(json);
  }

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
