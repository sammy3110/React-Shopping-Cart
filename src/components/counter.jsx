import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Counter({
  updateNavbar,
  item,
  navValue,
  changeCount,
  countArr,
}) {
  const [count, setCount] = useState(0);

  const styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  const handleIncDec = (operator) => {
    let c = count;
    c = operator === "+" ? c + 1 : c - 1;
    setCount(c);
    c = operator === "+" ? count + 1 : count - 1;
    countArr[item - 1] = c;
    changeCount(countArr);
    changeNav(operator);
  };

  const changeNav = (op) => {
    if (op === "+" && count === 0) updateNavbar(navValue + 1);
    else if (op === "-" && count === 1) updateNavbar(navValue - 1);
  };

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  const element = (
    <React.Fragment>
      <span style={styles} className={getBadgeClasses()}>
        {formatCount()}
      </span>
      <button
        style={styles}
        onClick={() => handleIncDec("-")}
        className="btn btn-secondary m-1"
        disabled={!count}
      >
        -
      </button>
      <button
        style={styles}
        onClick={() => handleIncDec("+")}
        className="btn btn-secondary m-1"
      >
        +
      </button>
    </React.Fragment>
  );
  return element;
}
