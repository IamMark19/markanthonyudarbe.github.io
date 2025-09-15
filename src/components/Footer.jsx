import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Mark Anthony A. Udarbe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
