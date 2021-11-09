import React from 'react';
import { Link } from 'react-router-dom';

const slideListBackOffice = () => {
  const SlidesMockData = [
    {
      id: 2,
      name: 'Titulo  1',
      image: 'https://picsum.photos/id/1/100',
      due_date: '2021-11-06',
    },
    {
      id: 1,
      name: 'Titulo  2',
      image: 'https://picsum.photos/id/7/100',
      due_date: '2021-11-06',
    },
    {
      id: 3,
      name: 'Titulo   3',
      image: 'https://picsum.photos/id/20/100',
      due_date: '2021-11-02',
    },
    {
      id: 4,
      name: 'Titulo  3',
      image: 'https://picsum.photos/id/26/100',
      due_date: '2021-11-02',
    },
  ];

  return (
    <>
    <div className="row justify-content-center">
      <h1 className='mt-5'>Listado de Slides</h1> <Link to="/backoffice/create-slide" className="btn btn-primary col-2">Crear Slide</Link>
      </div>
      <div className='mt-5 container'>
        {SlidesMockData.map((slide) => (
          <div
            key={slide.id}
            className='d-flex shadow-lg rounded h-10 m-3 p-2 align-items-center justify-content-between'
          >
            <div className='d-flex align-items-center px-2'>
              <img
                src={slide.image}
                className='rounded'
                alt={slide.name}
                style={{ width: '5rem' }}
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
        ))}
      </div>
    </>
  );
};

export default slideListBackOffice;