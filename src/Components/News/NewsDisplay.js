import React from 'react';
import NewsFormat from './Detail/NewsFormat';
const NewsDisplay = () => {
    const news= [{
        title: 'Recorrido por comedor',
        image: 'https://www.gob.mx/cms/uploads/article/main_image/26106/A16Z2709.JPG'
    },
    {
        title: 'Vueltas por la escuela san martin',
        image: 'https://www.eldiariodecarlospaz.com.ar/u/fotografias/fotosnoticias/2016/4/28/30077.jpg'
    },
    {
        title: 'viaje fin de curso a formosa ',
        image: 'https://radioformosa.com.ar/wp-content/uploads/2018/04/viaje-estudianti.jpg'
        }
        ];

    return (
        <>
        <div className="d-flex flex-row mt-5 container">
        {news ? (
            news.map(news =>{
                return(
                <NewsFormat content={news}/>
                )
            })
        ) : (<div className="h1"> No hay novedades por el momento </div>)}
        </div>
        </>
      );
}
 
export default NewsDisplay;