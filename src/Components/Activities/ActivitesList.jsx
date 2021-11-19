import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Activities.css";
import ActivitiesListsComponents from "./ActivitiesListsComponents";

const ActivitesList = () => {

  const [actividades, setActividades] = useState();
  const urlActivities = "http://ongapi.alkemy.org/public/api/activities";

  useEffect(() => {
    const obtenerActividades = async () => {
      const datosPrincipal = await axios.get(urlActivities),
        actividadesData = await datosPrincipal.data.data;
      setActividades(actividadesData);
    };
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
            {
              actividades
                ? actividades.map(el => {
                  return <ActivitiesListsComponents
                    el={el} key={el.id}
                    actividades={actividades}
                    setActividades={setActividades}
                  />;
                }
                )
                : <tr><td>Cargando</td></tr>
            }
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ActivitesList;
