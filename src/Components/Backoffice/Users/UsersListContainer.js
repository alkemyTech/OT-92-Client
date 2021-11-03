import React from 'react'
import UsersList from './UsersList'
/* Importar los services para peticiones GET(obtener usuarios), PUT(editar usuario) y DELETE(eliminar usuario) */

const UsersListContainer = () => {
    /* Aquí ejecutariamos el service para obtener los usuarios y seteariamos esa info en un state o context*/

    const mockData = [
        {"id":354,"name":"Test","email":"test@alkemy.com"},
        {"id":355,"name":"testy1","email":"testy@mail.com"},
        {"id":356,"name":"testy2","email":"test@mail.com"}
    ] /* Borrar este array una vez integrado el service para peticion GET. */

    return (
        <div className="container">
            <div id="usersListContainer">
                <h3 className="headers">Lista de usuarios:</h3>
                <UsersList 
                    usersData={ mockData } /* Cambiar el nombre de la prop una vez integrado el service */
                />
            </div>
        </div>
    )
}

export default UsersListContainer
