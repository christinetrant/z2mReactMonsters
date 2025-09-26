import React, { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.style.css";

type SearchBoxProps = {
	className: string;
	placeholder?: string; // e.g. string || null
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, onChangeHandler, placeholder }: SearchBoxProps) => {
	return <input type="search" className={`search-box ${className}`} placeholder={placeholder} onChange={onChangeHandler} />;
};

export default SearchBox;
