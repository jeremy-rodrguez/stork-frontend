import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkout);

  return <div>Checkout here with a Counter like example, possibly.</div>;
};

export default Checkout;
