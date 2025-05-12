import React from "react";
import ReactDOM from "react-dom/client";
{
  /* <div id = "parent">
    <div id="child1">
       <h1><h1>
       <h1><h1>
    </div>
    <div id="child2">
       <h1><h1>
       <h1><h1>
    </div>
</div> */
}
// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading = React.createElement(
  "div",
  { id: "parenfit" },
  [
    React.createElement("div", { id: "child1", key: "child1" }, [
      React.createElement("h1", { key: "c1h1" }, "h1 tag"),
      React.createElement("h2", { key: "c1h2" }, "h2 tag"),
    ]),
  ],
  [
    React.createElement("div", { id: "child2", key: "child2" }, [
      React.createElement("h1", { key: "c2h1" }, "h1 tag"),
      React.createElement("h2", { key: "c2h2" }, "h2 tag"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
