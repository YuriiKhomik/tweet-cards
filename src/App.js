import { Box } from './components/Box/';
import { TweetCard } from 'components/TweetCard';

export const App = () => {
  return (
    <>
      <Box
        p="4"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <TweetCard />
      </Box>
    </>
  );
};
