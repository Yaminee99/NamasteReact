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

    let json =
      jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(json);

    // if (restaurantData.length === 0) {
    //   console.log("Restaurant Data Length : ", restaurantData.length);
    //   return <h1>Loading...</h1>;
    // }
  }

  // if (restaurantData.length === 0) {
  //   console.log("Restaurant Data Length : ", restaurantData.length);
  //   return <h1>Loading...</h1>;//We can also load any component here like shimmer
  // }

  return restaurantData.length === 0 ? (
    <h1>Loading....</h1>
  ) : (
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
