// import { useEffect, useState } from 'react';
// import {
//   Logo,
//   StyledTweetCard,
//   BgImagesContainer,
//   AvatarContainer,
//   AvatarInnerContainer,
//   TweetsCounter,
//   FollowersCounter,
// } from './TweetCard.styled';
// import { Button } from 'components/Button';
// import { updateFollowers } from 'services';

// export const TweetCard = ({
//   tweets,
//   initialFollowers,
//   avatar,
//   id,
//   userName,
// }) => {
//   const [follow, setFollow] = useState(false);
//   const [followers, setFollowers] = useState(initialFollowers);

//   useEffect(() => {
//     if (followers === 100501) {
//       setFollow(true);
//     }
//   }, [followers]);

//   const handleClick = async () => {
//     const updatedFollow = !follow;

//     let updatedFollowers = followers;
//     if (updatedFollow) {
//       updatedFollowers = 100501;
//     } else {
//       updatedFollowers = 100500;
//     }

//     const userData = {
//       user: userName,
//       tweets,
//       followers: updatedFollowers,
//       avatar,
//     };

//     try {
//       await updateFollowers(id, userData);
//       setFollowers(updatedFollowers);
//       setFollow(updatedFollow);
//     } catch (error) {
//       console.error('Error updating followers:', error);
//     }
//   };

//   return (
//     <StyledTweetCard>
//       <Logo />
//       <BgImagesContainer />
//       <AvatarContainer>
//         <AvatarInnerContainer>
//           <img width="100%" src={avatar} alt="avatar" />
//         </AvatarInnerContainer>
//       </AvatarContainer>
//       <TweetsCounter>{tweets} tweets</TweetsCounter>
//       <FollowersCounter>
//         {followers.toLocaleString()} followers
//       </FollowersCounter>
//       <Button onClick={handleClick} follow={follow} />
//     </StyledTweetCard>
//   );
// };

import { useEffect, useState } from 'react';
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
import { updateFollowers } from 'services';

export const TweetCard = ({
  tweets,
  initialFollowers,
  avatar,
  id,
  userName,
}) => {
  const [follow, setFollow] = useState(false);
  const [followers, setFollowers] = useState(initialFollowers);

  useEffect(() => {
    const followedUsers =
      JSON.parse(localStorage.getItem('followedUsers')) || [];
    if (followedUsers.includes(id)) {
      setFollow(true);
    }
  }, [id]);

  useEffect(() => {
    const followedUsers =
      JSON.parse(localStorage.getItem('followedUsers')) || [];
    if (follow) {
      localStorage.setItem(
        'followedUsers',
        JSON.stringify([...followedUsers, id])
      );
    } else {
      const updatedFollowedUsers = followedUsers.filter(
        userId => userId !== id
      );
      localStorage.setItem(
        'followedUsers',
        JSON.stringify(updatedFollowedUsers)
      );
    }
  }, [follow, id]);

  const handleClick = async () => {
    const updatedFollow = !follow;
    const updatedFollowers = updatedFollow ? followers + 1 : followers - 1;

    const userData = {
      user: userName,
      tweets,
      followers: updatedFollowers,
      avatar,
    };

    await updateFollowers(id, userData);
    setFollowers(updatedFollowers);
    setFollow(updatedFollow);
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
      <TweetsCounter>{tweets} tweets</TweetsCounter>
      <FollowersCounter>
        {followers.toLocaleString()} followers
      </FollowersCounter>
      <Button onClick={handleClick} follow={follow} />
    </StyledTweetCard>
  );
};
