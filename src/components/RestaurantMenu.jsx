import React, { useEffect, useState } from "react";
import useRestaurantMenu from "../mock/useRestaurantMenu";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URL } from "../mock/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const items = useRestaurantMenu(resId);

  console.log(items, "Menudata in RestaurantMenu");

  const menuData = items?.data?.cards[2]?.card?.card?.info;
  // useEffect(() => {

  //   fetchData();
  // }, []);

  // const [menuData, setMenuData] = useState([]);

  //const [bakeryItems, setBakeryItems] = useState([]);

  // async function fetchData() {
  //   const data = await fetch(RESTAURANT_MENU_URL + resId);

  //   const jsonData = await data.json();
  //   console.log("jsonData", jsonData);

  const bakeryItems =
    items?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  //
  //   setBakeryItems(bakeryItem);

  //   console.log("bakeryItems", bakeryItems);
  //   const items = jsonData?.data?.cards[2]?.card?.card?.info;
  //   console.log("Items", items);
  //   setMenuData(items);
  //   //jsonData.data.cards.card[5].groupedCard.cardGroupMap.REGULAR.cards[1]
  // }

  if (items.length === 0) {
    console.log("Restaurant Data Length : ", items.length);
    return <h1>Loading...</h1>; //We can also load any component here like shimmer
  }
  return (
    <>
      <h2>{menuData?.name}</h2>

      <div className="resMenu">
        <h3>
          <span style={{ color: "green" }}>★</span> {menuData?.avgRating} (
          {menuData?.totalRatingsString})
        </h3>

        {/* <p className="bakeryTitle">{menuData?.cuisines.join(",")}</p> */}
        <p className="outlet">
          Outlet <span className="locality">{menuData?.areaName}</span>
        </p>
        <p className="delTime">15-20 mins</p>
      </div>

      <div className="bakery-items">
        {bakeryItems.map((item, index) => {
          console.log(item?.card?.info?.name);
          return <p key={index}>{item?.card?.info?.name}</p>;
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
