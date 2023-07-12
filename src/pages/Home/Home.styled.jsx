import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #d5f3ff;

  width: 100%;
  height: 100%;
`;

export const StyledTitle = styled.h1`
  font-size: 34px;
  font-weight: 600;
  color: #383e39;
  text-transform: uppercase;

  margin-bottom: 35px;
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #383e39;

  margin-bottom: 50px;
`;

export const StyledLink = styled(Link)`
    margin: auto;
    display: table;
    margin-top: 25vh;
    margin-top: 80px;

    background-color: transparent;
    border: solid 4px #000000;
    color: #000000;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    padding: 12px 28px;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%23000000'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E");
    background-position: right 32px center;
    background-repeat: no-repeat;
    background-size: 31px 12px;
    padding-right: 80px;
  }

  &:hover,
  &:focus {
    background-color: #471ca9;
    border-color: #000;
    color: #ffffff;
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.8s cubic-bezier(0.165, 0.84, 0.44, 1),
      box-shadow 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: translateY(-4px);
    box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%23ffffff'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E");
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15);
  }

  &:hover::after {
    opacity: 1;
  }
`;
