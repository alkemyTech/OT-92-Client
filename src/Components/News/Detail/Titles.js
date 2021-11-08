import { useParams } from "react-router-dom";


const Titles = () => {
    let { id: paramsId } = useParams();
    const news= [
        {
            id: '1',
            title: 'Recorrido por comedor'
        },
        {
            id: '2',
            title: 'Vueltas por la escuela san martin'
        },
        {
            id: '3',
            title: 'Viaje fin de curso a formosa'
        }
    ];

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
                        <h1>{paramsNews[0].title}</h1>
                            
                        </div>
                        )
                        
                        : /* no mostramos los datos si no se encuentra el id, y mostramos en su lugar un mensaje de error*/
                        
                        (
                        <div>
                            <h1>No hemos podido encontrar lo que estas buscando</h1> 
                        </div>
                        )
                    }    
            </div>
        </>
    );
}

export default Titles;