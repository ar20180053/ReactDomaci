import React, { useEffect, useState } from "react";

import ProductsList from "../components/productsList/ProductsList";

export default function ShowProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://itproducts-6f3d0-default-rtdb.firebaseio.com/products.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];

        for (const key in data) {
          const prod = {
            id: key,
            ...data[key],
          };

          products.push(prod);
        }
        setIsLoading(false);
        setLoadedProducts(products);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <p>Waiting for fetching products</p>
      </>
    );
  }

  return (
    <>
      <h1>All products</h1>
      <ProductsList itProducts={loadedProducts} />
    </>
  );
}
