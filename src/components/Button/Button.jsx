import { FollowButton, FollowingButton } from './Button.styled';

export const Button = ({ follow = false }) => {
  return (
    <>
      {follow ? (
        <FollowingButton>following</FollowingButton>
      ) : (
        <FollowButton>follow</FollowButton>
      )}
    </>
  );
};
