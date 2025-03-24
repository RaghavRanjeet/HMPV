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
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/25388",
    "Epitope": "Linear peptide",
    "Epitope.1": "IAPYAGLIMI",
    "Epitope.2": "194",
    "Epitope.3": "203",
    "Epitope.4": "Matrix protein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/28126",
    "Epitope": "Linear peptide",
    "Epitope.1": "IPYTAAVQV",
    "Epitope.2": "12",
    "Epitope.3": "20",
    "Epitope.4": "Matrix protein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/31756",
    "Epitope": "Linear peptide",
    "Epitope.1": "KLAKLIIDL",
    "Epitope.2": "157",
    "Epitope.3": "165",
    "Epitope.4": "Protein M2-1"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/31915",
    "Epitope": "Linear peptide",
    "Epitope.1": "KLILALLTFL",
    "Epitope.2": "35",
    "Epitope.3": "44",
    "Epitope.4": "Small hydrophobic protein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/32663",
    "Epitope": "Linear peptide",
    "Epitope.1": "KPAVGVYHIV",
    "Epitope.2": "152",
    "Epitope.3": "161",
    "Epitope.4": "Small hydrophobic protein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/33979",
    "Epitope": "Linear peptide",
    "Epitope.1": "KVEGEQHVIK",
    "Epitope.2": "429",
    "Epitope.3": "438",
    "Epitope.4": "Fusion glycoprotein F0"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/45470",
    "Epitope": "Linear peptide",
    "Epitope.1": "NPRQSRFVL",
    "Epitope.2": "97",
    "Epitope.3": "105",
    "Epitope.4": "Fusion glycoprotein F0"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/54706",
    "Epitope": "Linear peptide",
    "Epitope.1": "RLPREKLKK",
    "Epitope.2": "149",
    "Epitope.3": "157",
    "Epitope.4": "Protein M2-1"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/59182",
    "Epitope": "Linear peptide",
    "Epitope.1": "SLILIGITTL",
    "Epitope.2": "32",
    "Epitope.3": "41",
    "Epitope.4": "Major surface glycoprotein G"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/60092",
    "Epitope": "Linear peptide",
    "Epitope.1": "SPKAGLLSL",
    "Epitope.2": "307",
    "Epitope.3": "315",
    "Epitope.4": "Nucleoprotein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/69387",
    "Epitope": "Linear peptide",
    "Epitope.1": "VLATAVREL",
    "Epitope.2": "157",
    "Epitope.3": "165",
    "Epitope.4": "Fusion glycoprotein F0"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158680",
    "Epitope": "Linear peptide",
    "Epitope.1": "ALHNLVLSY",
    "Epitope.2": "125",
    "Epitope.3": "133",
    "Epitope.4": "Protein M2-1"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158681",
    "Epitope": "Linear peptide",
    "Epitope.1": "ALLTFLTVTI",
    "Epitope.2": "39",
    "Epitope.3": "48",
    "Epitope.4": "Small hydrophobic protein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158691",
    "Epitope": "Linear peptide",
    "Epitope.1": "APYAGLIMI",
    "Epitope.2": "195",
    "Epitope.3": "203",
    "Epitope.4": "Matrix protein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158692",
    "Epitope": "Linear peptide",
    "Epitope.1": "APYAGLIMIM",
    "Epitope.2": "195",
    "Epitope.3": "204",
    "Epitope.4": "Matrix protein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158701",
    "Epitope": "Linear peptide",
    "Epitope.1": "AVLGSTMILV",
    "Epitope.2": "499",
    "Epitope.3": "508",
    "Epitope.4": "Fusion glycoprotein F0"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158716",
    "Epitope": "Linear peptide",
    "Epitope.1": "DLDHHYPLEY",
    "Epitope.2": "1723",
    "Epitope.3": "1732",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158757",
    "Epitope": "Linear peptide",
    "Epitope.1": "FIMSEILRI",
    "Epitope.2": "275",
    "Epitope.3": "283",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158772",
    "Epitope": "Linear peptide",
    "Epitope.1": "FMDFKIFLCV",
    "Epitope.2": "1450",
    "Epitope.3": "1459",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158774",
    "Epitope": "Linear peptide",
    "Epitope.1": "FMSVNFLHRL",
    "Epitope.2": "1256",
    "Epitope.3": "1265",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158778",
    "Epitope": "Linear peptide",
    "Epitope.1": "FPKITFERL",
    "Epitope.2": "1625",
    "Epitope.3": "1633",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158787",
    "Epitope": "Linear peptide",
    "Epitope.1": "FVFSSTGCKV",
    "Epitope.2": "1665",
    "Epitope.3": "1674",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158788",
    "Epitope": "Linear peptide",
    "Epitope.1": "FVLGAIALGV",
    "Epitope.2": "103",
    "Epitope.3": "112",
    "Epitope.4": "Fusion glycoprotein F0"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158799",
    "Epitope": "Linear peptide",
    "Epitope.1": "GLLSRILSV",
    "Epitope.2": "1099",
    "Epitope.3": "1107",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158801",
    "Epitope": "Linear peptide",
    "Epitope.1": "GLTDQLTKL",
    "Epitope.2": "300",
    "Epitope.3": "308",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158806",
    "Epitope": "Linear peptide",
    "Epitope.1": "GPTAARDGI",
    "Epitope.2": "199",
    "Epitope.3": "207",
    "Epitope.4": "Phosphoprotein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158810",
    "Epitope": "Linear peptide",
    "Epitope.1": "GSECKFNHNY",
    "Epitope.2": "18",
    "Epitope.3": "27",
    "Epitope.4": "Protein M2-1"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158831",
    "Epitope": "Linear peptide",
    "Epitope.1": "IARSSNNIM",
    "Epitope.2": "264",
    "Epitope.3": "272",
    "Epitope.4": "Nucleoprotein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158840",
    "Epitope": "Linear peptide",
    "Epitope.1": "IIADNITPV",
    "Epitope.2": "1034",
    "Epitope.3": "1042",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158846",
    "Epitope": "Linear peptide",
    "Epitope.1": "ILIGITTLSI",
    "Epitope.2": "34",
    "Epitope.3": "43",
    "Epitope.4": "Major surface glycoprotein G"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158847",
    "Epitope": "Linear peptide",
    "Epitope.1": "ILLKISANI",
    "Epitope.2": "948",
    "Epitope.3": "956",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158851",
    "Epitope": "Linear peptide",
    "Epitope.1": "IMLYDVKFL",
    "Epitope.2": "1512",
    "Epitope.3": "1520",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158853",
    "Epitope": "Linear peptide",
    "Epitope.1": "IPAFIKSVSI",
    "Epitope.2": "160",
    "Epitope.3": "169",
    "Epitope.4": "Matrix protein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158858",
    "Epitope": "Linear peptide",
    "Epitope.1": "IPTKSNGRL",
    "Epitope.2": "1114",
    "Epitope.3": "1122",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158880",
    "Epitope": "Linear peptide",
    "Epitope.1": "KIEEQSGLY",
    "Epitope.2": "696",
    "Epitope.3": "704",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158892",
    "Epitope": "Linear peptide",
    "Epitope.1": "KLMCDNALFT",
    "Epitope.2": "1594",
    "Epitope.3": "1603",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158894",
    "Epitope": "Linear peptide",
    "Epitope.1": "KLMLENRAMV",
    "Epitope.2": "242",
    "Epitope.3": "251",
    "Epitope.4": "Fusion glycoprotein F0"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158896",
    "Epitope": "Linear peptide",
    "Epitope.1": "KLNMICDWL",
    "Epitope.2": "111",
    "Epitope.3": "119",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158898",
    "Epitope": "Linear peptide",
    "Epitope.1": "KLPFFVRSV",
    "Epitope.2": "1826",
    "Epitope.3": "1834",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158903",
    "Epitope": "Linear peptide",
    "Epitope.1": "KLSMILGLL",
    "Epitope.2": "182",
    "Epitope.3": "190",
    "Epitope.4": "Phosphoprotein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158906",
    "Epitope": "Linear peptide",
    "Epitope.1": "KLWTMEAISL",
    "Epitope.2": "717",
    "Epitope.3": "726",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158907",
    "Epitope": "Linear peptide",
    "Epitope.1": "KLYETVDYML",
    "Epitope.2": "249",
    "Epitope.3": "258",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158917",
    "Epitope": "Linear peptide",
    "Epitope.1": "KPSHKRSQSI",
    "Epitope.2": "29",
    "Epitope.3": "38",
    "Epitope.4": "Phosphoprotein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158921",
    "Epitope": "Linear peptide",
    "Epitope.1": "KPVKLSEGL",
    "Epitope.2": "753",
    "Epitope.3": "761",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158941",
    "Epitope": "Linear peptide",
    "Epitope.1": "KTRCQMTSL",
    "Epitope.2": "733",
    "Epitope.3": "741",
    "Epitope.4": "RNA-directed RNA polymerase L"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158955",
    "Epitope": "Linear peptide",
    "Epitope.1": "LILALLTFL",
    "Epitope.2": "36",
    "Epitope.3": "44",
    "Epitope.4": "Small hydrophobic protein"
  },
  {
    "Epitope ID": "http://www.iedb.org/epitope/158960",
    "Epitope": "Linear peptide",
    "Epitope.1": "LLIRSNYLL",
    "Epitope.2": "35",
    "Epitope.3": "43",
    "Epitope.4": "Protein M2-1"
  },
]
export default function EpitopeTable() {
  return (
    <div className="p-4">
      <table className="w-full border border-gray-900">
        <thead>
          <tr className="bg-gray-1000">
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
