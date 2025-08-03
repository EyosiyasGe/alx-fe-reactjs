import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]); // store users in array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // fetch user data helper
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
    setUsers([]);

    const { data, error } = await fetchUserData(searchTerm);
    if (data) {
      setUsers([data]); // put single user inside array to map
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

      {/* Use map to display users */}
      {users.map((user) => (
        <div key={user.id} style={{ marginTop: '1rem' }}>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.login}</h2>
          <p>{user.bio || 'No bio available.'}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;
