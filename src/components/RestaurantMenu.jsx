import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URL } from "../mock/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const [menuData, setMenuData] = useState();

  async function fetchData() {
    const data = await fetch(RESTAURANT_MENU_URL + resId);

    const jsonData = await data.json();

    const items = jsonData?.data?.cards[2]?.card?.card?.info;
    setMenuData(items);
  }

  return (
    <>
      <h2>{menuData?.name}</h2>

      <div className="resMenu">
        <h3>
          <span style={{ color: "green" }}>★</span> {menuData?.avgRating} (
          {menuData?.totalRatingsString})
        </h3>

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
