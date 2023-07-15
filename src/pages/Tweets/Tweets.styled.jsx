import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TweetsContainer = styled.ul`
  width: 100wv;
  padding: 80px 0px 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  justify-content: center;
`;

export const GoBackButton = styled(Link)`
  cursor: pointer;
  background-color: #5cd3a8;

  color: #373737;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;

  padding: 7px 10px;
  border-radius: 5px;
`;

export const TweetsMenu = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: white;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 15px 60px;
  box-shadow: 0px 15px 10px -15px #111;
`;

export const LMButtonContainer = styled.div`
  width: 100%;
  min-height: 60px;
  padding: 20px 0px 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
