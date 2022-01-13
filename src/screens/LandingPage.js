import React from "react";
import { Link } from "react-router-dom";

import classes from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={classes.group}>
      <h1>Hello professor! </h1>
      <h2>
        This page exist only to show that switch from react-rooter-dom can be
        nested. Other two screens have navigation menu.
      </h2>
      <h3>
        Go on, by clicking on [Enjoy] button you will enter in my web
        application that has two screens, one screen shows all it products that
        are stored inside firebase database on a web (I have used fetch) and 2nd
        screen contains a form that can add new product inside firebase
        database.
      </h3>
      <Link to="/it-products" className={classes.buttonEnjoy}>
        Enjoy
      </Link>
    </div>
  );
}
