import React from 'react';
import './index.css'

const NotFound = () => (
 <div className="page-wrap d-flex flex-row align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <span className="display-1 d-block">404</span>
                <div className="display-5 d-block">¡Oopsss!</div>
                <div className="mb-4 lead">La página que buscas no existe.</div>
                <a href="/" className="btn btn-link">Volver al Inicio</a>
            </div>
        </div>
    </div>
</div>

);

export default NotFound;