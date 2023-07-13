import styled from 'styled-components';
import backgroundImage from '../images/background-images.png';
import { ReactComponent as LogoIcon } from '../images/LogoVector.svg';
import avatarLine from '../images/avatar-line.png';

export const StyledTweetCard = styled.div`
  position: relative;

  width: 380px;
  height: 460px;
  background: linear-gradient(#471ca9, #5736a3, #4b2a99);
  filter: drop-shadow(
    6.873857021331787px -2.5776965618133545px 20.621572494506836px rgba(0, 0, 0, 0.23)
  );
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0px 28px;
`;

export const BgImagesContainer = styled.div`
  width: 308px;
  height: 168px;
  background-image: url(${backgroundImage});
  margin: 0 auto 87px;
`;

export const Logo = styled(LogoIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${avatarLine});
  background-repeat: no-repeat;
  background-position-y: 55%;
`;

export const AvatarInnerContainer = styled.div`
  background-color: red;
  border-radius: 50%;
  max-width: 80px;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 8px solid #ebd8ff;
`;

export const TweetsCounter = styled.p`
  font-size: 20px;
  color: #e8d8ff;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const FollowersCounter = styled.p`
  font-size: 20px;
  color: #e8d8ff;
  text-transform: uppercase;
  margin-bottom: 26px;
`;
