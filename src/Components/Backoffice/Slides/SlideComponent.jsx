import React from "react";

const SlideComponent = ({ slide }) => {
  return (
    <div
      key={slide.id}
      className='d-flex shadow-lg rounded h-10 m-3 p-2 align-items-center justify-content-between'
    >
      <div className='d-flex align-items-center px-2'>
        <img
          height="100px"
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
        <button className='btn btn-primary mr-3'>Editar</button>
        <button className='btn btn-danger'>Eliminar</button>
      </div>
    </div>
  );
};

export default SlideComponent;
