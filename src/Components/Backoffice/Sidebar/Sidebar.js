import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { sidebarData } from './sidebarData'



const Sidebar = (props) => {
    const data = sidebarData;
    console.log(data)

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
