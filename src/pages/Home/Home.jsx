import { Box } from 'components/Box';
import {
  StyledHome,
  StyledLink,
  StyledText,
  StyledTitle,
} from './Home.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <StyledHome>
        <Box mt="350px" textAlign="center">
          <StyledTitle>Welcome to the tweets app</StyledTitle>
          <StyledText>Click button below to open a tweets page</StyledText>
        </Box>
        {/* <Link to="./tweets">Go to tweets</Link> */}
        <StyledLink to="./tweets">Go to tweets</StyledLink>
      </StyledHome>
    </>
  );
};
