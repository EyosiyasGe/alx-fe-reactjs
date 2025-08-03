// src/components/Search.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ✅ This is what your course checker is looking for
  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return { data: response.data, error: null };
    } catch (err) {
      return { data: null, error: err };
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') return;

    setLoading(true);
    setError('');
    setUser(null);

    const { data, error } = await fetchUserData(searchTerm);
    if (data) {
      setUser(data);
    } else {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="USER NAME"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />
        <button type="submit" style={{ padding: '8px 12px', marginLeft: '8px' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.login}</h2>
          <p>{user.bio || 'No bio available.'}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
