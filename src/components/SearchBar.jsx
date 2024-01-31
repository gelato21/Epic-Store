import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/productSlice';


const SearchBar = () => {
    const dispatch = useDispatch();
    function handleInputChange(e){
        dispatch(setSearchTerm(e.target.value))
    }

  return (
    <div className="search-container">
      <input 
            type="text" 
            id="search-input" 
            placeholder="Search for products..." 
            onChange={handleInputChange}
        />
        <FontAwesomeIcon 
            id="search-button" 
            icon={faMagnifyingGlass}
        />
    </div>
  );
};

export default SearchBar;