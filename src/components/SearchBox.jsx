import { Component } from "react";

class SearchBox extends Component {
  render() {
    const {onSearchChange, placeholder} = this.props;
    return (
        <input type="search" className="search-box" placeholder={placeholder} onChange={onSearchChange} />

    );
  }
}
export default SearchBox;