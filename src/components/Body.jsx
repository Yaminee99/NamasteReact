import React, { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [restaurantData, setListOfRestaurant] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    const filterData = restaurantData.filter((res) => res?.info?.avgRating > 4);
    setFilteredData(filterData);
    console.log(filterData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // https://corsproxy.io/?url=https://example.com
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //" https://corsproxy.io/?url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    console.log(data);
    const jsonData = await data.json();
    console.log(jsonData);

    console.log("JSON Data : ", jsonData?.data?.cards);

    let json =
      jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("JSON : ", json);

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
            console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            console.log(searchText, "SearchText");
            const filterData = restaurantData.filter((data) => {
              console.log(data?.info?.name, "Data");
              return data?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredData(filterData);

            console.log(filterData, "Filtered Data ");
          }}
        >
          Search
        </button>
        <button onClick={handleClick} className="filter-button">
          Top Rated Restaurant
        </button>
      </div>

      <div className="card">
        <Card resData={filteredData}></Card>
      </div>
    </div>
  );
};

export default Body;
