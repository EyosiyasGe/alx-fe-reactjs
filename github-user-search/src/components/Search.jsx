import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="USER NAME"
        value={searchTerm}
        onChange={handleInputChange}
        style={{ padding: '8px', width: '200px' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: '8px' }}>
        Search
      </button>
    </form>
  );
};

export default Search;
