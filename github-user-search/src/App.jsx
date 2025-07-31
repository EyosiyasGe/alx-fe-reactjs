import React, { useState } from 'react';
import Search from './components/Search';

function App() {
  const [username, setUsername] = useState('');

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
    setUsername(searchTerm);
  };

  return (
    <>
      <h1>HELLO Insert User Name</h1>
      <Search onSearch={handleSearch} />
      {username && <p>You searched for: {username}</p>}
    </>
  );
}

export default App;
