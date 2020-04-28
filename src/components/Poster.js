import React from "react";
import { truncate } from "../utils/common";
import { NavLink } from "react-router-dom";

const Poster = ({ thumbnail, id, title, onFetchSinglePoster }) => (
  <div className="col s4" style={{ margin: "20px 0" }}>
    <div className="card" style={{ width: "18rem", textAlign: "center" }}>
      <div style={{ margin: "auto" }}>
        <img
          src={thumbnail}
          className="bd-placeholder-img card-img-top"
          alt="poster"
        />
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">{truncate(title, 25)}</li>
      </ul>
      <div className="card-body">
        <NavLink
          className="card-link"
          to="/"
          onClick={() => onFetchSinglePoster(id)}
        >
          More Details
        </NavLink>
      </div>
    </div>
  </div>
);

export default Poster;
