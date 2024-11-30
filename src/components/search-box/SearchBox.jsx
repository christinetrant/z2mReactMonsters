import { Component } from "react";
import './search-box.style.css'
class SearchBox extends Component {
	render() {
			const { onSearchChange, placeholder } = this.props;
			return <input type="search" className="search-box" placeholder={placeholder} onChange={onSearchChange} />;
	}
}
export default SearchBox;
