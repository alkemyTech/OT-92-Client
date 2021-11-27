import React from "react";
import { Link } from "react-router-dom";

const Gracias = () => {
  return (
    <div>
      <h2>¡Muchas gracias por colaborar con nosotros!</h2>
      <Link to="/"><button type="button" className="btn btn-primary">Volver al Home</button></Link>
    </div>
  );
};

export default Gracias;
