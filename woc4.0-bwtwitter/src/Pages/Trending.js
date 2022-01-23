import MovieList from './MovieList'
import React, { useState } from "react";

function Trending() {
    const [movies, setMovies] = useState([]);
    const apiKey = "a118f35144d2574d8af300b5245bb692";
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
        .then(data => data.json())
        .then(data => { setMovies([...data.results])});
    return (
        <>
            <MovieList Movies={movies}/>
        </>
    );
}

export default Trending;