import { Grid } from 'react-loader-spinner';

export const PageLoader = () => {
  return (
    <Grid
      height="80"
      width="80"
      color="#5cd3a8"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        zIndex: '1',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
