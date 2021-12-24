import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.MoviesReducer.cart);
  return (
    <div>
      <h1>this is cart</h1>
      <div>
        {cartItems.map((item) => {
          return (
            <div>
              <h4>{item.Title.substr(0, 20) + "..."}</h4>
              <h5>IMDB: {item.imdbID}</h5>
              <h5>Year:{item.Year}</h5>
              <button
                onClick={() => dispatch({ type: "Remove-Movies", data: item })}
              >
                Remove{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
