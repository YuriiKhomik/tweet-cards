import axios from 'axios';

const BASE_URL = 'https://640460af80d9c5c7bac6675e.mockapi.io/users';

export const getUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
