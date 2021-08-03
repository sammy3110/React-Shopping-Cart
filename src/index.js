import React from "react";
import ReactDom from "react-dom";
import Counter from "./components/counter";
import ItemList from "./components/item";

const element = <ItemList />;
ReactDom.render(element, document.getElementById("root"));