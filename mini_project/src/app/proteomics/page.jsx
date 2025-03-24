import React from 'react';

const geneData = [
  { id: '37626968', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626968' },
  { id: '37626964', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626964' },
  { id: '37626965', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626965' },
  { id: '37626966', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626966' },
  { id: '37626967', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626967' },
  { id: '37626961', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626961' },
  { id: '37626962', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626962' }
];

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950">
      <div className="w-full max-w-3xl bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Gene ID Mapping</h1>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-gray-200">
                <th className="border border-gray-700 px-4 py-3 text-left">Gene ID</th>
                <th className="border border-gray-700 px-4 py-3 text-left">NCBI Link</th>
              </tr>
            </thead>
            <tbody>
              {geneData.map((gene, index) => (
                <tr key={index} className="hover:bg-gray-700 transition duration-200">
                  <td className="border border-gray-700 px-4 py-3 text-gray-300">{gene.id}</td>
                  <td className="border border-gray-700 px-4 py-3">+
                    <a
                      href={gene.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Open Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
