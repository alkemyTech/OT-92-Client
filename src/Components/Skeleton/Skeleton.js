import React from 'react';
import './Skeleton.css';

const Skeleton = ({ type, width, height }) => {
  const widthStyle = width ? { width: `${width}px` } : {};
  const heightStyle = height ? { height: `${height}px` } : {};
  const style = { ...widthStyle, ...heightStyle };

  const classes = `skeleton ${type}`;

  return <div className={classes} style={style}></div>;
};

export default Skeleton;
