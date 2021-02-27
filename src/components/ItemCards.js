import React from "react";
import { Card, Icon } from "semantic-ui-react";

// const extra = (
//   <a>
//     <Icon name="user" />
//     16 Friends
//   </a>
// );

const getItems = () => {
  fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((items) => {
      items.map((item) => ItemCards(item));
    });
};

const ItemCards = ({ name, image, description, price }) => (
  <Card
    name={name}
    image={image}
    description={description}
    price={price}
    // extra={extra}
  />
);

export default ItemCards;
