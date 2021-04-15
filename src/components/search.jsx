import React, { Component } from 'react';


// eslint-disable-next-line react/prefer-stateless-function
class Search extends Component {
  // Create a function that calls the props passed to 'Search' in App.js
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div className="form-search">
        <input
          type="text"
          className="form-control form-search"
          onChange={this.handleUpdate}
        />
      </div>
    );
  }
}

export default Search;
