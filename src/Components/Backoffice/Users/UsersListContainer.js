import React from 'react'
import { Link } from 'react-router-dom'
import UsersList from './UsersList'
/* Importar los services para peticiones GET(obtener usuarios), PUT(editar usuario) y DELETE(eliminar usuario) */

const UsersListContainer = () => {
    /* Aquí ejecutariamos el service para obtener los usuarios y seteariamos esa info en un state o context*/

    const usersData = [
        {id:354, name:"Test", email:"test@alkemy.com"},
        {id:355, name:"testy1", email:"testy@mail.com"},
        {id:356, name:"testy2", email:"test@mail.com"}
    ] /* Borrar este array una vez integrado el service para peticion GET. */
    return (
        <div className="container">
            <div id="usersListContainer">
                <h3 className="headers">Lista de usuarios:</h3>
                <Link to='/backoffice/users/create'>
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        id="newUserButton"
                    >
                        Crear nuevo usuario
                    </button>
                </Link>
                <UsersList 
                    usersData={ usersData } /* Cambiar el nombre de "mockData" una vez integrado el service */
                />
            </div>
        </div>
    )
}

export default UsersListContainer
