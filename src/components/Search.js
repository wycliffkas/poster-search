import React from "react";
import Loader from "../assets/images/loader.gif";

const Search = ({ loading, message, query, onChangeHandler }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        paddingTop: "20px",
        flexDirection: "column",
      }}
    >
      <label htmlFor="search" className="search-label">
        <input
          type="text"
          value={query}
          name="query"
          placeholder="search.."
          id="search-text"
          onChange={onChangeHandler}
        />
        <i className="fas fa-search search-icon" />
      </label>

      <img
        src={Loader}
        className={`search-loading ${loading ? "show" : "hide"}`}
        alt="loader"
      />
      <div>{message && <p className="message">{message}</p>}</div>
    </div>
  );
};

export default Search;
