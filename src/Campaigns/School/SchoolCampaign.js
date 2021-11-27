import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Content from "./Content";
import Footer from "./Footer";

const SchoolCampaign = () => {
  return (
    <div style={{width:"100%"}}>
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
};
 
export default SchoolCampaign;