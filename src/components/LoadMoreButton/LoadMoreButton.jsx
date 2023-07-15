import { StyledLMButton } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onClick, disabled }) => {
  return (
    <StyledLMButton onClick={onClick} disabled={disabled}>
      Load more
    </StyledLMButton>
  );
};
