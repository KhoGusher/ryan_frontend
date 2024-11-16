"use client";
import React from "react";
import Link from "next/link";

const MenuList = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Menu</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <Link href="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link href="/about">About Us</Link>
        </li>
        <li className="list-group-item">
          <Link href="/team">Team</Link>
        </li>
        <li className="list-group-item">
          <Link href="/services">Services</Link>
        </li>
        <li className="list-group-item">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="list-group-item">
          <Link href="/susidiaries/food">Tara Foods Ltd</Link>
        </li>
        <li className="list-group-item">
          <Link href="/susidiaries/dairy">Rayen Dairy Ltd</Link>
        </li>
        <li className="list-group-item">
          <Link href="/susidiaries/poultry">Rayen Poultry Ltd</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
