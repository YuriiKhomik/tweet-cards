import axios from 'axios';

const BASE_URL = 'https://640460af80d9c5c7bac6675e.mockapi.io/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log('Error fetching users', error);
  }
};

export const updateFollowers = async (userId, patchData) => {
  try {
    await axios.put(`${BASE_URL}/${userId}`, patchData);
    return true;
  } catch (error) {
    console.error('Error updating followers:', error);
    throw error;
  }
};

// , {
//       params: { page: 1, limit: 3 },
//     }
