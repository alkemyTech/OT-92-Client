import React from "react";

export default function datasList() {
  const data = [
    {
      cellphone: "1160112988",
      facebook_url: "www.facebook.com/Somos_Más",
      linkedin_url: "www.linkedin.com/company/somosmas",
      instagram_url: "www.instagram.com/SomosMás",
      twitter_url: "www.twitter.com/somosmas",
    }
  ];

  return (

    <div>
      {data.map(data => {
        return (
          <div className="container">
            <div>
              <div className="card-body">
                <p>Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y 
                                papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de 
                                inserción social. Uniendo las manos de todas las familias, las que viven en el barrio
                                y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos.
                                ﻿ Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de
                                dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la
                                comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un centro
                                comunitario que acompaña a más de 700 personas a través de las áreas de: Educación,
                                deportes, primera infancia, salud, alimentación y trabajo social.</p>
                <h6>Celular: {data.cellphone}</h6>
                <h6>Facebook: <a href="www.facebook.com/Somos_Más">{data.facebook_url}</a></h6>
                <h6>LinkedIn: <a href="www.linkedin.com/company/somosmas">{data.linkedin_url}</a></h6>
                <h6>Instagram: <a href="www.instagram.com/SomosMás" >{data.instagram_url}</a></h6>
                <h6>Twitter: <a href="www.twitter.com/somosmas" >{data.twitter_url}</a></h6>
              </div>
            </div>
          </div>    
        );
      })}
    </div>
  );

}     