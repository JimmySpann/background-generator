import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="card-list">
        <input 
            className='search'
            type='search' 
            placeholder={placeholder} 
            onChange={handleChange} 
        />
    </div>


)