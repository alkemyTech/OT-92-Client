import React from "react";
import { useHistory } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const history = useHistory();
  return (

    <div className="h-100 w-100">
      <ul className="d-flex flex-column justify-content-around customize-font">
        <li onClick={() => history.push("/backoffice/activities")} className="customize-sections">Actividades</li>
        <li onClick={() => history.push("/backoffice/organization")} className="customize-sections">Organizacion</li>
        <li onClick={() => history.push("/backoffice/slides")} className="customize-sections">Slides</li>
        <li onClick={() => history.push("/backoffice/categories")} className="customize-sections">Categorias</li>
        <li onClick={() => history.push('/backoffice/memberslist')} className="customize-sections">Miembros</li>
        <li onClick={() => history.push('/backoffice/news/')} className="customize-sections">Noticias</li>
      </ul>
    </div>
  );
};

export default Sidebar;
