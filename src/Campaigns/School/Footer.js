import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FooterSchool.css";
import { NavLink } from "react-router-dom";
import FooterRedirections from "./FooterRedirections";
import FooterNavLinks from "./FooterNavLinks";

const Footer = () => {

  const dataUrl = "http://ongapi.alkemy.org/api/organization";
  const [dataOrg, setDataOrg] = useState();

  useEffect(() => {

    const dataAsync = async () => {
      const dataInicial = await axios.get(dataUrl);
      const dataResult = await dataInicial.data.data;
      setDataOrg(dataResult);
    };
    dataAsync();
  }, []);

  return (
    <>
      {
        dataOrg
          ? <div className="footer-Padre-School">
            <img width="110px" src={dataOrg.logo} alt="logo-Ong" />
            <section className="container-Redes-Redireccion" >
              <div className="containter-Redes-Logo">
                <section className="footer-Logos">
                  <FooterRedirections dataOrg={dataOrg} />
                </section>
              </div>
              <div className="ocultar-Mostrar-NavLink">
                <NavLink className="navLink" to="/">Somos Más</NavLink>
              </div>
            </section>
            <section>
              <FooterNavLinks />
            </section>
          </div>
          : <p style={{ width: "100%", textAlign: "center" }}>Cargando</p>
      }
    </>
  );
};

export default Footer;