/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {getNews}  from "../../store/news/newsSlice";
import NewsList from "./NewsList";
import "./Detail/NewsFormat.css";
import NewsLastVideo from "./NewsLastVideo";

const NewsDisplay = () => {
  const dispatch = useDispatch();
  const {news} = useSelector(state => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <>
      <div className='container'>
        <NewsLastVideo/>
        <h2 className="my-4 container text-center">Novedades</h2>
        <NewsList newsData={news} />
      </div>  
    </>
  );
};

export default NewsDisplay;
