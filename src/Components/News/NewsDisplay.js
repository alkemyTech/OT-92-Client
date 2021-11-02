import React, { useEffect, useState } from "react";
import NewsFormat from "./Detail/NewsFormat";
import "./Detail/NewsFormat.css";
const NewsDisplay = () => {
  const [news, setNews] = useState("");
  useEffect(() => {
    setNews([
      {
        title: "Recorrido por comedor",
        image:
          "https://www.gob.mx/cms/uploads/article/main_image/26106/A16Z2709.JPG",
      },
      {
        title: "Vueltas por la escuela san martin",
        image:
          "https://www.eldiariodecarlospaz.com.ar/u/fotografias/fotosnoticias/2016/4/28/30077.jpg",
      },
      {
        title: "viaje fin de curso a formosa ",
        image:
          "https://radioformosa.com.ar/wp-content/uploads/2018/04/viaje-estudianti.jpg",
      },
    ]);
  }, []);

  return (
    <>
      <div className="container-fluid card-display">
        <div className="row container-fluid  mt-5 d-flex flex-row justify-content-center">
          {news ? (
            news.map((news) => {
              return <NewsFormat content={news} />;
            })
          ) : (
            <div className="h1 noNews ml-5">
              {" "}
              No hay novedades por el momento{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsDisplay;
