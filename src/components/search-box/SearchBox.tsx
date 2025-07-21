import React from 'react'
import './search-box.style.css'

const SearchBox = ({onSearchChange, placeholder}) => {
		return <input type="search" className="search-box" placeholder={placeholder} onChange={onSearchChange} />;
}

export default SearchBox