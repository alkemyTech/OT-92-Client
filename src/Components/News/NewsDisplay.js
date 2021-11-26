import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {getNews}  from "../../store/news/newsSlice";
import NewsList from "./NewsList";
import "./Detail/NewsFormat.css";

const NewsDisplay = () => {
  const dispatch = useDispatch();
  const {news} = useSelector(state => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <>
      <div className='container'>
        <NewsList newsData={news} />
      </div>  
    </>
  );
};

export default NewsDisplay;
