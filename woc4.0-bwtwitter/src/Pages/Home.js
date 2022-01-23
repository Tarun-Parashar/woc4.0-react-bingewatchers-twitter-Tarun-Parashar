import Tweet from 'D:/React/woc4.0-react-bingewatchers-twitter-Tarun-Parashar/woc4.0-bwtwitter/src/Tweet'

function Home() {
    return (
        <div>
            <br />
            <br />
            <Tweet name="tarun" tweet_text="hello world!!" />
            <Tweet name="denish" tweet_text="hi world.. DP" />
            <Tweet name="mark" tweet_text="hello there world, I'm greedy" />
            <Tweet name="elon" tweet_text="hey world, recursion here" />
        </div>
    );
}

export default Home;