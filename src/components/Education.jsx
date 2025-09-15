import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-2xl font-bold">{portfolioData.education.university}</h3>
          <p className="text-lg mt-2">{portfolioData.education.degree}</p>
          <p className="text-md text-gray-600 mt-1">{portfolioData.education.period}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
