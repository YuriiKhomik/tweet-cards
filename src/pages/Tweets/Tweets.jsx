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
import { DropdownMenu } from 'components/DropdownMenu';

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [filterOption, setFilterOption] = useState('follow');

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUsers = async () => {
      setIsloading(true);
      try {
        const response = await getUsers(page);
        setUsers(prevUsers => [...prevUsers, ...response]);
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

  const handleFilterChange = e => {
    setFilterOption(e.value);
  };

  const filteredUsers = users.filter(user => {
    if (filterOption === 'all') {
      return true; // Render all users
    } else if (filterOption === 'follow') {
      const followedUsers =
        JSON.parse(localStorage.getItem('followedUsers')) || [];
      return !followedUsers.includes(user.id); // Render users not in the followedUsers list
    } else if (filterOption === 'followings') {
      const followedUsers =
        JSON.parse(localStorage.getItem('followedUsers')) || [];
      return followedUsers.includes(user.id); // Render users in the followedUsers list
    }
    return false;
  });

  return (
    <>
      <TweetsMenu>
        <GoBackButton to="/">go back</GoBackButton>
        <DropdownMenu onChange={handleFilterChange} />
      </TweetsMenu>
      {isLoading && <PageLoader />}
      <TweetsContainer>
        {filteredUsers.map(item => {
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
