import React from "react";
import "./CardItem.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Item from "../Item/Item";
import Total from "../Catalog/Total/Total"

const CardItem = (
  {
    productionYear,
    producerName,
    priceInUaH,
    color,
    numberOfButton,
    cableForPower,
    weightInKilograms,
    id,
    imageSrc,
  },
  props
) => (
  <li className="card-item">
    <h1  key={id} >{productionYear}</h1>
    <h1>{producerName}</h1>
    <h1>${priceInUaH}</h1>
    <h1>{color}</h1>
    <h1>{numberOfButton}</h1>
    <h1>{cableForPower}</h1>
    <h1>{weightInKilograms}</h1>
    <img
      style={{ borderRadius: "20px", maxWidth: "200px" }}
      alt="example"
      src={imageSrc}
    />
    <div>
   

        <NavLink exact to={`/item/${id}`} activeClassName="selected">
          <button>View more</button>
        </NavLink>

    </div>
  </li>
);

export default CardItem;
