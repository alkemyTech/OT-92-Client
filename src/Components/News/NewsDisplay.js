import React, { useEffect } from "react";
import NewsFormat from "./Detail/NewsFormat";
import {useSelector, useDispatch} from 'react-redux';
import "./Detail/NewsFormat.css";
import {getNews}  from '../../store/news/newsSlice'
const NewsDisplay = () => {
    const dispatch = useDispatch();
    const {news} = useSelector(state => state.news)
  useEffect(() => {
 dispatch(getNews())
  }, []);

  return (
    <>
      <div className="card-display">
        <div className="  mt-5 d-flex flex-row flex-wrap justify-content-center">
          {news ? (
            news.map((news) => {
              return <NewsFormat content={news} />;
            })
          ) : (
            <div className="h1 noNews ml-5">
              {" "}
              No hay novedades por el momento{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsDisplay;
