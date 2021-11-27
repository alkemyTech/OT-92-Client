import React, { lazy, Suspense } from "react";
import "./Donations.css";
import ButtonMercadoPago from "./SDK-MercadoPago/ButtonMercadoPago";

const Donations = () => {
  return ( 
    <>
      <div className="container d-flex flex-column align-items-center">
        <h3>Colaborá con nosotros</h3>
        <ButtonMercadoPago />
      </div>
    </>
  );
};

export default Donations;
