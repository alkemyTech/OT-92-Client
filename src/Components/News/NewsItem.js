import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = ({ content }) => {

    return (
        <div className="card" style={{width: "18rem"}}>
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
                <Link to={`/novedades/${content.id}`}>
                    <button type="button" className="btn btn-primary">
                        Ver más
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NewsItem
