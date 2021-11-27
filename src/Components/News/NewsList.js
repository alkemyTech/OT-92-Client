
import React from 'react';
import '../CardListStyles.css';
import NewsItem from './NewsItem';
import Skeleton from '../Skeleton/Skeleton';

const NewsList = ({ newsData }) => {

  return (
    <>
      {newsData.length > 0 ? (
        <>

          <div className='row my-3'>
            {newsData.map((article) => (
              <div className='col-sm-12 col-md-6 col-lg-4 justify-content-center'>
                <NewsItem key={article.id} content={article} />

              </div>
            ))}
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

