import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "semantic-ui-react";

const Counter = ({ item, addTotalToArray }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1); // Hook that takes initialState as an argument | [variable, function]
  const subtotal = React.createRef();
  //   const [total, setTotal] = useState(parseFloat(item.price));

  const handleSubtract = () => {
    if (count > 2) {
      setCount(count - 1);
    } else if (count === 2) {
      setCount(count - 1);

      addTotalToArray(count, {
        number: item.price,
        item: item.id,
      });
    }
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleTotal = () => {
    let array = subtotal.current.innerText.split("");
    array.shift();
  };

  useEffect(() => {
    console.log(count);
    if (count > 1) {
      addTotalToArray(count, {
        number: item.price * count,
        item: item.id,
      });
    }
  }, [count]);

  return (
    <div>
      <div>
        <button onClick={handleSubtract}>-</button>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        <h2 className="total" ref={subtotal}>
          ${item.price * count}
        </h2>
      </div>
    </div>
  );
};

export default Counter;
