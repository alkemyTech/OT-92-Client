import { useParams } from "react-router-dom";
import './index.css'

const Content = () => {
  let { id: paramsId } = useParams(); // utilizamos useParams para acceder a los parámetros de una ruta determinada
  const news = [                     // creamos un array de objetos con los datos que queremos mostrar
    {
      id: "1",
      content: "Se realizó una nueva edición del show del chiste en La Cava, voluntarios de la comunidad se animaron a compartir chistes y realizar trucos de magia para los más chicos.",
      image: "http://ongapi.alkemy.org/storage/m7c2U9zdM6.png"
    },
    {
      id: "2",
      content: "La organización cuenta con profesionales de educación física que realizan actividades recreativas con chicos de todas las edades.",
      image: "http://ongapi.alkemy.org/storage/ZVyW7MoXH3.jpeg"
    },
    {
      id: "3",
      content: "Se realizó la VI jornada recreativa de invierno, jóvenes de todas las edades participaron en juegos y los más chicos presentaron una coreografía espectacular!",
      image: "http://ongapi.alkemy.org/storage/PCGszwl482.png"
    }
  ]
  
  const paramsNews = news.filter(  // utilizamos el array method 'filter' para filtrar los datos que queremos mostrar
    (news) => news.id === paramsId
  );
  
  return (
    <>
      <div>
        {paramsNews[0] 
        
            ? /* mostramos los datos a través de una ternaria */
            
            (
            <div>
            {/* <h1>{paramsActivity[0].title}</h1> */}
                <h3>{paramsNews[0].content}</h3>        
                <img src={paramsNews[0].image} />
            </div>
            )
            
            : {/* no mostramos los datos si no se encuentra el id, y mostramos en su lugar un mensaje de error*/}
            
            (
            <div>
                <h1>No hemos podido encontrar lo que estas buscando</h1> 
            </div>
            )
        }
      </div>
    </>
  );
};

export default Content;