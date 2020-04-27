import React from "react";
import { NavLink } from "react-router-dom";
import { truncate } from "../utils/common";

const Poster = ({ thumbnail, id, title }) => (
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
        <NavLink to={`/posterDetails/${id}`} className="card-link">
          More Details
        </NavLink>
      </div>
    </div>
  </div>
);

export default Poster;
