import React from "react";
import "./Spinner.css";

const SpinnerCharge = () => {
  return (
    <div className="spinner-border text-info" style={{width:"7rem", height:"7rem"}} role="status"  id="spinner">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default SpinnerCharge;
