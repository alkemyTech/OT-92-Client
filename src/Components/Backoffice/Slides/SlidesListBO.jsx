/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSlicesApi } from "../../../store/backOffice/SlicesBackOffice";
import SlideComponent from "./SlideComponent";

const SlideListBackOffice = () => {
  const dispatch = useDispatch();
  const apiPostStatus = useSelector((state) => state.listSlice.list[0]); // Estado de la store listSlice

  useEffect(() => {
    dispatch(getSlicesApi()); // Esta funcion es async y obtiene los datos de una api
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        <h1 className="mt-5">Listado de Slides</h1>{" "}
        <Link to="/backoffice/create-slide" className="btn btn-primary col-2">
          Crear Slide
        </Link>
      </div>
      <div className="mt-5 container">
        {apiPostStatus ? (
          apiPostStatus.data.map((slide) => (
            <SlideComponent slide={slide} key={slide.id} />
          ))
        ) : (
          <h1 className="text-center">Cargando</h1>
        )}
      </div>
    </>
  );
};

export default SlideListBackOffice;
