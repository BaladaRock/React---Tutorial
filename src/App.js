import { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  // stats
  const [name, setName] = useState("Andrei");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  const tweetsContent = "R2 B2 R F R'B2 R F' R";

  return (
    <div className="tweet">
      <h1>Hi, Andrei! This is your first app in React</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
