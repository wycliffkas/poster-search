import React from "react";
import { dateFormator } from "../utils/common";
const PosterDetails = ({
  title,
  thumbnail,
  authors,
  keywords,
  upload,
  abstract,
}) => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-8 border">
          <img src={thumbnail} alt="poster" className="medium_poster" />
        </div>
        <div class="col-md-4 border">
          <p className="p-details">
            <strong>Title:</strong> {title}
          </p>
          <p className="p-details">
            <strong>Authors:</strong> {authors}
          </p>
          <p className="p-details">
            <strong>Keywords:</strong> {keywords}
          </p>
          <p className="p-details">
            <strong>Submiited At: </strong>
            {dateFormator(upload)}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 border">
          <h5 className="p-details">
            <strong>Paper Abstract</strong>
          </h5>
          <p>{abstract}</p>
        </div>
      </div>
    </div>
  );
};

export default PosterDetails;
