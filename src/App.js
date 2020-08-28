import React from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Nav from "./components/Navbar";
import AboutUs from "./components/Aboutus";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/shopping-cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}
