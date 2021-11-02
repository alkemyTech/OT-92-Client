import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Organization = () => {
  const [serverError, setServerError] = useState(null);
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'http://ongapi.alkemy.org/public/api/organization',
        });
        setData(response.data.data);
      } catch {
        setServerError(
          'Algo salió mal. Por favor, actualice la página e intente de nuevo.'
        );
      }
    };

    getData();
  }, []);

  return (
    <div className="d-flex m-3 flex-column align-items-center">
      <h1>Organización</h1>
      <br />
      {serverError ? <p>{serverError}</p> : null}
      {!data ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h3>Nombre de la organización: </h3>
          <p>{data.name}</p>
          <hr />
          <h3>Descripción: </h3>
          <p>{data.short_description}</p>
          <hr />
          <h3>Logo:</h3>
          <img src={data.logo} alt={data.name} />
          <hr />
          <Link to="/backoffice/organization/edit" className="btn btn-primary">
            Editar
          </Link>
        </div>
      )}
    </div>
  );
};

export default Organization;
