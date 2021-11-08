import React from 'react';
import './Donations.css';
import {useHistory} from 'react-router-dom';
const Donations = () => {
    const history = useHistory();
    const donate = 'Para nosotros es muy importante la ayuda que nos puedas dar, nos permite seguir creciendo y haciendo que cada vez podamos hacer mas por la educación y la nutrición de los chicos que lo necesitan. Te dejamos aca un link para que colabores con lo que puedas: ';
    return ( 
        <>
        <div className="container d-flex flex-column align-items-center">
            <h1 className="mt-5 Donations-title"> {donate} </h1>
            <a href="https://mpago.la/1CCtqMi"  target="_blank"> <button type="button" class="btn btn-primary ">Pagar</button> </a>
        </div>
        </>
     );
}
 
export default Donations;