import React, { lazy, Suspense } from "react";
import "./Donations.css";
import ButtonMercadoPago from "./SDK-MercadoPago/ButtonMercadoPago";

const Donations = () => {
  return ( 
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="border rounded p-4 my-5">
          <h3 className="my-3 text-center">Colaborá con nosotros</h3>
          <ButtonMercadoPago />
        </div>
      </div>
    </>
  );
};

export default Donations;
