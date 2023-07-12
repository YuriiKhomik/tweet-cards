import { Routes, Route } from 'react-router-dom';
import { Box } from './components/Box/';
import { Home } from 'pages/Home';
import { Tweets } from 'pages/Tweets';

export const App = () => {
  return (
    <>
      <Box
        p="0px 15px"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>
    </>
  );
};
