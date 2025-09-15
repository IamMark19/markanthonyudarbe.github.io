import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-l-2 border-gray-300 absolute h-full top-0 left-1/2 -ml-px"></div>
          {portfolioData.experience.map((job, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-gray-800 text-xl">{job.role}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{job.company} | {job.period}</p>
                <ul className="list-disc list-inside mt-2">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i} className="text-gray-700">{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
