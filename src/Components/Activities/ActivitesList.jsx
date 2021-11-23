import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { errorAlert } from "../../Assets/Alerts/alerts";
import "./Activities.css";
import ActivitiesListsComponents from "./ActivitiesListsComponents";
import SpinnerCharge from "../../Assets/SpinnerComponent/SpinnerCharge";

const ActivitesList = () => {
  const [loading, setLoading] = useState(false);
  const [actividades, setActividades] = useState([]);
  const urlActivities = "http://ongapi.alkemy.org/public/api/activities";

  useEffect(() => {
    const obtenerActividades = async () => {
      try {
        setLoading(true);
        const datosPrincipal = await axios.get(urlActivities),
          actividadesData = await datosPrincipal.data.data;
        setActividades(actividadesData);
        setLoading(false);
            
      }  catch (err) {
        console.log(err);
        errorAlert({title:"error", text:"Ocurrió un error en las actividades"}); //here we implement the "errorAlert"
      }};                                                                         //function to display an error If
    //the request fails
    obtenerActividades();
  }, []);

  return (
    <>
      <div className='btn-Crear-Actividad'>
        <section className='section-Crear-Actividad'>
          <NavLink className='nav-Crear-Novedad' to="/backoffice/activities/create">
            <h2 className='btn-Crear-Tarea'>Crear Tarea</h2>
          </NavLink>
        </section>
      </div>
      <Container>
        <Table>
          <thead style={{ borderTop: "1px solid #dee2e6" }}>
            <tr>
              <th>Tarea</th>
              <th className='th-Activities-Img'>Imagen</th>
              <th className='th-Activities-Date'>Fecha de Creación</th>
            </tr>
          </thead>
          <tbody style={{ borderTop: "1px solid #dee2e6" }}>
            { loading ? <SpinnerCharge /> :
              <>
                {
                  actividades
                    ? actividades.map(el => {
                      return <ActivitiesListsComponents
                        activity={el} key={el.id}
                        actividades={actividades}
                        setActividades={setActividades}
                      />;
                    }
                    )
                    : <tr><td>Cargando</td></tr>
                }
              </>
            }
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ActivitesList;
