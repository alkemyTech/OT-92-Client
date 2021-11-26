import React from "react";
import "../CardListStyles.css";
import NewsItem from "./NewsItem";

const NewsList = ({ newsData }) => {

  return (
    <>
      {newsData.length > 0 ? (
        <>
          <div className="row my-3">
            {newsData.map((article) => (
              <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center">
                <NewsItem
                  key={article.id}
                  content={article}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="h2 p-3 noNews m-5">
          <p>No hay novedades por el momento</p>
        </div>
      )}
    </>
  );
};
 
export default NewsList;