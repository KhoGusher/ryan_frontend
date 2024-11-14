"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleBackToTop = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', toggleBackToTop);
    return () => window.removeEventListener('scroll', toggleBackToTop);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link href="/">
            
              <img className="logo-img" src="/assets/img/logo.png" alt="logo" />
           
          </Link>
        </h1>

        <nav
          id="navbar"
          className={`navbar order-last order-lg-0 ${isMobileNavOpen ? 'navbar-mobile' : ''}`}
        >
          <ul>
            <li>
              <Link href="/" className="active text-decoration-none">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link href="#" onClick={(e) => e.preventDefault()} className='text-decoration-none'>
                <span>About</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link href="/about" className='text-decoration-none'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className='text-decoration-none'>
                    Team
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/services" className='text-decoration-none'>
                Services
              </Link>
            </li>
            <li className="dropdown">
              <Link href="#" onClick={(e) => e.preventDefault()} className='text-decoration-none'>
                <span>Subsidiaries</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link href="/susidiaries/food" className='text-decoration-none'>
                    Tara Foods Ltd
                  </Link>
                </li>
                <li>
                  <Link href="/susidiaries/dairy" className='text-decoration-none'>
                    Rayen Dairy Ltd
                  </Link>
                </li>
                <li>
                  <Link href="/susidiaries/poultry" className='text-decoration-none'>
                    Rayen Poultry Ltd
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" className='text-decoration-none'>
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav}></i>
        </nav>

        <div className="header-social-links d-flex">
          <Link href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </Link>
          <Link href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
      </div>

      {showBackToTop && (
        <Link href="#header" className="back-to-top active">
          <i className="bi bi-arrow-up"></i>
        </Link>
      )}
    </header>
  );
};

export default Header;

