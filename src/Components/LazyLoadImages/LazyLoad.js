import React from 'react';
import './LazyLoad.css';

const LazyLoad = ({image}) => {

  return ( 
    <img style={{width:"100%", height:"380px"}} src={image} alt="" />
  );
};
 
export default LazyLoad;
