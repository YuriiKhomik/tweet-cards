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
import { PageLoader } from 'components/Loaders';

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUsers = async () => {
      setIsloading(true);
      try {
        const response = await getUsers(page);
        setUsers(pre => [...pre, ...response]);
        setIsloading(false);
        setInitialLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();

    return () => {
      abortController.abort();
    };
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <TweetsMenu>
        <GoBackButton to="/">go back</GoBackButton>
        {/* <GoBackButton to="/">go back</GoBackButton> */}
      </TweetsMenu>
      {isLoading && <PageLoader />}
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
      {!initialLoading && (
        <LMButtonContainer>
          {page < 4 ? (
            <LoadMoreButton onClick={handleLoadMore} disabled={isLoading}>
              Load more
            </LoadMoreButton>
          ) : (
            <p>that's all users so far</p>
          )}
        </LMButtonContainer>
      )}
    </>
  );
};
