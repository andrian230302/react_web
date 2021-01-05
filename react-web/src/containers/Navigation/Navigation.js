import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styles";
import Body from "../Body/Body";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import Item from "../Item/Item";
import Checkout from "../Checkout/Checkout";
import Success from "../Success/Success";

const Navigation = () => (
  <Router>
    <LinkingWrapper>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Shop" activeClassName="selected">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/cart" activeClassName="selected">
            Cart
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Body} />
        <Route path="/Shop" component={Catalog} />
        <Route path="/cart" component={Cart} />

        <Route path="/checkout" component={Checkout} />

        <Route path="/success" component={Success} />

        <Route path="/item/:id" component={Item} />
      </Switch>
    </LinkingWrapper>
  </Router>
);

export default Navigation;
