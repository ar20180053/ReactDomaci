import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./screens/LandingPage";
import AddProductPage from "./screens/AddProductPage";
import ShowProducts from "./screens/ShowProducts";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>{" "}
      <Layout>
        <Switch>
          <Route path="/it-products">
            <ShowProducts />
          </Route>{" "}
          <Route path="/add-product">
            <AddProductPage />
          </Route>{" "}
        </Switch>{" "}
      </Layout>{" "}
    </Switch>
  );
}
