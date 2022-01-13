import React from "react";
import { Link } from "react-router-dom";

import classes from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={classes.group}>
      <h1>Hello! </h1>
      <h2>
        This page exists only to show that the Switch component from
        react-rooter-dom can be nested. Other two screens have navigation menu.
      </h2>
      <h3>
        Continue by clicking on the [Enjoy] button as you enter my web
        application that has two screens. One screen shows all IT products that
        are stored inside the firebase database on web (I have used fetch). The
        second screen contains a form that can add new products to the firebase
        database.
      </h3>
      <Link to="/it-products" className={classes.buttonEnjoy}>
        Enjoy
      </Link>
    </div>
  );
}
