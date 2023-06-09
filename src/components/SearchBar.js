import React from "react";

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search Pokémon..."
        value={value}
        onChange={onChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
