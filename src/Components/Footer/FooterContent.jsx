import React from "react";
import { NavLink } from "react-router-dom";
import facebookIcono from "../../Assets/fb_icon-icons.com_65434.png";
import instagramLogo from "../../Assets/instagramLogo.png";
import twitterLogo from "../../Assets/twitterLogo.png";
import linkedinLogo from "../../Assets/linkedinLogo.png";
import "./FooterPrincipal.css";

const FooterContent = ({ dataFooter }) => {
  return (
    <section style={{width:"100%"}}>
      <div className="padre-Footer-Componente">
        <section className="contenedor-Columnas-Footer">
          <section className="nombre-Logo-Empresa">
            <img src={dataFooter.logo} alt={dataFooter.name} />
          </section>
          <section className="navegador-Footer-Nav">
            <div className="column-Left-Navlinks">
              <NavLink className="navLinks-Navegacion" to="/donaciones">Donaciones</NavLink>
              <NavLink className="navLinks-Navegacion" to="/news">Novedades</NavLink>
            </div>
            <div className="column-Right-Navlinks">
              <NavLink className="navLinks-Navegacion" to="/school-campaign">Campaña Escolar</NavLink>
              <NavLink className="navLinks-Navegacion" to="/contacto">Contacto</NavLink>
            </div>
          </section>
          <section className="contenedor-Redes-Sociales">
            <a className="links-Redes-Sociales" href="https://www.facebook.com/Somos_Más">
              <img className="iconos-Redes-Sociales" src={facebookIcono} alt="icono-Facebook" />
              <p>www.facebook.com/Somos_Más</p>
            </a>
            <a className="links-Redes-Sociales" href="https://www.linkedin.com/company/somosmas">
              <img className="iconos-Redes-Sociales" src={linkedinLogo} alt="logo-Instagram" />
              <p>www.linkedin.com/company/somosmas</p>
            </a>
            <a className="links-Redes-Sociales" href="https://www.instagram.com/SomosMás">
              <img className="iconos-Redes-Sociales" src={instagramLogo} alt="" />
              <p>www.instagram.com/SomosMás</p>
            </a>
            <a className="links-Redes-Sociales" href="https://www.twitter.com/somosmas">
              <img className="iconos-Redes-Sociales" src={twitterLogo} alt="" />
              <p>www.twitter.com/somosmas</p>
            </a>
          </section>
        </section>
        <p className="derechos-Reservados">Copyright © Todos los derechos reservados</p>
      </div>
    </section>
  );
};

export default FooterContent;
