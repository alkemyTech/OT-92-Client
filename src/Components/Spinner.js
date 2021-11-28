import React from "react";
import Loader from "react-loader-spinner";

const Spinner = ({ type = "TailSpin", color = "#DB5752", height = 100, width = 100}) => {
  return <Loader type={type} color={color} height={height} width={width} />;
};

export default Spinner;
