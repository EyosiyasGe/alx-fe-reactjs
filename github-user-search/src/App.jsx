import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setUser(null);

    const result = await fetchUserData(username);

    if (result.error) {
      setError(result.error);
    } else {
      setUser(result.data);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Looks like we can't find the user.</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt="avatar" width="100" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">View GitHub Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;
