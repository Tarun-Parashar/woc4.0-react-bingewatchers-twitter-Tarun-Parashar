import Movie from './Movie'

function MovieList(props) {
    return (
        <div>
            <br/>
            {
                
                props.Movies.map((movie, i) => {
                    return (<Movie image={movie.poster_path} key={i} title={movie.title} ratings={movie.vote_average} releaseDate={movie.release_date}/>);
                })
            }
        </div>
    )
}

export default MovieList;