import React from "react";

const data = [
  {
    "Epitope ID": "http://www.iedb.org/epitope/6813",
    "Epitope": "Linear peptide",
    "Epitope.1": "CPNFASVVL",
    "Epitope.2": "318",
    "Epitope.3": "326", 
    "Epitope.4": "Nucleoprotein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/21782",
    "Epitope": "Linear peptide",
    "Epitope.1": "GPSLIKTEL",
    "Epitope.2": "63",
    "Epitope.3": "71",
    "Epitope.4": "Fusion glycoprotein F0"
  }
  // Additional data items omitted for brevity
];

export default function EpitopeTable() {
  return (
    <div className="p-4">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Epitope ID</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Start</th>
            <th className="border px-4 py-2">End</th>
            <th className="border px-4 py-2">Molecule Parent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">
                <a href={item["Epitope ID"]} className="text-blue-500 underline">
                  Link
                </a>
              </td>
              <td className="border px-4 py-2">{item["Epitope"]}</td>
              <td className="border px-4 py-2">{item["Epitope.1"]}</td>
              <td className="border px-4 py-2">{item["Epitope.2"]}</td>
              <td className="border px-4 py-2">{item["Epitope.3"]}</td>
              <td className="border px-4 py-2">{item["Epitope.4"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
