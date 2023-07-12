import { FollowButton, FollowingButton } from './Button.styled';

export const Button = ({ onClick, follow }) => {
  return (
    <>
      {follow ? (
        <FollowingButton onClick={onClick}>following</FollowingButton>
      ) : (
        <FollowButton onClick={onClick}>follow</FollowButton>
      )}
    </>
  );
};
