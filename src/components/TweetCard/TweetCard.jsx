import {
  Logo,
  StyledTweetCard,
  BgImagesContainer,
  AvatarContainer,
  AvatarInnerContainer,
  TweetsCounter,
  FollowersCounter,
} from './TweetCard.styled';
import { Button } from 'components/Button';
import avatar from '../images/avatarrr.png';
import { useState } from 'react';

export const TweetCard = () => {
  const [follow, setFollow] = useState(false);
  const handleClick = () => {
    setFollow(!follow);
  };
  return (
    <StyledTweetCard>
      <Logo />
      <BgImagesContainer />
      <AvatarContainer>
        <AvatarInnerContainer>
          <img width="100%" src={avatar} alt="avatar" />
        </AvatarInnerContainer>
      </AvatarContainer>
      <TweetsCounter>777 tweets</TweetsCounter>
      <FollowersCounter>100,500 followers</FollowersCounter>
      <Button onClick={handleClick} follow={follow} />
    </StyledTweetCard>
  );
};
