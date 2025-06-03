import React from "react";
import { IMG_URL } from "../mock/constant";

const Card = ({ resData }) => {
  console.log(resData, "Resdata");

  return (
    <>
      {resData.map((data, index) => {
        return (
          <div className="cardContainer" key={data?.info?.id || index}>
            <img
              className="card-img"
              // src={data.info.cloudinaryImageId}
              // src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${data.info.cloudinaryImageId}`}
              // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.cloudinaryImageId}"
              // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.cloudinaryImageId}`}
              src={`${IMG_URL}${data.info.cloudinaryImageId}`}
              alt="card1"
            ></img>
            <h2>{data?.info?.name}</h2>
            <p>{data?.info?.avgRating}</p>
            <p>{data?.info?.costForTwo}</p>
            <p>{data?.info?.cuisines.join(",")}</p>
            <p>{data?.info?.sla?.deliveryTime} mins</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
