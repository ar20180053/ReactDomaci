import React from "react";

import ProductItem from "../productItem/ProductItem";
import classes from "./ProductsList.module.css";

export default function ProductsList(props) {
  return (
    <ul className={classes.list}>
      {props.itProducts.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          imageUrl={prod.imageUrl}
          title={prod.title}
          address={prod.price}
          description={prod.description}
        />
      ))}
    </ul>
  );
}
