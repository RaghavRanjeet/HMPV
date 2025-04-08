"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md border-b border-gray-700 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">
          <Link href="/Home" className="hover:text-blue-400">
            HMPV Virus Database
          </Link>
        </h1>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/Home" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/genomics" className="hover:text-blue-400">
                Genomics
              </Link>
            </li>
            <li>
              <Link href="/proteomics" className="hover:text-blue-400">
                Proteomics
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay Mobile Menu */}
      {isOpen && (
        <div
          className={`
      fixed top-0 left-0 w-full h-full bg-gray-900
      flex flex-col items-center justify-center space-y-6 text-xl md:hidden z-40
      opacity-0 scale-95 transition-opacity transition-transform duration-500 ease-in-out
      ${isOpen ? "opacity-90 scale-100" : ""}
    `}
        >
          <Link
            href="/Home"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/genomics"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Genomics
          </Link>
          <Link
            href="/proteomics"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Proteomics
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
