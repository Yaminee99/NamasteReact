import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineState, setOnlineState] = useState("true");
  console.log("Inside use Online Status");
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineState("true");
      console.log("You are now connected to the network.");
    });

    window.addEventListener("offline", () => {
      setOnlineState("false");
      console.log("Please check you connection");
    });
  }, []);
  return onlineState;
};

export default useOnlineStatus;
