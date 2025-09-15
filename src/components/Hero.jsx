import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="about" className="py-20 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          {portfolioData.summary}
        </p>
      </div>
    </section>
  );
};

export default Hero;
