import React, { useState } from 'react'
import "./Navbar.css";
import { Button } from 'react-bootstrap'
import { MdMenu } from 'react-icons/md'
import Sidebar from './Sidebar/Sidebar';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            <MdMenu />
        </Button>

        <Sidebar show={show} handleShow={handleShow}/>
        </>
    );
}

export default Navbar
