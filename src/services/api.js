import axios from 'axios';

const BASE_URL = 'https://640460af80d9c5c7bac6675e.mockapi.io/users';

export const getUsers = async page => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { page: page, limit: 3 },
    });
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
