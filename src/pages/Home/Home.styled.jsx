import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(#471ca9, #5736a3, #4b2a99);
  filter: drop-shadow(
    6.873857021331787px -2.5776965618133545px 20.621572494506836px rgba(0, 0, 0, 0.23)
  );

  width: 100%;
  height: 100vh;
`;

export const StyledTitle = styled.h1`
  font-size: 34px;
  font-weight: 600;
  color: #ebd8ff;
  text-transform: uppercase;

  margin-bottom: 35px;
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #ebd8ff;

  margin-bottom: 50px;
`;

export const StyledLink = styled(Link)`
  min-width: 250px;
  height: 70px;
  border-radius: 10px;
  padding-top: 25px;
  box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  background-color: #5cd3a8;

  text-align: center;
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover,
  &:focus {
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1),
      box-shadow 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: translateY(-4px);
  }
`;
