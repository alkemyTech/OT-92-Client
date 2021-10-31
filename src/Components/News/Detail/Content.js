import { useParams } from "react-router-dom";
import './index.css'

const Content = () => {
  let { id: paramsId } = useParams(); // utilizamos useParams para acceder a los parámetros de una ruta determinada
  const news = [                     // creamos un array de objetos con los datos que queremos mostrar
    {
      id: "1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor urna magna, ac sagittis purus tempor quis. Mauris placerat ultricies tellus ut eleifend. Vestibulum lacus magna, dignissim nec massa gravida, molestie placerat leo.",
      image: "https://www.gob.mx/cms/uploads/article/main_image/26106/A16Z2709.JPG"
    },
    {
      id: "2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor urna magna, ac sagittis purus tempor quis. Mauris placerat ultricies tellus ut eleifend. Vestibulum lacus magna, dignissim nec massa gravida, molestie placerat leo.",
      image: "https://www.eldiariodecarlospaz.com.ar/u/fotografias/fotosnoticias/2016/4/28/30077.jpg"
    },
    {
      id: "3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor urna magna, ac sagittis purus tempor quis. Mauris placerat ultricies tellus ut eleifend. Vestibulum lacus magna, dignissim nec massa gravida, molestie placerat leo. ",
      image: "https://radioformosa.com.ar/wp-content/uploads/2018/04/viaje-estudiantil.jpg"
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