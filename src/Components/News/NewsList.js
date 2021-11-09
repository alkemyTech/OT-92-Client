import React from 'react';
import '../CardListStyles.css';
import NewsItem from "./NewsItem";

const NewsList = ({ newsData }) => {

    return (
        <>
            {newsData.length > 0 ? (
                <>
                    {newsData.map((article) => (
                        <NewsItem
                            key={article.id}
                            content={article}
                        />
                    ))}
                </>
            ) : (
                <div className="h2 p-3 noNews m-5">
                    <p>No hay novedades por el momento</p>
                </div>
            )}
        </>
    );
}
 
export default NewsList;