import React from "react";
import "./ToysCampaign.css";
import { formatDuration, intervalToDuration } from "date-fns";
const Content = () => {
  let duration = intervalToDuration({
    start: new Date(),
    end: new Date(2021, 12, 21, 19, 0, 0),
  });
  return (
    <div className="row h-100 container w-100 ">
      <div className=" d-flex flex-column content-centered align-items-center justify-content-center my-auto w-100 col-xxl-8 offset-2">
        <div className="d-flex flex-row align-items-center w-100 justify-content-center"> 
        <img className="w-25 rounded-circle desktop-view m-4" src="/Logotipos campañas 2.jpg" alt="" />
        <div className="d-flex flex-column">
          <p className="paragraph-customize">en esta campaña llevaremos regalos para los niños de las escuelas del municipio de la matanza en visperas de la navidad.</p>
          <p className="paragraph-customize"> 21 / 12 / 21 a las 19:00hs.</p>
          </div>
        </div>
       
        <div className="d-flex flex-row align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center w-100">
         <p className="paragraph-customize"> nos encontramos en: </p>
          <p className="paragraph-customize">Escuela experimental Pedro Bores</p>
          </div>
          <img className="w-25 rounded desktop-view m-4" src="/Logotipos campañas.jpg" alt="" />
        
        </div>
        <p className="paragraph-customize tablet-view">
          Falta {duration.months} mes, {duration.days} dias, {duration.hours}{" "}
          horas,{duration.minutes} minutos,{duration.seconds} segundos{" "}
        </p>
      </div>
    </div>
  );
};

export default Content;
