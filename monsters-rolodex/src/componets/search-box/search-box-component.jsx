import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
    <input type='search'  className="search-box" onChange={this.props.onChangeHandler}   placeholder="search monsters" />
  )
}
}
export default SearchBox;
