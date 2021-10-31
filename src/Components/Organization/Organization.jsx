import React, { useState, useEffect } from 'react';
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

//   console.log(data);
  return (
    <div>
      <h1>Organization</h1>
      {serverError ? <p>{serverError}</p> : null}
      {data ? <p>{data.name}</p> : <p>Cargando...</p>}
    </div>
  );
};

export default Organization;
