import React from 'react'
import { IoTrashSharp, IoPencilSharp } from "react-icons/io5";

const UsersList = ({ usersData }) => {

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover" id="tableResponsive">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className="actions_container">
                                        <button type="button" className="btn btn-info btn-sm edit_button">
                                            <IoPencilSharp />
                                        </button>{' '}
                                        <button type="button" className="btn btn-danger btn-sm delete_button">
                                            <IoTrashSharp />
                                        </button>
                                    </div>
                                    {/* service PUT con user.id como parametro */}
                                    {/* service DELETE con user.id como parametro */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersList
