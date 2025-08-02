// services/githubService.js
import axios from 'axios'; // 1. Importing axios for making HTTP requests

// 2. Declaring an async function to fetch GitHub user data
const fetchUserData = async (username) => {
  try {
    // 3. Attempt to fetch data from GitHub API
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    // 4. If successful, return the user data and no error
    return { data: response.data, error: null };
  } catch (error) {
    // 5. If there's an error (e.g., 404), return a friendly message
    return {
      data: null,
      error: error.response?.status === 404
        ? 'User not found'
        : 'Something went wrong',
    };
  }
};

// 6. Export the function so it can be used elsewhere
export default fetchUserData;