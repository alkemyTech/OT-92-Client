import React from "react";
import "./Skeleton.css";

const Skeleton = ({ type, width, height }) => {
  //if width is defined, use it, otherwise use default width
  const widthStyle = width ? { width: `${width}px` } : {};
  //if height is defined, use it, otherwise use default height
  const heightStyle = height ? { height: `${height}px` } : {};
  const style = { ...widthStyle, ...heightStyle };

  const classes = `skeleton ${type}`;

  return <div className={classes} style={style}></div>;
};

export default Skeleton;
