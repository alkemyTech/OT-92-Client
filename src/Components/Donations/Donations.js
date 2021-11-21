/* eslint-disable no-unused-vars */
import React,{lazy, Suspense} from "react";
import "./Donations.css";
const Donations = () => {
  const anImage =  "https://www.marketplace.org/wp-content/uploads/2020/12/ppllikewfh.jpg?fit=2880%2C1620";
  const donate = "Para nosotros es muy importante la ayuda que nos puedas dar, nos permite seguir creciendo y haciendo que cada vez podamos hacer mas por la educación y la nutrición de los chicos que lo necesitan. Te dejamos aca un link para que colabores con lo que puedas: ";
  return ( 
    <>
      <div className="container d-flex flex-column align-items-center">
        <h1 className="mt-5 Donations-title"> {donate} </h1>
        <div className="d-flex justify-content-around w-100 mt-4 flex-wrap">
          <a href="https://mpago.la/1CCtqMi"  target="_blank" rel="noreferrer"> <button type="button" class="btn btn-primary p-3 button-text btn-lg ">$ 500</button> </a>
          <a href="https://mpago.la/1haGpy4"  target="_blank" rel="noreferrer"> <button type="button" class="btn btn-primary p-3 button-text btn-lg">$1000</button> </a>
          <a href="https://mpago.la/1NB9QoG"  target="_blank" rel="noreferrer"> <button type="button" class="btn btn-primary p-3 button-text btn-lg">$5000</button> </a>
          <a href="https://mpago.la/1UVV6X6"  target="_blank" rel="noreferrer"> <button type="button" class="btn btn-primary p-3 button-text btn-lg">$10000</button> </a>
        </div>
      </div>
    </>
  );
};

export default Donations;