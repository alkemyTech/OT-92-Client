import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import "./Detail/NewsFormat.css";
import NewsList from "./NewsList";

const NewsDisplay = () => {
  const [news, setNews] = useState([]);
  const mockedData = [
    {
      id: 1,
      title: "Recorrido por comedor",
      image:
        "https://www.gob.mx/cms/uploads/article/main_image/26106/A16Z2709.JPG",
    },
    {
      id: 2,
      title: "Vueltas por la escuela san martin",
      image:
        "https://www.eldiariodecarlospaz.com.ar/u/fotografias/fotosnoticias/2016/4/28/30077.jpg",
    },
    {
      id: 3,
      title: "viaje fin de curso a formosa ",
      image:
        "https://radioformosa.com.ar/wp-content/uploads/2018/04/viaje-estudianti.jpg",
    },
  ]; //Reemplazar por servicio http que traiga la data de la API

  useEffect(() => {
    setNews( mockedData );
  }, []);

  return (
    <>
      <div className="container-fluid card-display">
        <div className="row container-fluid  mt-5 d-flex flex-row justify-content-center">
          <Title 
            content={{
              title: "Novedades",
              image: null,
            }}
          />
          <NewsList newsData={news}/>
        </div>
      </div>
    </>
  );
};

export default NewsDisplay;
