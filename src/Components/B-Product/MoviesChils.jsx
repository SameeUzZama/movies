import React from "react";
import { useDispatch } from "react-redux";

const MoviesChils = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <img width="150px" height="250px" src={item.Poster} alt="" />
      <h4>{item.Title.substr(0, 20) + "..."}</h4>
      <h5>IMDB: {item.imdbID}</h5>
      <h5>Year:{item.Year}</h5>
      <button onClick={() => dispatch({ type: "Add-Cart", data: item })}>
        Favt. Movies
      </button>
    </div>
  );
};

export default MoviesChils;
