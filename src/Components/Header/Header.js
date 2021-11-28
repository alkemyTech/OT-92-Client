import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  console.log("location", location);

  const links = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Novedades",
      path: "/news"
    },
    {
      name: "Nosotros",
      path: "/nosotros",
    },
    {
      name: "Contacto",
      path: "/contacto",
    },
    {
      name: "Campaña Escolar",
      path: "/school-campaign",
    },
    {
      name: "Campaña de Juguetes",
      path: "/toys-campaign",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div style={{width:"100%"}} className="d-flex justify-content-between container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png"
              // width="10px"
              // height="200px"
              className="logo-Home-Header d-inline-block align-top"
              alt=""
            />
          </a>
          <div style={{width:"60%"}} className="d-flex justify-content-between align-items-center">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  to={link.path}
                  className="nav-link-Home"
                  style={{
                    color: location.pathname === link.path ? "red" : "black",
                    fontWeight: location.pathname === link.path ? "bold" : "normal",
                    borderBottom:
                      location.pathname === link.path
                        ? "2px solid red"
                        : "2px solid transparent",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
