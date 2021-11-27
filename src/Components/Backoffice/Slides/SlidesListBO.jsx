/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getSlicesApi } from "../../../store/backOffice/SlicesBackOffice";

import { getSlicesApi } from "../../../store/Slices/SlicesBackOffice";

import SlideComponent from "./SlideComponent";
import Button from "react-bootstrap/Button";

let timeBouncer;
const initialState = {
  dataSlice: ""
};
const SlideListBackOffice = () => {
  const dispatch = useDispatch();
  const [buscador, setbuscador] = useState(initialState);
  const apiPostStatus = useSelector(state => state.listSlice.list.list); // Estado de la store listSlice

  const buscadorBoton = () => { // Btn para buscar los slides
    (buscador.dataSlice.length > 3)
      ? dispatch(getSlicesApi(buscador.dataSlice))
      : dispatch(getSlicesApi());
  };

  const debounce = (callback, time) => { //funcion que controla las peticiones al endpoint
    window.clearTimeout(timeBouncer);
    timeBouncer = window.setTimeout(callback, time);
  };

  const formulario = (e) => { //actualizador de estado del input de busqueda
    setbuscador({
      ...buscador,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getSlicesApi()); // Esta funcion es async
  }, []);

  return (
    <>
      <div style={{width:"100%"}} className="row justify-content-center">
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ backgroundColor: "#9ac9fb" }}
        >
          <h1 style={{ color: "white" }}>Listado de Slides</h1>
          <Navbar className="py-5" style={{ justifyContent: "center", width: "50%" }} variant="dark">
            <Form className="d-flex" style={{ width: "100%" }}>
              <FormControl
                autoComplete="off"
                name="dataSlice"
                onChange={formulario}
                onInput={() => debounce(buscadorBoton, 500)}
                value={buscador.dataSlice}
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button onClick={buscadorBoton} variant="primary">Search</Button>
            </Form>
          </Navbar></div>
        <Link to="/backoffice/create-slide" className="btn btn-primary col-2 mt-5">Crear Slide</Link>
      </div>
      <div className='mt-5 container'>
        {
          apiPostStatus
            ? apiPostStatus.map(slide => <SlideComponent slide={slide} key={slide.id} />)
            : <h1 className='text-center'>Cargando</h1>
        }
      </div>
    </>
  );
};

export default SlideListBackOffice;
