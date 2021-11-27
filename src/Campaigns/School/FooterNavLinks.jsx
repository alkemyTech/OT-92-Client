import React from "react";
import { NavLink } from "react-router-dom";

const FooterNavLinks = () => {
  return (
    <div className="navegador-Footer-Nav">
      <div className="column-Left-Navlinks">
        <NavLink className="navLinks-Navegacion" to="/donaciones">Donaciones</NavLink>
        <NavLink className="navLinks-Navegacion" to="/news">Novedades</NavLink>
      </div>
      <div className="column-Right-Navlinks">
        <NavLink className="navLinks-Navegacion" to="/school-campaign">Campaña Escolar</NavLink>
        <NavLink className="navLinks-Navegacion" to="/activities">Actividades</NavLink>
        <NavLink className="navLinks-Navegacion" to="/contacto">Contacto</NavLink>
      </div>
    </div>
  );
};

export default FooterNavLinks;
