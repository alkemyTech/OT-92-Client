import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const history = useHistory();
  const [bar, setBar] = useState(false);
  return (
<div>
    <div onClick={() => setBar(!bar)} className="burguer">
        <div className={bar ? "line1" : "line1b"}></div>
        <div className={bar ? "line2" : "line2b"}></div>
        <div className={bar ? "line3" : "line3b"}></div>
      </div>
      <aside
        className={
          bar
            ? "bar-lateral"
            : "bar-active"
        }
        id="bar"
      >
    <div className="h-100 w-100">
      <ul className="d-flex flex-column justify-content-around customize-font w-100">
        <li onClick={() => history.push("/backoffice/activities")} className="customize-sections">Actividades</li>
        <li onClick={() => history.push("/backoffice/organization")} className="customize-sections">Organizacion</li>
        <li onClick={() => history.push("/backoffice/slides")} className="customize-sections">Slides</li>
        <li onClick={() => history.push("/backoffice/categories")} className="customize-sections">Categorias</li>
        <li onClick={() => history.push('/backoffice/memberslist')} className="customize-sections">Miembros</li>
        <li onClick={() => history.push('/backoffice/news/')} className="customize-sections">Noticias</li>
      </ul>
    </div>
    </aside>
    </div>
  );
};

export default Sidebar;
