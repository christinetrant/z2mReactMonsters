import React, { ChangeEvent, ChangeEventHandler } from 'react'
import './search-box.style.css'

// interface ISearchBoxProps extends IChangeHandlerProps {
// 	className: string;
// 	placeholder?: string // e.g. string || null
// }

// interface IChangeHandlerProps {
// 	onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
	className: string;
	placeholder?: string; // e.g. string || null
	// onChangeHandler: (a: string) => void
	// onChangeHandler: ChangeEventHandler<HTMLInputElement>; // This will return void
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, onChangeHandler, placeholder}: SearchBoxProps) => {
		return <input type="search" className={`search-box ${className}`} placeholder={placeholder} onChange={onChangeHandler} />;
}

export default SearchBox