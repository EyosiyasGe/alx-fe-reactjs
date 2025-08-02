import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // live update the input value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the page from reloading
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      // send the username back to parent component
      setSearchTerm ("")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="USER NAME"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
