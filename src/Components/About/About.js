import React, { useEffect, useState } from 'react';
import Title from './Title';

const About = () => {
  const [text, setText] = useState('');

  return (
    <div className='p-5'>
      <Title content={{ title: 'Nosotros' }} />
      <h2 className='text-center mt-5'> Sobre nosotros</h2>
      <p>{text}</p>
      {!text ? (
        <div class='d-flex justify-content-center mt-5'>
          <div class='spinner-border'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default About;
