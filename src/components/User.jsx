import React, { useState } from "react";

const User = ({ name, location }) => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  return (
    <>
      <div className="user-card">
        <p>Name(Function) : {name}</p>
        <p>Location(Function) :{location}</p>
        <p>Count1 : {count1}</p>
        <p>Count2 : {count2}</p>
      </div>
    </>
  );
};

export default User;
