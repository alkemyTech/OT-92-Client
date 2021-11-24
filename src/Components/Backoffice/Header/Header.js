import React from 'react';
import './Header.css'
const Header = () => {
    return ( 
        <div className="d-flex flex-row justify-content-around navbar-background align-items-center w-100">
        <img className="ml-0" src="/LOGO-SOMOS MAS (1).png" alt="logo" />
        <h1 className="header-title ml-0 mr-4"> vista de Administrador </h1>
        </div>
     );
}
 
export default Header;