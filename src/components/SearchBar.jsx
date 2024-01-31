import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" id="search-input" placeholder="Search for products..." />
      <button id="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchBar;