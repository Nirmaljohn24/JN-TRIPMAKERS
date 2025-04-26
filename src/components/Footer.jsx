import React from 'react';
import Logo from '../assets/Logo.png.png';

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center bg-green-600/20 backdrop-blur-lg shadow-md text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - JN TRIPMAKERS</p>
  </aside>
</footer>
    </>
  );
};

export default Footer;
