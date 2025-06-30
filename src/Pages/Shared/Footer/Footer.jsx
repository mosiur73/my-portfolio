import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';



const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-5  ">
   <h3 className='text-3xl font-semibold'>Mosiur Rahman</h3>
  <nav>
  
     <div className="grid grid-flow-col gap-4">
       
        <a href="https://web.facebook.com/mdmosiur.rahman.9484941" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebook className='text-3xl'/>
        </a>
        <a href="https://github.com/mosiur73/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaGithub className='text-3xl' />
        </a>
        <a href="https://www.linkedin.com/in/md-mosiur-rahman73/" rel="noopener noreferrer" className="footer-icon">
         <FaLinkedin className='text-3xl'></FaLinkedin>
        </a>
       
      </div>
     
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Mosiur Rahman</p>
  </aside>
 
</footer>
    );
};

export default Footer;