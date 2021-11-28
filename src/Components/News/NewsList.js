import React from "react";
import "../CardListStyles.css";
import Skeleton from "../Skeleton/Skeleton";
import Card from "../Card";
const NewsList = ({ newsData }) => {
  return (
    <>
      {newsData.length > 0 ? (
        <>

          <div className="d-flex justify-content-center flex-wrap">
            {newsData.map(article => <Card key={article.id} img={article.image} description={article.content} title={article.name} />)}
          </div>
        </>
      ) : (

        <div className='row my-3 ml-5 pl-5'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className='col-sm-12 col-md-6 col-lg-4 justify-content-center'>
              <Skeleton type='rectangular' width='250' height='300' />
            </div>
          ))}

        </div>
      )}
    </>
  );
};


export default NewsList;

