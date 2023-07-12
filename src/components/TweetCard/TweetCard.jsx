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

export const TweetCard = () => {
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
      <Button follow={true} />
    </StyledTweetCard>
  );
};
