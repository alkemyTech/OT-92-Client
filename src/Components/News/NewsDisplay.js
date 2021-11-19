import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import './Detail/NewsFormat.css';
import NewsList from './NewsList';
import { getNews } from '../../Services/publicApiService';

const NewsDisplay = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNews();
      setNews(res.data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="my-3" />
      <Title 
        content={{
          title: "Novedades",
          image: null,
        }}
      />
      <div class="container">
        <NewsList newsData={news}/>
      </div>
          
    </>
  );
};

export default NewsDisplay;
