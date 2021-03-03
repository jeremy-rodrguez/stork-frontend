import React, { Component } from "react";
import { Card } from "semantic-ui-react";

const ItemCard = ({ item }) => {
  return (
    <Card>
      <div class="content">
        <a class="header">{item.name}</a>
      </div>
      <div class="image">
        <img src={item.image}></img>
      </div>
      <hr></hr>
      <div class="description">{item.description}</div>
      <hr></hr>
      <div class="content">
        <div class="price left floated">
          <b>{item.price}</b>
        </div>
        <span class="right floated">
          <i class="heart outline like icon"></i>
        </span>
        <button className="ui button"> Add to Cart</button>
      </div>
    </Card>
  );
};

export default ItemCard;
