import styles from './Styles.module.css'

function Movie(props) {
    return (
        <div className={styles.card}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="Movie Thumbnail" style={{borderRadius: "15px", padding: "4px"}} />
            <div className={styles.details}>
                <b>Title</b> {props.title}<br />
                <b>Rating</b> {props.ratings}/10<br />
                <b>Released on</b> {props.releaseDate}<br />
            </div>
        </div>
    );
}

export default Movie;