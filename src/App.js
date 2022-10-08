import React, { useState } from "react";
import AddModal from "./component/AddModal";
import MoviesList from "./component/MoviesList";
import Search from "./component/Search";
import { data } from "./moviesData";

import "./App.css";

export default function App() {
  const [moviesData, setMoviesData] = useState(data);

  const [search, setSearch] = useState("");
  const addMovies = (newMovies) => {
    setMoviesData([...moviesData, { ...newMovies, id: Math.random() }]);
    sessionStorage.setItem(
      "moviesData",
      JSON.stringify([...moviesData, { ...newMovies, id: Math.random() }])
    );
  };
  console.log(moviesData);
  return (
    <div>
      <Search search={search} setSearch={setSearch} />

      <MoviesList moviesData={moviesData} search={search}/>
      <AddModal addMovies={addMovies} />
    </div>
  );
}
