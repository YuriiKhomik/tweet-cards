import { StyledTweets } from './Tweets.styled';
import { TweetCard } from 'components/TweetCard';
import { Link } from 'react-router-dom';

export const Tweets = () => {
  return (
    <div>
      <Link to="/">go back</Link>
      <StyledTweets>
        <TweetCard />
      </StyledTweets>
    </div>
  );
};
