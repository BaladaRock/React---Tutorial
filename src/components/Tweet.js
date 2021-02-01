import styled from "styled-components";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter(state => state.id !== tweet.id));
  };

  return (
    <TweetStyle>
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button>Like</button>
      <button onClick={deleteTweet}>Delete</button>
    </TweetStyle>
  );
};

const TweetStyle = styled.div`
  background-color: rgba(255, 0, 0, 0.7);
  border-radius: 3px;
  border: 2px solid palevioletred;
  font-size: 1.5rem;
`;

export default Tweet;
