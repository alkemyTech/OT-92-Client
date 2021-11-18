import axios from 'axios';
import React from 'react'
import {confirmAlert, errorAlert} from '../../Assets/Alerts/alerts'
import Button from 'react-bootstrap/Button';
import './Activities.css'

const ActivitiesListsComponents = ({ el, actividades, setActividades }) => {

    const eliminarTarea = (prop) => {

        const isDelete = window.confirm(`Estas seguro de querer eliminar la tarea "${prop.name}"`)

        if (isDelete) {
            try {
            axios.delete(`http://ongapi.alkemy.org/public/api/activities/${prop.id}`)
                .then(res => {

                    if (res.status === 200) {
                        actividades.map(el => {
                            const nuevaData = actividades.filter(el => {
                                return el.id !== prop.id
                            })
                            return setActividades(nuevaData)
                        })
                    }

                })}
                catch(err) {
                    errorAlert({title:"Error", text:`${err}`}) //here we implement the "errorAlert" function
                }                                             //to display an error If the request fails
        }

    }
    return (
        <>
            <tr>
                <td>{el.name}</td>
                <td className='td-Activities-Img'><img width="100px" style={{ float: "left" }} src={el.image} alt={el.name} /></td>
                <td className='td-Activities-Date'>{el.created_at}</td>
                <td><Button variant="primary" style={{ marginTop: "6%" }}>Editar</Button></td>
                <td>
                    <Button 
                        onClick={() => 
                        confirmAlert({               //here we implement the "confirmAlert" function to display
                            title:"¿Estás seguro?", //an alert to confirm If the user is sure 
                            text:"¿Estas seguro que deseas eliminar esta actividad?", 
                            time: "2000", })}>
                        Eliminar
                        </Button>
                </td>
            </tr>
        </>
    )
}

export default ActivitiesListsComponents
