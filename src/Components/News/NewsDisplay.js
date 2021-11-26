import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {getNews}  from "../../store/news/newsSlice";
import Title from "../Title/Title";
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
