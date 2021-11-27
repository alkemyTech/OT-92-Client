import React, { useState, useEffect } from "react";
import "./content.css";

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`01/01/${year + 1}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };
  }

  return timeLeft;
};

const Content = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setYear(new Date().getFullYear());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="center">
      <div className="container mt-5  mx-auto rounded">
        <div className="row">
          <div className="col-sm-12 mt-5">
            <h1 className="display-3 mt-5 text-center text-succes">
              Campaña Escolar {year + 1}
            </h1>
            <div className="jumbotron mt-5">
              <h2 className="display-6">
                Fecha: <span className="text-muted">01/01/2022</span>
              </h2>
              <h2 className="display-6">
                Hora: <span className="text-muted">17 hs</span>
              </h2>
              <h2 className="display-6">
                Lugar: <span className="text-muted">Edificio de SomosMas</span>
              </h2>
              <p className="lead">
                <span className="text-muted"></span>
                <span className="text-muted"></span>
              </p>
              <div className="d-none d-sm-block">
                <h2 className="display-6">
                  Cuenta regresiva:{" "}
                  <span className="text-muted">{timerComponents}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
