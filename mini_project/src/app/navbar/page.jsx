'use client';
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">HMPV Virus Database</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="nav-item">
              <a href="home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="genomics" className="hover:text-blue-400">
                Genomics
              </a>
            </li>
            <li className="nav-item">
              <a href="diagnosis" className="hover:text-blue-400">
                Diagnosis
              </a>
            </li>
            <li className="nav-item">
              <a href="immunotherapy" className="hover:text-blue-400">
                Immunotherapy
              </a>
            </li>
            <li className="nav-item">
              <a href="drug" className="hover:text-blue-400">
                Drug Designing
              </a>
            </li>
            <li className="nav-item">
              <Link href="/SignIn" className="hover:text-blue-400">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/SignUp" className="hover:text-blue-400">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
