import React, { useEffect } from "react";
import { Card } from "semantic-ui-react";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";

const ItemCards = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const user = useSelector((state) => state.user);
  const favorited = useSelector((state) => state.favorites);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((items) => {
        dispatch({
          type: "SET_ITEMS", // (Key, Value)
          popcorn: items,
        });
      });
  }, []);

  const handleFavorites = (item) => {
    const favoritedIds = favorited.map((fav) => fav.id);

    if (!favoritedIds.includes(item.id)) {
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
    } else {
      alert("This item is already in your favorites.");
    }
  };

  const handleCheckout = (item) => {
    dispatch({
      type: "SET_CHECKOUT",
      addedToCheckout: item,
    });
  };

  return (
    <div class="ui clearing segment">
      <div class="ui special cards">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            handleFavorites={handleFavorites}
            handleCheckout={handleCheckout}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemCards;

// [] prevents the useEffect from running again which causes an infinite loop
