import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ content }) => {

  return (
    <Link to={`/novedades/${content.id}`} className="link">
      <div className="card mx-auto my-3 customize-card" style={{width: "18rem"}}>
        <img 
          src={content.image} 
          className="card-img-top" 
          alt={content.title} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/error image somos mas.jpg";
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{content.title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
