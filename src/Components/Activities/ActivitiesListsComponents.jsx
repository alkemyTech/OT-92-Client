import axios from "axios";
import React from "react";
import {confirmAlert, errorAlert} from "../../Assets/Alerts/alerts";
import Button from "react-bootstrap/Button";
import "./Activities.css";

const ActivitiesListsComponents = ({ activity, actividades, setActividades }) => {

  const handlerDelete = () => {
    const url = process.env.REACT_APP_ACTIVITY + `/${activity.id}`;
    axios.delete(url)
      .then(res => {
        if (res.status === 200) {
          actividades.map(el => {
            const nuevaData = actividades.filter(el => {
              return el.id !== activity.id;
            });
            return setActividades(nuevaData);
          });
        }
      })
      .catch(err => {
        errorAlert({title:"Error", text:`${err}`});
      });
  };
  
  return (
    <tr>
      <td>{activity.name}</td>
      <td className='td-Activities-Img'><img width="100px" style={{ float: "left" }} src={activity.image} alt={activity.name} /></td>
      <td className='td-Activities-Date'>{activity.created_at}</td>
      <td><Button variant="primary" style={{ marginTop: "6%" }}>Editar</Button></td>
      <td>
        <Button 
          onClick={() => 
            confirmAlert({               //here we implement the "confirmAlert" function to display
              title:"¿Estás seguro?", //an alert to confirm If the user is sure 
              text:"¿Estas seguro que deseas eliminar esta actividad?", 
              time: "2000",
              action: handlerDelete
            })}>
            Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default ActivitiesListsComponents;
