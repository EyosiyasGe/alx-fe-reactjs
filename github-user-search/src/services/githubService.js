// src/services/githubService.js
import axios from 'axios';

// Function to fetch GitHub users using the Search API with filters
const fetchUserData = async ({ username = '', location = '', minRepos = 0 }) => {
  try {
    // Build the search query string
    // Example: "john location:san francisco repos:>=10"
    let query = '';
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    query = query.trim();

    // Make GET request to GitHub Search Users API
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    // Return array of matched users and no error
    return { data: response.data.items, error: null };
  } catch (error) {
    return {
      data: null,
      error: error.response?.status === 403
        ? 'API rate limit exceeded'
        : 'Something went wrong',
    };
  }
};

export default fetchUserData;
