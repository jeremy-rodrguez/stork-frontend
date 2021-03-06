import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const favorited = useSelector((state) => state.favorites);
  const checkout = useSelector((state) => state.checkout);
  const user = useSelector((state) => state.user);

  const handleFavorites = (e) => {
    fetch("http://localhost:3000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        favorite: {
          user_id: user.id,
          item_id: item.id,
        },
      }),
    })
      .then((response) => response.json())
      .then((favorites) =>
        dispatch({
          type: "SET_FAVORITES",
          favorites: favorites,
        })
      );
  };

  const handleCheckout = (e) => {
    console.log(e.target, "Click Me");
    fetch("http://localhost:3000/order_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        checkout: {
          user_id: user.id,
          item_id: item.id,
        },
      }),
    })
      .then((response) => response.json())
      .then((checkout) =>
        dispatch({
          type: "SET_CHECKOUT",
          addedToCheckout: checkout,
        })
      );
  };

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
          <b>${item.price}</b>
        </div>
        <span class="right floated">
          <i
            class="heart outline like icon"
            onClick={handleFavorites}
            style={{ color: "red" }}
          ></i>
        </span>
        <button className="ui button" onClick={handleCheckout}>
          {" "}
          Add to Cart
        </button>
      </div>
    </Card>
  );
};

export default ItemCard;
