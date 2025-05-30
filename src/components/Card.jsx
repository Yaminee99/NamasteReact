import React from "react";

const Card = ({ resData }) => {
  return (
    <>
      {resData.map((data) => {
        return (
          <div className="cardContainer" key={data.id}>
            <img className="card-img" src={data.image} alt="card1"></img>
            <h2>{data.name}</h2>
            <p>{data.rating}</p>
            <p>{data.deliveryTime}</p>
            <p>{data.cuisines}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
