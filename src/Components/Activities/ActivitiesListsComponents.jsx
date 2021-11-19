import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import "./Activities.css";

const ActivitiesListsComponents = ({ el, actividades, setActividades }) => {

  const eliminarTarea = (prop) => {

    const isDelete = window.confirm(`Estas seguro de querer eliminar la tarea "${prop.name}"`);
    const url = process.env.REACT_APP_ACTIVITY + `/${prop.id}`;


    if (isDelete) {
      axios.delete(url)
        .then(res => {

          if (res.status === 200) {
            actividades.map(el => {
              const nuevaData = actividades.filter(el => {
                return el.id !== prop.id;
              });
              return setActividades(nuevaData);
            });
          }

        })
        .catch(err => {

          if (err.response) {

            let error = err.response.data.error,
              errorStatus = err.response.status;

            alert(`Error ${errorStatus}: ${error}`);

          }
          alert("Ocurrio un error, estamos trabajando en ello, intenta mas tarde");

        });
    }

  };
  return (
    <>
      <tr>
        <td>{el.name}</td>
        <td className='td-Activities-Img'><img width="100px" style={{ float: "left" }} src={el.image} alt={el.name} /></td>
        <td className='td-Activities-Date'>{el.created_at}</td>
        <td><Button variant="primary" style={{ marginTop: "6%" }}>Editar</Button></td>
        <td><Button onClick={() => eliminarTarea(el)} variant="danger" style={{ marginTop: "6%" }}>Eliminar</Button></td>
      </tr>
    </>
  );
};

export default ActivitiesListsComponents;
