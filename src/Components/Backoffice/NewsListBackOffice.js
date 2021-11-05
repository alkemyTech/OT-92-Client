import React from 'react';
import { Link } from 'react-router-dom';
import '../FormStyles.css';

const NewsListBackOffice = () => {
  //mock data
  const newsMock = [
    {
      id: 2,
      name: 'Titulo de prueba1',
      image: 'https://picsum.photos/id/1/100',
      createdAt: '2020-01-01',
    },
    {
      id: 1,
      name: 'Titulo de prueba2',
      image: 'https://picsum.photos/id/7/100',
      createdAt: '2020-01-02',
    },
    {
      id: 3,
      name: 'Titulo de prueba3',
      image: 'https://picsum.photos/id/20/100',
      createdAt: '2020-01-03',
    },
    {
      id: 4,
      name: 'Titulo de prueba3',
      image: 'https://picsum.photos/id/26/100',
      createdAt: '2020-01-03',
    },
  ];

  return (
    <>
      <div className='d-flex align-items-center flex-column justify-content-around flex-lg-row'>
        <h1 className='mt-5'>Listado de novedades</h1>

        <div className='mt-5 m-auto'>
          <Link to='/backoffice/news/create' className='btn btn-success'>
            Crear noticia
          </Link>
        </div>
      </div>
      <div className='mt-5 container'>
        {newsMock.map((news) => (
          <div
            key={news.id}
            className='d-flex rounded bg-grey h-10 m-3 p-2 align-items-center justify-content-between flex-column flex-lg-row'
          >
            <div className='d-flex align-items-center px-2'>
              <div className='d-flex align-items-center'>
                <img
                  src={news.image}
                  className='rounded'
                  alt={news.name}
                  style={{ width: '5rem' }}
                />
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

export default NewsListBackOffice;
