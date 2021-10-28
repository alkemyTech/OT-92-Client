import { useParams } from "react-router-dom";


const NewsDetail = () => {
  let { id: paramsId } = useParams();
  const news = [
    {
      id: "1",
      content: "Se realizo una nueva edición del show del chiste en La Cava, voluntarios de la comunidad se animaron a compartir chistes y realizar trucos de magia para los más chicos.",
      image: "http://ongapi.alkemy.org/storage/m7c2U9zdM6.png"
    },
    {
      id: "2",
      content: "La organizaci&oacute;n cuenta con profesionales de educación física que realizan actividades recreativas con chicos de todas las edades.",
      image: "http://ongapi.alkemy.org/storage/ZVyW7MoXH3.jpeg"
    },
    {
      id: "3",
      content: "Se realizó la VI jornada recreativa de invierno, jóvenes de todas las edades participaron en juegos y los más chicos presentaron una coreografía espectacular!",
      image: "http://ongapi.alkemy.org/storage/PCGszwl482.png"
    }
  ]
  
  const paramsNews = news.filter(
    (news) => news.id === paramsId
  );
  return (
    <>
      <div>
        {paramsNews[0] ? (
          <div>
           {/* <h1>{paramsActivity[0].title}</h1> */}
            <h1>{paramsNews[0].content}</h1>
            <img src={image} />
          </div>
        ) : (
          <div>
            <h1>No hemos podido encontrar lo que estas buscando</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsDetail;