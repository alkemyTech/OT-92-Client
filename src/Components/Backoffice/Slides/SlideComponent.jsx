import React from "react";
import { slidesService } from "../../../Services/publicApiService";
import { Link } from "react-router-dom";

const SlideComponent = ({slide}) => {
  return (
    <div
      key={slide.id}
      className='d-flex shadow-lg rounded h-10 m-3 p-2 align-items-center justify-content-between'
    >
      <div className='d-flex align-items-center px-2'>
        <img
          src={slide.image}
          className='rounded'
          alt={slide.name}
          style={{ width: "5rem" }}
        />
        <div className="row">
          <h4 className='ml-3'>{slide.name}</h4>
          <p className='ml-2 mt-2'>{slide.due_date}</p>
        </div>
      </div>
      <div className='p-1'>
        <Link to={`/backoffice/slides-form/${slide.id}`}>
          <button className='btn btn-primary mr-3'>
            Editar
          </button>
        </Link>
        <button className='btn btn-danger' onClick={() => slidesService("delete", slide)}>Eliminar</button>
      </div>
    </div>
  );
};

export default SlideComponent;
