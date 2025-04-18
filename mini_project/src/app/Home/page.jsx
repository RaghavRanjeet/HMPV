"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Footer from "../footer/page";
const Section = ({ title, children }) => {
  return (
    <div className="bg-gray-800 text-white p-6 mt-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-blue-300 border-b pb-2 mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
};

const Homepage = () => {
  useEffect(() => {
    // Create a timeline for sections animation
    const tl = gsap.timeline();
    tl.from(".section", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });

    // Set initial styles to ensure elements remain visible after animation
    gsap.set(".section", { clearProps: "all" });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-400 text-center">
          HMPV Virus Database
        </h2>
        <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
          This platform provides computational resources for Human
          Metapneumovirus (HMPV) research, including diagnostic tools, genomic
          data, and drug designing insights.
        </p>
        <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
          HMPV is a respiratory virus that affects individuals of all ages. It
          is particularly severe in infants, the elderly, and immunocompromised
          individuals. Research is ongoing to develop vaccines and targeted
          therapies.
        </p>
        {/* Grid Layout for Information Sections */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Section title="HMPV Structure" className="section">
            <div className="bg-white p-4 rounded-lg">
              <img
                src="/metapneumovirus.svg"
                alt="HMPV Structure"
                className="w-full h-[400px] object-contain mx-auto"
              />
            </div>
          </Section>
          <Section title="HMPV Overview" className="section text-black">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-green-600">
                Human metapneumovirus 00-1
              </h2>
              <p className="text-gray-700">
                <strong>Length:</strong> 13350bp, <strong>Chromosomes:</strong>{" "}
                1, <strong>Contigs:</strong> 1
              </p>
              <div className="mt-4 text-black">
                <h3 className="text-md font-semibold">General Info</h3>
                <p>
                  <strong>Genome ID:</strong> 162145.7017
                </p>
                <p>
                  <strong>Genome Name:</strong> Human metapneumovirus 00-1
                </p>
              </div>
              <div className="mt-4 text-black">
                <h3 className="text-md font-semibold">Taxonomy Info</h3>
                <p>
                  <strong>Taxon ID:</strong> 162145
                </p>
                <p>
                  <strong>Superkingdom:</strong> Viruses
                </p>
                <p>
                  <strong>Kingdom:</strong> Orthornavirae
                </p>
                <p>
                  <strong>Phylum:</strong> Negarnaviricota
                </p>
                <p>
                  <strong>Class:</strong> Monjiviricetes
                </p>
                <p>
                  <strong>Order:</strong> Mononegavirales
                </p>
                <p>
                  <strong>Family:</strong> Pneumoviridae
                </p>
                <p>
                  <strong>Genus:</strong> Metapneumovirus
                </p>
                <p>
                  <strong>Species:</strong> Metapneumovirus hominis
                </p>
              </div>
            </div>
          </Section>
        </div>
        {/* </div> */}

        {/* down side  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Section title="General Info for Non-Researchers" className="section">
            <ul className="list-disc pl-5">
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=EEN3UnjF4-s"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What is HMPV virus
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=rqceP_VYvrU&t=109s"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Symptoms and Prevention
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=-agJ0e-Zbl8"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diagnosis and Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </Section>
          <Section title="Information for Experts" className="section">
            <ul className="list-disc pl-5">
              <li>
                <Link
                  href="/genomics"
                  className="text-blue-400 hover:underline"
                >
                  Genomics
                </Link>
              </li>
              <li>
                <Link
                  href="/proteomics"
                  className="text-blue-400 hover:underline"
                >
                  Proteomics
                </Link>
              </li>
              <li>
                <Link href="/host" className="text-blue-400 hover:underline">
                  Host-Pathogen-Interaction
                </Link>
              </li>
              <li>
                <Link
                  href="/HMPV tree.pdf"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phylogenetic Tree Analysis
                </Link>
              </li>

              <li>
                <Link href="/epitope" className="text-blue-400 hover:underline">
                  Epitope{" "}
                </Link>
              </li>
            </ul>
          </Section>
          <Section title="Research" className="section">
            <ul className="list-disc pl-5">
            <li>
                <Link
                  href="https://gisaid.org/"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GISAID
                </Link>
              </li>
              <li>
                <Link
                  href="https://search.cdc.gov/search/?query=HMPV&dpage=1"
                  className="text-blue-400 hover:underline"
                >
                  Diagnostics (RT-PCR)
                </Link>
              </li>

              <li>
                <Link
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hmpv"
                  className="text-blue-400 hover:underline"
                >
                  Antibody Therapy
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.iedb.org/"
                  className="text-blue-400 hover:underline"
                >
                  Epitope-Based Vaccine
                </Link>
              </li>

              <li>
                <Link
                  href="https://go.drugbank.com/releases/latest"
                  className="text-blue-400 hover:underline"
                >
                  Drug Advice
                </Link>
              </li>

             
            </ul>
          </Section>

          <Section title="Web Resources" className="section">
            <ul className="list-disc pl-5">
              <li>
                <Link
                  href="https://www.who.int/home/search-results?indexCatalogue=genericsearchindex1&searchQuery=HMVP&wordsMode=AnyWord"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WHO HMPV Updates
                </Link>
              </li>
              <li>
                <Link
                  href="https://search.cdc.gov/search/?query=HMPV&dpage=1"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC HMPV Info
                </Link>
              </li>
              <li>
                <Link
                  href="https://search.nih.gov/search?utf8=%E2%9C%93&affiliate=nih&query=HMPV&commit=Search"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NIH Research on HMPV
                </Link>
              </li>
              <li>
                <Link
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=HMPV"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PubMed
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.ecdc.europa.eu/en/search?s=HMPV"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ECDC Reports
                </Link>
              </li>
            </ul>
          </Section>

          <Section title="Status of HMPV" className="section">
            <div className="flex justify-center">
              <img
                src="/status.jpeg"
                alt="HMPV Global Spread"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-400 text-center mt-2">
              Global and regional statistics on HMPV infections.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
