import React from "react";
import { useHistory } from "react-router-dom";

import AddProductForm from "../components/form/AddProductForm";

export default function AddProductPage(props) {
  const history = useHistory();

  function handleAddProduct(productData) {
    fetch(
      "https://itproducts-6f3d0-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/it-products");
    });
  }

  return (
    <section>
      <h1>Add new product</h1>
      <AddProductForm onAddProduct={handleAddProduct} />
    </section>
  );
}
