import React from 'react';

const Title = ({ content }) => {
  const { title, image } = content;

  return (
    <div>
      <h1 className='h1 display-2 text-center'>{title}</h1>
      {image && (
        <div className='image-container'>
          <img src={image} alt='title' />
        </div>
      )}
    </div>
  );
};

export default Title;
