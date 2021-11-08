import React from 'react';

const Card = props => {
  const imgPlaceholder = 'https://via.placeholder.com/150.png?text=Sin+imagen';

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img
        src={props.img || imgPlaceholder}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
