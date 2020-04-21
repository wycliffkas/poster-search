import React from "react";

const Navigation = (props) => {
  const {
    loading,
    showPrev,
    showNext,
    handlePrevClick,
    handleNextClick,
  } = props;

  return (
    <div className="nav-link-container">
      <div
        className={`nav-link 
					${showPrev ? "show" : "hide"}
					${loading ? "greyed-out" : ""}`}
        onClick={handlePrevClick}
      >
        Prev
      </div>
      <div
        className={`nav-link 
					${showNext ? "show" : "hide"}
					${loading ? "greyed-out" : ""}
					`}
        onClick={handleNextClick}
      >
        Next
      </div>
    </div>
  );
};

export default Navigation;
