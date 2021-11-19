import React from 'react';
import {Carousel} from 'react-bootstrap'

const Slider = () => {
  return (
    <div className="container">
    <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://radioformosa.com.ar/wp-content/uploads/2018/04/viaje-estudiantil.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="badge bg-secondary text-wrap text-light">
              <h3>Viaje estudiantil</h3>
              <p>Desde SomosMas ayudamos a que todos puedan viajar.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.eldiariodecarlospaz.com.ar/u/fotografias/fotosnoticias/2016/4/28/30077.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="badge bg-secondary text-wrap text-light">
              <h3>Educación para todos</h3>
              <p>Desde SomosMas nos aseguramos que todos tengan una buena educación.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.gob.mx/cms/uploads/article/main_image/26106/A16Z2709.JPG"
              alt="Third slide"
            />

            <Carousel.Caption className="badge bg-secondary text-wrap text-light">
              <h3>Comedor comunitario</h3>
              <p>Desde SomosMas proveemos un lugar para compartir en comunidad.</p>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
    </div>
  );
}
 
export default Slider;