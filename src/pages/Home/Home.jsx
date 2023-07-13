import { Box } from 'components/Box';
import {
  StyledHome,
  StyledLink,
  StyledText,
  StyledTitle,
} from './Home.styled';

export const Home = () => {
  return (
    <>
      <StyledHome>
        <Box mt="240px" textAlign="center">
          <StyledTitle>Welcome to the tweets app</StyledTitle>
          <StyledText>Click on button below to open a tweets page</StyledText>
        </Box>
        <StyledLink to="./tweets">Go to tweets</StyledLink>
      </StyledHome>
    </>
  );
};
