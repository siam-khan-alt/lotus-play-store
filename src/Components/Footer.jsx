import React from "react";
import { Link } from "react-router";
import logo from '../assets/lotus-img.jpg';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "All Games", path: "/games" },
    { name: "Contact Us", path: "/contact" },
  ];
  const supportLinks = [
    { name: "Support Center", path: "/support" },
    { name: "FAQ", path: "/support" },
  ];
  return (
    <div>
      <footer className=" bg-[#1E293B] text-[#F8FAFC]  pt-12 pb-8  shadow-inner">
        <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-[#7C3AED]/30 pb-10">
        <aside className='col-span-2 md:col-span-2 lg:col-span-1'>
            <Link to="/" className='flex items-center mb-3'>
                <img src={logo} alt="Lotus Play Store Logo" className="h-8 w-8 rounded-full mr-2" />
                <p className="font-bold text-xl text-[#7C3AED]">
                    Lotus Play Store
                </p>
            </Link>
            <p className="text-sm text-gray-400 mt-3">
                Providing quality entertainment since 2024. Your ultimate destination for digital games.
            </p>
            
            <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/profile.php?id=100078237812772" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className='hover:text-[#7C3AED] transition-colors'>
                    <FaFacebook className="text-2xl" />
                </a>
               <a href="https://github.com/siam-khan-alt" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='hover:text-[#7C3AED] transition-colors'>
                    <FaGithub className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/siam-khan-sp99/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='hover:text-[#7C3AED] transition-colors'>
                    <FaLinkedin className="text-2xl" />
                </a>
            </div>
        </aside>
        <nav>
            <h6 className="font-bold text-[#7C3AED] text-lg mb-3">Quick Links</h6>
            <div className='grid grid-flow-row gap-2'>
                 {quickLinks.map((link) => (
                    <Link key={link.name} to={link.path} className="link link-hover text-gray-300 hover:text-[#7C3AED] text-sm">
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>

        <nav>
            <h6 className="font-bold text-[#7C3AED] text-lg mb-3">Help & Support</h6>
            <div className='grid grid-flow-row gap-2'>
                {supportLinks.map((link) => (
                    <Link key={link.name} to={link.path} className="link link-hover text-gray-300 hover:text-[#7C3AED] text-sm">
                        {link.name}
                    </Link>
                ))}
            </div>
            <Link to="/about" className="link link-hover text-gray-300 hover:text-[#7C3AED] text-sm mt-2 block">
                About us
            </Link>
        </nav>
        <nav className='col-span-2 md:col-span-2 lg:col-span-1'>
            <h6 className="font-bold text-[#7C3AED] text-lg mb-3">Contact Info</h6>
            <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start">
                    <FaEnvelope className="text-[#7C3AED] mt-1 mr-3 flex-shrink-0" />
                    <span>support@lotusplaystore.com</span>
                </div>
                 <div className="flex items-start">
                    <FaMapMarkerAlt className="text-[#7C3AED] mt-1 mr-3 flex-shrink-0" />
                    <span>123 Game Street, CA, USA</span>
                </div>
                <div className="flex items-start">
                    <FaPhoneAlt className="text-[#7C3AED] mt-1 mr-3 flex-shrink-0" />
                    <span>+1 (555) 123-4567</span>
                </div>
            </div>
        </nav>

      </div>
      
      <div className="w-11/12 mx-auto text-center mt-6 text-gray-500 text-sm">
        <p>Copyright © 2025 - All rights reserved by Lotus Play Store.</p>
      </div>
      </footer>
    </div>
  );
};

export default Footer;
