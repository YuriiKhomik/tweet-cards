import styled from 'styled-components';

export const StyledLMButton = styled.button`
  min-width: 196px;
  height: 50px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  background-color: #5cd3a8;
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover,
  &:focus {
    border: 2px solid blue;

    &:disabled {
      background: #e7e8e9;
      color: #9fa3a9;
      cursor: not-allowed;
    }
  }
`;
