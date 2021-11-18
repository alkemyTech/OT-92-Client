import React, { useEffect, useState } from "react";
import NewsFormat from "./Detail/NewsFormat";
import {useSelector, useDispatch} from 'react-redux';
import "./Detail/NewsFormat.css";
import {getNews}  from '../../store/news/newsSlice'
const NewsDisplay = () => {
  // const [news, setNews] = useState("");
    const dispatch = useDispatch();
    const {news} = useSelector(state => state.news)
  useEffect(() => {
 dispatch(getNews())
  }, []);

  return (
    <>
      <div className="container-fluid card-display">
        <div className="row container-fluid  mt-5 d-flex flex-row justify-content-center">
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
