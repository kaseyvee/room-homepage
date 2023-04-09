import React from 'react';
import About from './_about';
import Hero from './_hero';

function Homepage() {
  return (
    <main className='homepage'>
      <Hero />
      <About />
    </main>
  );
}

export default Homepage;