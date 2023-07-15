import { useEffect, useState } from 'react';
import {
  GoBackButton,
  TweetsContainer,
  TweetsMenu,
  LMButtonContainer,
} from './Tweets.styled';
import { TweetCard } from 'components/TweetCard';
import { getUsers } from 'services';
import { LoadMoreButton } from 'components/LoadMoreButton';

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUsers = async () => {
      try {
        const response = await getUsers(page);
        setUsers(pre => [...pre, ...response]);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
    console.log('first useEffect');

    return () => {
      abortController.abort();
    };
  }, [page]);

  const handleLoadMore = () => {
    console.log('click on load more button');
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <TweetsMenu>
        <GoBackButton to="/">go back</GoBackButton>
        {/* <GoBackButton to="/">go back</GoBackButton> */}
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
      <LMButtonContainer>
        {page < 4 ? (
          <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
        ) : (
          <p>that's all users so far</p>
        )}
      </LMButtonContainer>
    </>
  );
};
