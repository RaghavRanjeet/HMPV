"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

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
                className="w-full h-[300px] object-contain mx-auto"
              />
            </div>
          </Section>
          <Section title="HMPV Overview" className="section">
            <div className="bg-white p-4 rounded-lg">
              <img
                src="/Hmpvinfo.jpeg"
                alt="HMPV Infection"
                className="w-full h-[300px] object-contain mx-auto rounded"
              />
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
                  Symptoms and Prevention (refer GPS Raghava site)
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
                  href="/peptide-therapeutics"
                  className="text-blue-400 hover:underline"
                >
                  Peptide-Based Therapeutics
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
                  href="/diagnostics-rtpcr"
                  className="text-blue-400 hover:underline"
                >
                  Diagnostics (RT-PCR)
                </Link>
              </li>
              <li>
                <Link
                  href="/geographical-tracking"
                  className="text-blue-400 hover:underline"
                >
                  Geographical Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/antibody-therapy"
                  className="text-blue-400 hover:underline"
                >
                  Antibody Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/epitope-vaccine"
                  className="text-blue-400 hover:underline"
                >
                  Epitope-Based Vaccine
                </Link>
              </li>
              <li>
                <Link
                  href="/drug-advice"
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
                  href="/ministry-health"
                  className="text-blue-400 hover:underline"
                >
                  Ministry of Health
                </Link>
              </li>
              <li>
                <Link
                  href="/test-labs"
                  className="text-blue-400 hover:underline"
                >
                  Test Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/icmr-updates"
                  className="text-blue-400 hover:underline"
                >
                  ICMR Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/research-articles"
                  className="text-blue-400 hover:underline"
                >
                  Research Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnostics-documents"
                  className="text-blue-400 hover:underline"
                >
                  Diagnostics Documents
                </Link>
              </li>
            </ul>
          </Section>
          <Section title="Status of HMPV" className="section">
            <div className="flex justify-center">
              {/* <img src="https://images.pexels.com/photos/6957946/pexels-photo-6957946.jpeg" alt="HMPV Global Spread" className="w-full rounded-lg shadow-lg" /> */}
            </div>
            <p className="text-gray-400 text-center mt-2">
              Global and regional statistics on HMPV infections.
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
