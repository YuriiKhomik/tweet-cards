import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  //   background-color: #d5f3ff;

  background: linear-gradient(#471ca9, #5736a3, #4b2a99);
  filter: drop-shadow(
    6.873857021331787px -2.5776965618133545px 20.621572494506836px rgba(0, 0, 0, 0.23)
  );

  width: 100%;
  height: 100%;
`;

export const StyledTitle = styled.h1`
  font-size: 34px;
  font-weight: 600;
  //   color: #383e39;
  color: #ebd8ff;
  text-transform: uppercase;

  margin-bottom: 35px;
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
  //   color: #383e39;
  color: #ebd8ff;

  margin-bottom: 50px;
`;

// export const StyledLink = styled(Link)`
//     background-color: transparent;
//     border: 4px solid #471ca9;
//     cursor: pointer;
//     font-size: 16px;
//     padding: 12px 28px;

//     transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
//     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%23000000'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E");
//     background-position: right 32px center;
//     background-repeat: no-repeat;
//     background-size: 31px 12px;
//     padding-right: 80px;
//   }

// &:hover,
// &:focus {
//   background-color: #471ca9;
//   border-color: #000;
//   color: #ffffff;
//   transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1),
//     background-color 0.8s cubic-bezier(0.165, 0.84, 0.44, 1),
//     box-shadow 2s cubic-bezier(0.165, 0.84, 0.44, 1);
//   transform: translateY(-4px);
//   box-shadow: 4px 4px 0px rgba(3, 4, 3, 0.2);
//   background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='17' fill='%23ffffff'%3E %3Cpath fill-rule='evenodd' d='M24.736 10.246v6.351l16.4-8.347-16.4-8.099v6.085H.541v4.01h24.195z'/%3E %3C/svg%3E");
// }

//   &:active {
//     transform: translateY(0px);
//     box-shadow: 0px 0px 0px rgba(3, 4, 3, 0.15);
//   }

//   &:hover::after {
//     opacity: 1;
//   }
// `;

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
