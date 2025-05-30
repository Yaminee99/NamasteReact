import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./src/components/NavBar";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App></App>);
