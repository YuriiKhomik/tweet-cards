import { TailSpin } from 'react-loader-spinner';

export const ButtonLoader = () => {
  return (
    <TailSpin
      height="15"
      width="15"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
