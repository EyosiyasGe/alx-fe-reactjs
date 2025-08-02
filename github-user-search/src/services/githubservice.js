// services/githubService.js
import axios from 'axios';

 const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.status === 404 ? 'User not found' : 'Something went wrong' };
  }
};
export default fetchUserData;