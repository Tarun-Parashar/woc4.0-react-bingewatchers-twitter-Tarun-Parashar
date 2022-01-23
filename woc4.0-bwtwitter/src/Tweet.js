import profileIcon from './profile.png'
import styles from './Pages/Styles.module.css'
function Tweet(props) {
    const imagestyle = {
        justifyContent: "left",
        height: "25px",
        paddingLeft: "3px",
        paddingTop: "2px",
    };

    return (
        <div style={{fontFamily: 'segoe ui' ,maxWidth: '900px'}}>
            <div style={{paddingTop:'6px'}} className={styles.imageclass}>
                <img style={imagestyle} src={profileIcon} alt="Profile Icon" />
                <span>@{props.name} 12 Jan 2022</span>
            </div>
            <div className={styles.tweetclass}>
                <p>{props.tweet_text}</p>
            </div>
        </div>
    );
}

export default Tweet;