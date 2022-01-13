import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/it-products">Products</Link>
          </li>
          <li>
            <Link to="/add-product">Add product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
