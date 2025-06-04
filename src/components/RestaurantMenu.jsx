import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URL } from "../mock/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  console.log("Resid", resId);
  useEffect(() => {
    fetchData();
  }, []);

  const [menuData, setMenuData] = useState();

  async function fetchData() {
    const data = await fetch(
      RESTAURANT_MENU_URL + resId
      //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=714836"
    );

    const jsonData = await data.json();
    //jsonData.data.cards[2]
    //jsonData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards
    //jsonData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.itemCards
    //jsonData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.itemCards[1].info.
    // console.log(jsonData, "D");
    //console.log("JSON DATA : ", jsonData.data.cards);
    console.log("DATA : ", jsonData.data.cards[2].card.card.info);
    const items = jsonData?.data?.cards[2]?.card?.card?.info;
    console.log(items);
    setMenuData(items);
  }

  console.log("Menu Data", menuData);

  return (
    <>
      <h2>{menuData?.name}</h2>

      <div className="resMenu">
        <h3>
          <span style={{ color: "green" }}>★</span> {menuData?.avgRating} (
          {menuData?.totalRatingsString})
        </h3>

        {/* <h3>4.1(165 ratings) 250 for two</h3> */}
        <p className="bakeryTitle">{menuData?.cuisines.join(",")}</p>
        <p className="outlet">
          Outlet <span className="locality">{menuData?.areaName}</span>
        </p>
        <p className="delTime">15-20 mins</p>
      </div>
    </>
  );
};

export default RestaurantMenu;
