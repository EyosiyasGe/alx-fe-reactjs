import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]); // array of detailed user profiles
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 1. Search users with query (username only for simplicity)
  const fetchUserData = async (username) => {
    try {
      const searchRes = await axios.get(
        `https://api.github.com/search/users?q=${encodeURIComponent(username)}&per_page=5`
      );

      // Get the first 5 users from search results
      const userItems = searchRes.data.items;

      // Fetch detailed info for each user in parallel
      const detailedUsers = await Promise.all(
        userItems.map(async (user) => {
          const detailRes = await axios.get(`https://api.github.com/users/${user.login}`);
          return detailRes.data;
        })
      );

      return { data: detailedUsers, error: null };
    } catch (err) {
      return {
        data: null,
        error:
          err.response?.status === 403
            ? 'API rate limit exceeded'
            : 'Looks like we cant find the user',
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;

    setLoading(true);
    setError('');
    setUsers([]);

    const { data, error } = await fetchUserData(searchTerm);

    if (error) {
      setError(error);
    } else {
      setUsers(data);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search GitHub users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: 8, width: 250 }}
        />
        <button type="submit" style={{ padding: '8px 12px', marginLeft: 8 }}>
          Search
        </button>
      </form>

      {loading && <p>Loading</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            marginBottom: 20,
            padding: 10,
            border: '1px solid #ccc',
            borderRadius: 8,
            maxWidth: 400,
          }}
        >
          <img src={user.avatar_url} alt={user.login} width={80} style={{ borderRadius: '50%' }} />
          <h2>{user.login}</h2>
          <p>{user.bio || 'No bio available.'}</p>
          <p>Location: {user.location || 'Unknown'}</p>
          <p>
            Profile:{' '}
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.html_url}
            </a>
          </p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;
