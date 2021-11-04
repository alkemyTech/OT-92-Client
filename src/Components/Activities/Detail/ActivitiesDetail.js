import React from 'react';
import { useParams } from 'react-router-dom';
import './ActivitiesDetail.css';
<<<<<<< HEAD
import { activitiesService } from '../../../Services/privateApiService';
=======
import ActivitiesDetailContent from "./ActivitiesDetailContent";

>>>>>>> main
const ActivitiesDetail = () => {
  let { id: paramsId } = useParams();

  const activities = [
    {
<<<<<<< HEAD
      id: '1',
      title: 'Recorrido por el comedor',
      body: 'se recorre el comedor del area central, se le pregunta a la gente que es lo que mas le gusta comer y comimos de postre unos alfajores donados por Havanna.',
    },
    {
      id: '2',
      title: 'Visitas clases de ingles',
      body: 'se visita a los alumnos de primaria en sus clases de ingles. ',
    },
    {
      id: '3',
      title: 'torneo de futbol 5 ',
      body: 'los chicos que cursan el nivel secundario organizaron un torneo de futbol 5 el dia domingo.',
=======
      id: "1",
      title: "Recorrido por el comedor",
      body: "<p>Se recorre el comedor del area central, se le pregunta a la gente que es lo que mas le gusta comer y comimos de postre unos alfajores donados por Havanna.</p>",
    },
    {
      id: "2",
      title: "Visitas clases de ingles",
      body: "<p>Se visita a los alumnos de primaria en sus clases de ingles.</p>",
    },
    {
      id: "3",
      title: "Torneo de futbol 5 ",
      body: "<p>Los chicos que cursan el nivel secundario organizaron un torneo de futbol 5 el dia domingo.</p>",
>>>>>>> main
    },
  ];
  const paramsActivity = activities.filter(
    (activities) => activities.id === paramsId
  );
  return (
    <>
      <div>
        {paramsActivity[0] ? (
<<<<<<< HEAD
          <div className='container d-flex flex-column justify-items-center mt-5'>
            <h1 className=' h1 w-100 text-center Activities-title'>
              {paramsActivity[0].title}
            </h1>
            <h1 className='h3 Activities-body text-justify'>
              {paramsActivity[0].body}
            </h1>
=======
          <div className="container d-flex flex-column justify-items-center mt-5">
            <h1 className=" h1 w-100 text-center Activities-title">{paramsActivity[0].title}</h1>
           {/* Anterior contenido sin mi componente  <h1 className="h3 Activities-body text-justify">{paramsActivity[0].body}</h1> */}
            <ActivitiesDetailContent 
              body={paramsActivity[0].body}
              paramsId={paramsId}
            />
>>>>>>> main
          </div>
        ) : (
          <div className='mt-5 container'>
            <h1 className='Activities-title '>
              Oh Oh! hemos tenido problemas con esa actividad :({' '}
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default ActivitiesDetail;
