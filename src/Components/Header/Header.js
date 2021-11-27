import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log("location", location);

  const links = [
    {
      name: "Inicio",
      path: "/",
      style: {
        color: location.pathname === "/" ? "white" : "black",
        fontWeight: location.pathname === "/" ? "bold" : "normal",
        borderBottom:
          location.pathname === "/"
            ? "2px solid white"
            : "2px solid transparent",
      },
    },
    {
      name: "Nosotros",
      path: "/nosotros",
      style: {
        color: location.pathname === "/nosotros" ? "white" : "black",
        fontWeight: location.pathname === "/nosotros" ? "bold" : "normal",
        borderBottom:
          location.pathname === "/nosotros"
            ? "2px solid white"
            : "2px solid transparent",
      },
    },
    {
      name: "Contacto",
      path: "/contacto",
      style: {
        color: location.pathname === "/contacto" ? "white" : "black",
        fontWeight: location.pathname === "/contacto" ? "bold" : "normal",
        borderBottom:
          location.pathname === "/contacto"
            ? "2px solid white"
            : "2px solid transparent",
      },
    },
    {
      name: "Campaña Escolar",
      path: "/school-campaign",
      style: {
        color: location.pathname === "/school-campaign" ? "white" : "black",
        fontWeight:
          location.pathname === "/school-campaign" ? "bold" : "normal",
        borderBottom:
          location.pathname === "/school-campaign"
            ? "2px solid white"
            : "2px solid transparent",
      },
    },
    {
      name: "Campaña de Juguetes",
      path: "/toys-campaign",
      style: {
        color: location.pathname === "/toys-campaign" ? "white" : "black",
        fontWeight: location.pathname === "/toys-campaign" ? "bold" : "normal",
        borderBottom:
          location.pathname === "/toys-campaign"
            ? "2px solid white"
            : "2px solid transparent",
      },
    },
  ];

  return (
    <div style={{width: "100vw"}}>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="d-flex justify-content-between container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <div className="d-flex">
            {links.map((link, index) => {
              return (
                <a
                  className="nav-link"
                  key={index}
                  href={link.path}
                  style={link.style}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
