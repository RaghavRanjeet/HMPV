'use client';
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">HMPV Virus Database</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="nav-item">
              <Link href="/Home" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/genomics" className="hover:text-blue-400">
                Genomics
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
           
            {/* <li className="nav-item">
              <Link href="/SignIn" className="hover:text-blue-400">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/SignUp" className="hover:text-blue-400">
                Sign Up
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
