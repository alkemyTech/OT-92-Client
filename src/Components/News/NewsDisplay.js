import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import './Detail/NewsFormat.css';
import NewsList from './NewsList';
import { getNews } from '../../Services/publicApiService';
import Skeleton from '../Skeleton/Skeleton';
import { errorAlert } from '../../Assets/Alerts/alerts';

const NewsDisplay = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNews();
      if (res.status === 200) {
        setNews(res.data.data);
      } else {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {error
        ? errorAlert({
            title: 'Hubo un problema',
            text: 'No se pudieron recuperar las novedades!',
            time: '2000',
          })
        : null}
      <div className='my-3' />
      {news.length === 0 ? (
        <div className='d-flex justify-content-center'>
          <Skeleton type='title' width='550' height='75' />
        </div>
      ) : (
        <>
          <Title
            content={{
              title: 'Novedades',
              image: null,
            }}
          />
        </>
      )}

      <div className='container'>
        <NewsList newsData={news} />
      </div>
    </>
  );
};

export default NewsDisplay;
