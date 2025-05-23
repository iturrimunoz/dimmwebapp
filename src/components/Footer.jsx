import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-white py-8 mt-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p className="font-semibold">Sarvodaya Hospital, Sector 8, Faridabad, Haryana, India</p>
        <p className="text-gray-200">+91-9355258181 &nbsp;|&nbsp; info@theranos.care</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">Facebook</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">LinkedIn</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">YouTube</a>
      </div>
    </div>
    <div className="text-center text-gray-200 mt-4 text-sm">
      © {new Date().getFullYear()} Dr. Swagat Dash | All Right Reserved
    </div>
  </footer>
);

export default Footer; 