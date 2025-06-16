import React, { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  console.log(resId, "Res ID");
  useEffect(() => {
    fetchData();
  }, []);
  const [menuData, setMenuData] = useState([]);

  async function fetchData() {
    const data = await fetch(RESTAURANT_MENU_URL + resId);

    const jsonData = await data.json();
    console.log("jsonData", jsonData);

    //   const bakeryItem =
    //     jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    //   setBakeryItems(bakeryItem);

    //   console.log("bakeryItems", bakeryItems);
    // const items = jsonData?.data?.cards[2]?.card?.card?.info;
    // console.log("Items", items);
    setMenuData(jsonData);
    // console.log(menuData, "menuData");
    // return menuData;
    //jsonData.data.cards.card[5].groupedCard.cardGroupMap.REGULAR.cards[1]
  }
  return menuData;
};

export default useRestaurantMenu;
