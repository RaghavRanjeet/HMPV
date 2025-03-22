import React from 'react'

const geneData = [
  { id: '37626968', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626968' },
  { id: '37626964', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626964' },
  { id: '37626965', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626965' },
  { id: '37626966', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626966' },
  { id: '37626967', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626967' },
  { id: '37626961', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626961' },
  { id: '37626962', link: 'https://www.ncbi.nlm.nih.gov/gene/?term=37626962' }
]

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-2/3 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Gene ID Mapping</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Gene ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">NCBI Link</th>
            </tr>
          </thead>
          <tbody>
            {geneData.map((gene, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{gene.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={gene.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
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
  )
}
