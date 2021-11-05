import React from 'react';
import { Link } from 'react-router-dom';
import '../FormStyles.css';

const CategoriesListBackoffice = () => {
  //mock data
  const categoriesMock = [
    {
      id: 2,
      name: 'Categoria 1',
      createdAt: '2020-01-01',
    },
    {
      id: 1,
      name: 'Categoria 2',
      createdAt: '2020-01-02',
    },
    {
      id: 3,
      name: 'Categoria 3',
      createdAt: '2020-01-03',
    },
    {
      id: 4,
      name: 'Categoria 4',
      createdAt: '2020-01-03',
    },
  ];

  return (
    <>
      <div className='d-flex align-items-center flex-column justify-content-around flex-lg-row'>
        <h1 className='mt-5'>Listado de categorias</h1>
        <div className='mt-5 m-auto'>
          <Link to='/backoffice/categories/create' className='btn btn-success'>
            Crear categoria
          </Link>
        </div>
      </div>
      <div className='mt-5 container'>
        {categoriesMock.map((news) => (
          <div
            key={news.id}
            className='d-flex rounded bg-grey h-10 m-3 p-2 align-items-center justify-content-between flex-column flex-lg-row'
          >
            <div className='d-flex align-items-center px-2'>
              <div className='d-flex align-items-center'>
                <h4 className='ml-3'>{news.name}</h4>
                <p className='ml-3 mt-2'>{news.createdAt}</p>
              </div>
            </div>
            <div className='p-1'>
              <button className='btn btn-secondary mr-3'>Editar</button>
              <button className='btn btn-danger'>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesListBackoffice;
