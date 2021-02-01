import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  const defaultHeader = "This reflects your newly created tweet content";
  const userInputHandler = event => {
    setTextInput(event.target.value);
  };
  const submitTweetHandler = event => {
    event.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
      <h3 onClick={() => setTextInput("")}>
        {!textInput ? defaultHeader : textInput}
      </h3>
    </form>
  );
};

export default CreateTweet;
