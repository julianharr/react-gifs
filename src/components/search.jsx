import React, { Component } from 'react';


// eslint-disable-next-line react/prefer-stateless-function
class Search extends Component {
  // Create a function that calls the props passed to 'Search' in App.js
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  handleClick = (e) => {
    console.log(e);
    e.target.classList.toggle('clicked');
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onClick={this.handleClick}
        onChange={this.handleUpdate}
      />
    );
  }
}

export default Search;
