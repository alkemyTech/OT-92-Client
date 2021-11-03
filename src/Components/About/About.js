import React, { useEffect, useState } from 'react';
import NewsFormat from '../News/Detail/NewsFormat';

const About = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/api/about')
      .then((res) => res.json())
      .then((data) => setText(data.text));
  }, []);

  return (
    <div className='p-5'>
      <NewsFormat content={{ title: 'Nosotros' }} />
      <h2 className='text-center mt-5'> Sobre nosotros</h2>
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
