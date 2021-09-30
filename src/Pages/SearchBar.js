import React from 'react';
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function SearchBar({placeholder, data}) {
    return (
        
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' placeholder={placeholder} />
                <div className='searchIcon'><FontAwesomeIcon icon={faSearch} className='searchIcon'/></div>
            <div clasName="dataResult"></div>
        </div>
        </div>
        
    );
}

export default SearchBar
