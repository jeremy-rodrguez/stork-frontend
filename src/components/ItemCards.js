import React, { useEffect } from "react";
import { Card } from "semantic-ui-react";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";

const ItemCards = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

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
  return (
    <div class="ui grid">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
      {/* <Pagination /> */}
    </div>
  );
};

export default ItemCards;

// [] prevents the useEffect from running again which causes an infinite loop
