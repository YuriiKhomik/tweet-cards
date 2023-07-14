import { useEffect, useState } from 'react';
import { GoBackButton, TweetsContainer, TweetsMenu } from './Tweets.styled';
import { TweetCard } from 'components/TweetCard';
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

  return (
    <>
      <TweetsMenu>
        <GoBackButton to="/">go back</GoBackButton>
        <GoBackButton to="/">go back</GoBackButton>
      </TweetsMenu>
      <TweetsContainer>
        {users.map(item => {
          const {
            tweets,
            followers: initialFollowers,
            avatar,
            id,
            user,
          } = item;
          return (
            <TweetCard
              tweets={tweets}
              user={user}
              initialFollowers={initialFollowers}
              avatar={avatar}
              key={id}
              id={id}
            />
          );
        })}
      </TweetsContainer>
    </>
  );
};
