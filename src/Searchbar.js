import React from "react";
import "./Searchbar.css";

class searchbar extends React.Component {
  state = { term: "" };

  oninputechange = (event) => {
    this.setState({ term: event.target.value });
  };

  onformsubmit = (event) => {
    event.preventDefault();
    this.props.onformsubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.onformsubmit} className="form-serach">
          <input
            type="text"
            value={this.state.term}
            onChange={this.oninputechange}
            className="input-search"
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}

export default searchbar;
