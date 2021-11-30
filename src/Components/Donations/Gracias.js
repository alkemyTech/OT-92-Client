import React from "react";
import { Link } from "react-router-dom";

const Gracias = () => {
  return (
    <div className="border rounded p-4 m-5 d-flex flex-column justify-content-center align-items-center">
      <h2>¡Muchas gracias por colaborar con nosotros!</h2>
      <Link to="/"><button type="button" className="btn btn-primary my-4">Volver al Home</button></Link>
    </div>
  );
};

export default Gracias;
