import React, { useState, useEffect } from "react";
import useDebounce from "../../custom-hook/useDebounce";
import "../Search/index.css";
import { propTypes } from "react-bootstrap/esm/Image";

const Search = ({ searchTerm }) => {

  // State and setter for search term
  const setSearchTerm = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  // State and setter for search results
  const [results, setResults] = useState([]);

  // State for search status (whether there is a pending API request)
  const [isSearching, setIsSearching] = useState(false);

  // Search every 5ms
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // We use useEffect since this is an asynchronous action
  useEffect(
    () => {
      // user has entered something in input
      if (debouncedSearchTerm) {
        // TODO
      } else {
        setResults([]);
      }
    },
    // This is the useEffect input array
    [debouncedSearchTerm]
  );

  return (
    <div className="search-item">
      <input
        placeholder="Search..."
        className="search"
        onChange={handleChange}
        value={searchTerm}
      />

      {isSearching && <div>Searching ...</div>}

    </div>
  );
}

Search.propTypes = {
  searchTerm: propTypes.string,
};
Search.defaultProps = {
  searchTerm: "",
};

export default Search;
