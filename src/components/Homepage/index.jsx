import React from 'react';
import About from './About';
import Hero from './Hero';

function Homepage(props) {
  return (
    <div className='homepage'>
      <Hero />
      <About />
    </div>
  );
}

export default Homepage;