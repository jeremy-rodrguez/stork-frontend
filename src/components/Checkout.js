import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import Counter from "./Counter";
import App from "../App";
import ReactDOM from "react-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkout);
  const [array, setArray] = useState([]);
  // const [total, setTotal] = useState(0);

  const addTotalToArray = (count, numberTotal) => {
    console.log(count);
    let arrayIds = array.map((i) => i.item);
    let newArray;

    if (arrayIds.includes(numberTotal.item)) {
      newArray = array.map((i) => {
        if (i.item === numberTotal.item) {
          return numberTotal;
        } else return i;
      });
    } else {
      newArray = [...array, numberTotal];
    }
    setArray(newArray);
  };

  useEffect(() => {
    const initialArray = checkout.map((i) => {
      return {
        item: i.id,
        number: i.price,
      };
    });
    setArray(initialArray);
  }, []);

  const removeItemFromCheckout = (item) => {
    dispatch({
      type: "REMOVE_ITEM",
      item: item,
    });
  };

  const getTotalFromArray = () => {
    let total = array.reduce((a, b) => a + (b.number || 0), 0);
    console.log(array);
    return <p>{total}</p>;
  };

  return (
    <div>
      <div>{getTotalFromArray()}</div>
      <div class="ui clearing segment">
        <div class="ui special cards">
          {checkout.map((checkout) => (
            <div>
              <ItemCard
                key={checkout.id}
                item={checkout}
                handleCheckout={removeItemFromCheckout}
              />
              <Counter item={checkout} addTotalToArray={addTotalToArray} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
