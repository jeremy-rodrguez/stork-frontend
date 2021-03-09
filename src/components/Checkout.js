import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import Counter from "./Counter";

const Checkout = () => {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkout);

  const removeItemFromCheckout = (item) => {
    dispatch({
      type: "REMOVE_ITEM",
      item: item,
    });
  };

  const total = () => {};

  return (
    <div>
      <div class="ui clearing segment">
        <div class="ui special cards">
          {checkout.map((checkout) => (
            <div>
              <ItemCard
                key={checkout.id}
                item={checkout}
                handleCheckout={removeItemFromCheckout}
              />
              <Counter />
            </div>
          ))}
        </div>
        <div>
          <h2>Total: $`${total}`</h2>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
