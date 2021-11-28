import React from "react";
import Title from "../Title";
import { TwitterTweet } from "react-social-plugins";
import MembersList from "./MembersList";

const About = () => {
  return (
    <>
      <div className="mt-3">
        <Title content={{ title: "Nosotros" }} />

      </div>
      <div className="p-5 d-flex flex-column align-items-center">
        <div className='border rounded m-2 p-5'>
          <p>Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. ﻿ Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.</p>
        </div>
        <div className="d-flex flex-column align-items-center m-5">

          <MembersList />
        </div>
        <div className="d-flex mt-5 justify-content-center">
        
          <div>
        
            <TwitterTweet
              tweetId="1451372239375540226"
              theme="light"
              width={325}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
