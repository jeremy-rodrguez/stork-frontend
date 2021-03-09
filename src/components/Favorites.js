import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import ItemCard from "./ItemCard";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorited = useSelector((state) => state.favorites);
  const user = useSelector((state) => state.user);

  console.log(favorited);

  const handleRemove = (item) => {
    fetch("http://localhost:3000/destroy_favorite", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorite: {
          user_id: user.id,
          item_id: item.id,
        },
      }),
    }).then(() => {
      const newFavorite = favorited.filter((fav) => fav.item_id !== item.id);
      dispatch({
        type: "SET_FAVORITES",
        favorites: newFavorite,
      });
    });
  };

  return (
    <div class="ui clearing segment">
      <div class="ui special cards">
        {favorited.map((favorite) => (
          <ItemCard
            key={favorite.id}
            item={favorite}
            handleFavorites={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
