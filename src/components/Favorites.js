import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorited = useSelector((state) => state.favorites);

  return <div>Items that users favorite will be displayed here.</div>;
};

export default Favorites;
