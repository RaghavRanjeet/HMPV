import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">HMPV Virus Database</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#genomics" className="hover:text-blue-400">Genomics</a></li>
            <li><a href="#diagnosis" className="hover:text-blue-400">Diagnosis</a></li>
            <li><a href="#immunotherapy" className="hover:text-blue-400">Immunotherapy</a></li>
            <li><a href="#drug" className="hover:text-blue-400">Drug Designing</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className="bg-gray-800 text-white p-6 mt-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-blue-300 border-b pb-2 mb-4">{title}</h2>
      {children}
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-400 text-center">HMPV Virus Database</h2>
        <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
          This platform provides computational resources for Human Metapneumovirus (HMPV) research, including diagnostic tools, genomic data, and drug designing insights.
        </p>
        
        {/* Grid Layout for Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Section title="General Info for Non-Researchers">
            <ul className="list-disc pl-5">
              <li>HMPV Diagnostic Tests</li>
              <li>Worldwide HMPV Spread</li>
              <li>Symptoms and Prevention</li>
              <li>Vaccination and Treatment</li>
            </ul>
          </Section>
          
          <Section title="Information for Experts">
            <ul className="list-disc pl-5">
              <li>Genomics</li>
              <li>Proteomics</li>
              <li>Immunotherapy</li>
              <li>Peptide-Based Therapeutics</li>
              <li>Drug Designing</li>
            </ul>
          </Section>
          
          <Section title="Research">
            <ul className="list-disc pl-5">
              <li>Diagnostics (RT-PCR)</li>
              <li>Geographical Tracking</li>
              <li>Antibody Therapy</li>
              <li>Epitope-Based Vaccine</li>
              <li>Drug Advice</li>
            </ul>
          </Section>
          
          <Section title="Web Resources">
            <ul className="list-disc pl-5">
              <li>Ministry of Health</li>
              <li>Test Labs</li>
              <li>ICMR Updates</li>
              <li>Research Articles</li>
              <li>Diagnostics Documents</li>
            </ul>
          </Section>
          
          <Section title="Status of HMPV">
            {/* <div className="flex justify-center h-[100px] w-[100px]">
            <img src="https://images.pexels.com/photos/6957946/pexels-photo-6957946.jpeg" 
     alt="HMPV Global Spread" 
     className="w-full rounded-lg shadow-lg" />
            </div> */}
            <p className="text-gray-400 text-center mt-2">Global and regional statistics on HMPV infections.</p>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default Homepage;