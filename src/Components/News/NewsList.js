import React from 'react';
import '../CardListStyles.css';

const NewsList = ({ newsData }) => {

    return (
        <div>
            <h1>Listado de Novedades</h1>
            {newsData.length > 0 ? (
            newsData.map((article) => {
                return (
                    <NewsItem
                        key={article.id}
                        content={article}
                    />
                );
            })
            ) : (
                <div className="h1 noNews ml-5">
                {" "}
                No hay novedades por el momento{" "}
                </div>
            )}
            <ul className="list-container">
                {newsMock.length > 0 ? 
                    newsMock.map((element) => {
                        return(
                            <li className="card-info" key={element.id}>
                                <h3>{element.name}</h3>
                                <p>{element.description}</p>
                            </li>
                        )
                    })
                :
                    <p>No hay novedades</p>
                }
            </ul>
        </div>
    );
}
 
export default NewsList;