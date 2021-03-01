import React from "react";
import { Card } from "semantic-ui-react";
import desk from "../images/desk.jpeg";

const getItems = () => {
  fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((items) => {
      items.map((item) => ItemCards(item));
    });
};

const ItemCards = ({ item }) => (
  <Card>
    <div class="content">
      <a class="header">Kristy</a>
    </div>
    <div class="image">
      <img src={desk}></img>
    </div>
    <hr></hr>
    <div class="description">Kristy is an art director living in New York.</div>
    <hr></hr>
    <div class="content">
      <div class="price left floated">
        <b>Price</b>
      </div>
      <span class="right floated">
        <i class="heart outline like icon"></i>
      </span>
    </div>
  </Card>
);

export default ItemCards;
