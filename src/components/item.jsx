import React, { useState } from "react";
import Counter from "./counter";
import "bootstrap/dist/css/bootstrap.css";

// const Counter = require('counter.jsx');

export default function ItemList() {
  const [items, remove] = useState([1, 2, 3, 4, 5]);
  const [nav, updateNavbar] = useState(0);
  let l = [];
  items.map((_) => l.push(0));
  const [count, changeCount] = useState(l);

  const removeItem = (item) => {
    if (count[item - 1] !== 0) updateNavbar(nav - 1);
    console.log(l);
    let index = items.indexOf(item);
    let arr = [...items];
    arr.splice(index, 1);
    remove(arr);
  };
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-dark bg-dark"
        style={{ borderRadius: "10px" }}
      >
        <button className="btn btn-outline-info" style={{ color: "white" }}>
          Total Items
          <span style={{ fontSize: 15 }} className="badge badge-info m-2">
            {nav}
          </span>
        </button>
      </nav>
      <div
        style={
          {
            // marginTop: 100,
            // marginLeft: "12rem",
          }
        }
      >
        {items.map((item) => (
          <div className="m-2" key={item}>
            <p style={{ fontSize: 15 }} className="badge badge-success">
              Item {item}
            </p>
            <Counter
              updateNavbar={updateNavbar}
              item={item}
              navValue={nav}
              countArr={count}
              changeCount={changeCount}
            />
            <button onClick={() => removeItem(item)} className="btn btn-danger">
              Delete
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
