import React from "react";

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
              alt="card1"
            ></img>
            <h2>{data?.info?.name}</h2>
            <p>{data?.info?.avgRating}</p>
            <p>{data?.info?.cuisines}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
