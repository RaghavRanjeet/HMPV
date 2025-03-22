import React from 'react';

const genbankData = [
  { id: "AF371337.2", strain: "Human metapneumovirus isolate 00-1", year: "2002", location: "Netherlands", paper: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7095854/" },
  { id: "PQ523787.1", strain: "Human metapneumovirus isolate 582751397_RNA_S31", year: "Nov 2024" },
  { id: "PP591753.1", strain: "Human metapneumovirus isolate ASU101491", year: "April 2024" },
  { id: "PP591754.1", strain: "Human metapneumovirus isolate ASU101503", year: "April 2024" },
  { id: "PP315926.1", strain: "Human metapneumovirus isolate KM/11/9/B1", year: "Oct 2024" },
  { id: "PP947554.1" },
  { id: "PP947555.1" },
  { id: "LC817384.1" },
  { id: "PP716093.1" },
  { id: "PP086006.1" },
  { id: "PP086535.1" },
  { id: "LC789936.1" },
  { id: "OP358287.1" },
  { id: "MZ221200.1" },
  { id: "OL794355.1" },
  { id: "OL794360.1" },
  { id: "OL794471.1" },
  { id: "MZ504959.1" },
  { id: "MZ851992.1" },
  { id: "MN867464.1" },
  { id: "MN306019.1" },
  { id: "MK588636.1" },
  { id: "MH150889.1" },
  { id: "KY474529.1" },
  { id: "PP947557.1" },
  { id: "MF045424.2" },
  { id: "OR338754.1" },
  { id: "MZ221203.1" },
  { id: "OL794367.1" },
  { id: "OM262393.1" },
  { id: "ON729327.1" },
  { id: "MF045425.1" },
  { id: "MG431250.1" },
  { id: "KF516922.1" },
  { id: "KF686742.1" },
  { id: "KC562219.1" },
  { id: "KC562231.1" },
  { id: "JN184399.1" },
  { id: "HM197719.1" },
  { id: "AB503857.1" },
  { id: "EF535506.1" },
  { id: "DQ843658.1" },
  { id: "GQ153651.1" },
  { id: "FJ168778.1" },
  { id: "AY525843.1" }
];

export default function Page() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">HMPV Genomics</h2>
      
      {/* Genome Information */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="prose">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Genome</h3>
          <p className="text-gray-400">
            Negative-stranded RNA linear genome, about 13 kb in size. Encodes for eight proteins.
          </p>
        </div>

        {/* Genome Structure Image */}
        <div className="mb-8 bg-white">
          <img 
            src="/genomes.svg"
            alt="HMPV Genome Structure"
            className="w-full max-w-4xl mx-auto"
          />
        </div>

        {/* Gene Expression */}
        <div className="prose">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Gene Expression</h3>
          <p className="text-gray-400">
            The viral RNA-dependent RNA polymerase binds the encapsidated genome at the leader region, 
            then sequentially transcribes each gene by recognizing start and stop signals flanking viral genes. 
            mRNAs are capped and polyadenylated by the L protein during synthesis.
          </p>
        </div>
      </div>

      {/* GenBank Data Table */}
      <div className="max-w-6xl mx-auto mt-10 overflow-x-auto">
        <h3 className="text-2xl font-semibold text-white mb-4">GenBank Data</h3>
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-700 p-2">ID</th>
              <th className="border border-gray-700 p-2">Strain</th>
              <th className="border border-gray-700 p-2">Year</th>
              <th className="border border-gray-700 p-2">Geo Location</th>
              <th className="border border-gray-700 p-2">Related Paper</th>
              <th className="border border-gray-700 p-2">Download</th>
            </tr>
          </thead>
          <tbody>
            {genbankData.map((item, index) => (
              <tr key={index} className="bg-gray-800 text-white">
                <td className="border border-gray-700 p-2 text-center">{item.id}</td>
                <td className="border border-gray-700 p-2">{item.strain || "N/A"}</td>
                <td className="border border-gray-700 p-2 text-center">{item.year || "N/A"}</td>
                <td className="border border-gray-700 p-2 text-center">{item.location || "N/A"}</td>
                <td className="border border-gray-700 p-2 text-center">
                  {item.paper ? (
                    <a href={item.paper} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                      View Paper
                    </a>
                  ) : "N/A"}
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  <a
                    href={`https://www.ncbi.nlm.nih.gov/nuccore/${item.id}?report=fasta`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
