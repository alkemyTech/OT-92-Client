import React, { useState } from 'react';
import Title from './Title';

const About = () => {
  const [text, setText] = useState('');

  return (
    <div className='p-5'>
      <Title content={{ title: 'Nosotros' }} />
      {!text ? (
        <div class='d-flex justify-content-center mt-5'>
          <div class='spinner-border'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : (
        <p className='mt-5'>{text}</p>
      )}
    </div>
  );
};

export default About;
