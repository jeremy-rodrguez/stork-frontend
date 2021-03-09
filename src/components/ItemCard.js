import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

const ItemCard = ({ item, handleFavorites, handleCheckout }) => {
  const dispatch = useDispatch();
  const favorited = useSelector((state) => state.favorites);
  const checkout = useSelector((state) => state.checkout);
  const user = useSelector((state) => state.user);
  const [editing, setEditing] = useState(false); // Hook, Local State Using Hooks

  const checkoutIds = checkout.map((item) => item.id);

  // const handleCheckout = () => {
  //   console.log(e.target, "Click Me");
  //   // fetch("http://localhost:3000/order_items", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     Authorization: `Bearer ${localStorage.token}`,
  //   //   },
  //   //   body: JSON.stringify({
  //   //     checkout: {
  //   //       user_id: user.id,
  //   //       item_id: item.id,
  //   //     },
  //   //   }),
  //   // })
  //   //   .then((response) => response.json())

  //   dispatch({
  //     type: "SET_CHECKOUT",
  //     addedToCheckout: checkout,
  //   });
  // };

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
            onClick={() => handleFavorites(item)}
          ></i>
        </span>
        <button className="ui button" onClick={() => handleCheckout(item)}>
          {checkoutIds.includes(item.id) ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
      {/* <div>
        {checkoutIds.includes(item.id) ? (
          editing ? (
            <div>
              <input type="number"></input>
              <button onClick={() => setEditing(false)}>Submit</button>
            </div>
          ) : (
            <button onClick={() => setEditing(true)}>Edit Count</button>
          )
        ) : null}
      </div> */}
    </Card>
  );
};

export default ItemCard;
