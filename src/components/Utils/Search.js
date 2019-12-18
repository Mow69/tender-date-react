import React, { Component } from 'react';

class Search extends Component {
  render = () => {
    const { handleChange, searchTerm } = this.props;

    return (
      <div className="row">
        <div className="col">
            <form action="javascript:void(0)">
                <input className="uk-input uk-form-width-small"type="text"
                       onChange={handleChange}
                       value={searchTerm}
                       placeholder="Search Love..."
                />
                <button className="uk-button uk-button-default">SEARCH</button>
            </form>
        </div>
      </div>
    );
  }
}

export default Search;

