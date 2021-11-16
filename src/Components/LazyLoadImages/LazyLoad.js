import React,{Suspense} from "react";
import "./LazyLoad.css";

const LazyLoad = ({image}) => {

  return ( 
    <img src={image}  />
  );
};
 
export default LazyLoad;
