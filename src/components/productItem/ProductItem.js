import React from "react";

import Card from "../card/Card";
import classes from "./ProductItem.module.css";

export default function ProductItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.imageUrl} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.price}</p>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );
}
