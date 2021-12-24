import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavBar = ({ setSearch }) => {
  const cartItems = useSelector((state) => state.MoviesReducer.cart);
  return (
    <div>
      <Link to="/">Movies</Link>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="Search"
        placeholder="Search here...."
      />
      <button>Search</button>
      <Link to="/cart">Cart:{cartItems.length} </Link>
    </div>
  );
};
