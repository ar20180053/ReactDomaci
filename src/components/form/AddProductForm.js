import React, { useRef } from "react";

import Card from "../card/Card";
import classes from "./AddProductForm.module.css";

export default function AddProductForm(props) {
  const titleInputRef = useRef(); //pamti vrednosti i kada se renderuje aplikacija
  const imageUrlInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImageUrl = imageUrlInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const productData = {
      title: enteredTitle,
      imageUrl: enteredImageUrl,
      price: enteredPrice,
      description: enteredDescription,
    };

    props.onAddProduct(productData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Product title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="imageUrl">Product image url</label>
          <input type="url" required id="imageUrl" ref={imageUrlInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Product price</label>
          <input type="text" required id="price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description of a product</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add new product</button>
        </div>
      </form>
    </Card>
  );
}
