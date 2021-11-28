import React, { Suspense, lazy } from "react";
import "../../Components/LazyLoadImages/LazyLoad.css";
import "./ToysCampaign.css";
import { formatDuration, intervalToDuration } from "date-fns";
const LazyLoad = lazy(() =>
  import("../../Components/LazyLoadImages/LazyLoad.js")
);
const Content = () => {
  let duration = intervalToDuration({
    start: new Date(),
    end: new Date(2021, 12, 21, 19, 0, 0),
  });
  return (


    <div className="row h-100 container w-100 body">
      <div className=" d-flex flex-column content-centered align-items-center justify-content-center my-auto w-100 ">
        <div className="d-flex flex-row align-items-center w-100 justify-content-center">
          <Suspense
            fallback={
              <div class="lds-dual-ring w-100 d-flex justify-content-center"></div>
            }
          >
            <img
              className="w-25 rounded-circle desktop-view m-4"
              src="/Logotipos campañas 2.jpg"
              alt=""
            />
          </Suspense>
          <div className="d-flex flex-column">
            <p className="paragraph-customize">
              En esta campaña llevaremos regalos para los niños de las escuelas
              del municipio de la matanza en visperas de la navidad.
            </p>
            <p className="paragraph-customize"> 21 / 12 / 21 a las 19:00hs.</p>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <p className="paragraph-customize"> nos encontramos en: </p>
            <p className="paragraph-customize">
              Escuela experimental Pedro Bores
            </p>
          </div>
          <Suspense
            fallback={
              <div class="lds-dual-ring w-100 d-flex justify-content-center"></div>
            }
          >
            <img
              className="w-25 rounded desktop-view m-4"
              src="/Logotipos campañas.jpg"
              alt=""
            />
          </Suspense>
        </div>
        <p className="paragraph-customize tablet-view">
          Falta {duration.months} mes, {duration.days} dias, {duration.hours}{" "}
          horas, {duration.minutes} minutos, {duration.seconds} segundos{" "}
        </p>
      </div>
    </div>
  );
};

export default Content;
