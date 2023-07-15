import { FollowButton, FollowingButton } from './Button.styled';

export const Button = ({ onClick, follow, isLoading }) => {
  return (
    <>
      {follow ? (
        <FollowingButton onClick={onClick} disabled={isLoading}>
          {isLoading ? 'loading...' : 'following'}
        </FollowingButton>
      ) : (
        <FollowButton onClick={onClick} disabled={isLoading}>
          {isLoading ? 'loading...' : 'follow'}
        </FollowButton>
      )}
    </>
  );
};
