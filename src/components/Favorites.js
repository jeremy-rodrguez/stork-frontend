import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import ItemCard from "./ItemCard";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorited = useSelector((state) => state.favorites);

  console.log(favorited);

  return (
    <div class="ui clearing segment">
      <div class="ui special cards">
        {favorited.map((favorite) => (
          <ItemCard key={favorite.id} item={favorite} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

{
  /* <div class="ui clearing segment">
      <div class="ui special cards">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  ); */
}
