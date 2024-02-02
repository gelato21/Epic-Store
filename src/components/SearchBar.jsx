import React, { useCallback, useEffect, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/productSlice';

function SearchBar(){
    const dispatch = useDispatch();
    
    function debounce(func, timeout){
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args) }, timeout);
      };
    }

    function handleSearch(query) {
      dispatch(setSearchTerm(query))
    }
    
    const debouncedHandleSearch = useCallback(debounce(handleSearch, 400), []);

  return (
    <div className="search-container">
      <input 
            type="text" 
            id="search-input" 
            placeholder="Search for products..." 
            onChange={(e) => debouncedHandleSearch(e.target.value)}
        />
        <FontAwesomeIcon 
            id="search-button" 
            icon={faMagnifyingGlass}
        />
    </div>
  );
};

export default SearchBar;