import React from 'react'
import { Offcanvas } from 'react-bootstrap'



const Sidebar = (props) => {

    return (
        <Offcanvas show={props.show} onHide={props.handleShow}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Sidebar Title</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                List of routes
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Sidebar
