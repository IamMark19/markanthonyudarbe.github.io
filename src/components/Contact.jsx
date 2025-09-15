import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg">
            <strong>Location:</strong> {portfolioData.contact.location}
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> {portfolioData.contact.phone}
          </p>
          <p className="text-lg">
            <strong>Email:</strong>{' '}
            <a href={`mailto:${portfolioData.contact.email}`} className="text-blue-400 hover:underline">
              {portfolioData.contact.email}
            </a>
          </p>
        </div>
        <div className="mt-8">
          <p>{portfolioData.references}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
