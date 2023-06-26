import { Box } from './components/Box/';
import { GlobalStyle } from './constants/globals';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Box
        bg="background"
        p="4"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <h1>hi there</h1>
      </Box>
    </>
  );
};
