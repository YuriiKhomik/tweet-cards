import styled from 'styled-components';

export const TweetsContainer = styled.ul`
  outline: 1px solid red;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;
