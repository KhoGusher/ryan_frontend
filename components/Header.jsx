"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const HeaderSection = () => {
  const [showMenuList, setShowMenuList] = useState(false);
  const [loggedin, setloggedin] = useState(false);

  const handleNavbarClick = () => {
    setShowMenuList(true);
  };

  const handleBackClick = () => {
    setShowMenuList(false); // Go back to the header
  };

  return (
    <div>
      {!showMenuList ? (
        // Header View
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <Link href="/">
                <img
                  className="logo-img h-30 w-30"
                  src="/assets/img/favicon.png"
                  alt="logo"
                />
              </Link>
            </h1>

            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <Link
                    onClick={handleBackClick}
                    href="/"
                    className="active text-decoration-none"
                  >
                    Home
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    <span>About</span> <i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/about" className="text-decoration-none">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleBackClick}
                        href="/team"
                        className="text-decoration-none"
                      >
                        Team
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    <span>What We Do</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/services" className="text-decoration-none">
                        Services offered
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    <span>Subsidiaries</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link
                        href="/susidiaries/food"
                        className="text-decoration-none"
                      >
                        Tara Foods Ltd
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/susidiaries/dairy"
                        className="text-decoration-none"
                      >
                        Rayen Dairy Ltd
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/susidiaries/poultry"
                        className="text-decoration-none"
                      >
                        Rayen Poultry Ltd
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact" className="text-decoration-none">
                    Contact
                  </Link>
                </li>
                <li className="px-10">
                  {
                    loggedin ? <Link
                    href="/login"
                    className="text-decoration-none  text-white px-4 py-2 rounded "
                    style={{ backgroundColor: "steelblue" }}
                  >
                    Log out
                  </Link> : <Link
                    href="/login"
                    className="text-decoration-none  text-white px-4 py-2 rounded "
                    style={{ backgroundColor: "steelblue" }}
                  >
                    Log in
                  </Link>
                  }
                  
                </li>
              </ul>

              <i
                className="bi bi-list mobile-nav-toggle"
                onClick={handleNavbarClick}
              ></i>
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
        </header>
      ) : (
        <div className="container mt-5 relative">
          <div className="text-end">
            <button
              className="absolute top-4 left-4 text-3xl text-end text-gray-500 hover:text-black"
              onClick={handleBackClick}
            >
              <IoClose size={30} />
            </button>
          </div>

          <ul className="list-none p-0">
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link className="text-decoration-none text-black" href="/">
                Home
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link className="text-decoration-none text-black" href="/about">
                About Us
              </Link>
            </li>

            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link className="text-decoration-none text-black" href="/team">
                Team
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/services"
              >
                What we do
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link className="text-decoration-none text-black" href="/contact">
                Contact
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/susidiaries/food"
              >
                Tara Foods Ltd
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/susidiaries/dairy"
              >
                Rayen Dairy Ltd
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/susidiaries/poultry"
              >
                Rayen Poultry Ltd
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2">
                  {
                    loggedin ? <Link
                    href="/login"
                    className="text-decoration-none  text-white px-4 py-2 rounded "
                    style={{ backgroundColor: "steelblue" }}
                  >
                    Log out
                  </Link> : <Link
                    href="/login"
                    className="text-decoration-none  text-white px-4 py-2 rounded "
                    style={{ backgroundColor: "steelblue" }}
                  >
                    Log in
                  </Link>
                  }
                  
                </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
