import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FETCH_URL } from "../mock/constant";
const Body = () => {
  const [restaurantData, setListOfRestaurant] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    const filterData = restaurantData.filter((res) => res?.info?.avgRating > 4);
    setFilteredData(filterData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // https://corsproxy.io/?url=https://example.com
  async function fetchData() {
    const data = await fetch(FETCH_URL);

    const jsonData = await data.json();

    let json =
      jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(json);
    setFilteredData(json);

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
      <div className="filter">
        <input
          className="input-search"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="m-1"
          onClick={() => {
            const filterData = restaurantData.filter((data) => {
              return data?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredData(filterData);
          }}
        >
          Search
        </button>
        <button onClick={handleClick} className="m-3">
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex m-4 p-4">
        <Card resData={filteredData}></Card>
      </div>
    </div>
  );
};

export default Body;
