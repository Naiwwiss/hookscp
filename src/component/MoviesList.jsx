import React from "react";
import MoviesCard from "./MoviesCards.jsx";


export default function MoviesList({ moviesData, search, rating }) {

    const filteredMovies = moviesData.filter((movie) => {
        rating = parseInt(rating);
        return rating 
                ? movie.title.toLowerCase().includes(search.toLowerCase()) && movie.rate === rating 
                : movie.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="d-flex">
            {console.log(filteredMovies)}

            {
                filteredMovies.map((movie, key) => (

                    <MoviesCard key={key} movie={movie} />
                ))}

        </div>
    );
}
