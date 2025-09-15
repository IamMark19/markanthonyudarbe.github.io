import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
