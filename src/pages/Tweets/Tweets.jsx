import { useEffect, useState } from 'react';
import { TweetsContainer } from './Tweets.styled';
import { TweetCard } from 'components/TweetCard';
import { Link } from 'react-router-dom';
import { getUsers } from 'services';

export const Tweets = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);
  return (
    <div>
      <Link to="/">go back</Link>
      <TweetsContainer>
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </TweetsContainer>
    </div>
  );
};
