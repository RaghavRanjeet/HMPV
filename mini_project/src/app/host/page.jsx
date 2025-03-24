import Image from 'next/image';

export default function HMPVHostInteraction() {
    return (
        <div className="container mx-auto p-6 bg-gray-900 text-gray-200 min-h-screen">
            <div className="max-w-3xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <h1 className="text-3xl font-extrabold text-center text-teal-400 my-2" >Host Pathogen Interaction</h1>
                <Image
                    src="/Host.jpg"
                    alt="Host-Pathogen Interaction"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-extrabold text-center text-teal-400 mb-6">
                        🧬 Host-Pathogen Interaction in HMPV
                    </h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Human Metapneumovirus (HMPV) is a major respiratory pathogen that affects both children and adults, often causing upper and lower respiratory tract infections.
                        The interaction between HMPV and the host immune system occurs through various mechanisms, allowing the virus to evade immunity and replicate efficiently.
                    </p>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-teal-300">📌 1. Attachment and Entry</h2>
                            <p className="mt-2"><strong>Mechanism:</strong> HMPV attaches to host cells via its G glycoprotein, binding to host receptors like glycosaminoglycans. The F fusion protein then enables viral entry.</p>
                            <p className="mt-1"><strong>Effect on Host:</strong> The viral genome enters host cells, initiating replication.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-teal-300">📌 2. Immune Evasion</h2>
                            <p className="mt-2"><strong>Mechanism:</strong> HMPV suppresses the interferon (IFN) response and inhibits pattern recognition receptors (PRRs) such as TLRs and RLRs.</p>
                            <p className="mt-1"><strong>Effect on Host:</strong> Reduces antiviral response, enabling prolonged replication.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-teal-300">📌 3. Host Cell Manipulation</h2>
                            <p className="mt-2"><strong>Mechanism:</strong> HMPV hijacks the host cell’s machinery, modifying the ER and mitochondria for viral protein synthesis.</p>
                            <p className="mt-1"><strong>Effect on Host:</strong> Cellular resources are diverted, compromising normal function.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-teal-300">📌 4. Inflammatory Response</h2>
                            <p className="mt-2"><strong>Mechanism:</strong> Triggers cytokine release (IL-6, TNF-α, IL-8), leading to immune-mediated tissue damage.</p>
                            <p className="mt-1"><strong>Effect on Host:</strong> Excessive inflammation may cause lung damage and respiratory distress.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-teal-300">📌 5. Apoptosis and Autophagy Regulation</h2>
                            <p className="mt-2"><strong>Mechanism:</strong> HMPV modulates apoptosis and autophagy to delay cell death.</p>
                            <p className="mt-1"><strong>Effect on Host:</strong> Ensures viral persistence and spread.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-teal-300">📌 6. Cellular Stress and Mitochondrial Involvement</h2>
                            <p className="mt-2"><strong>Mechanism:</strong> Induces mitochondrial stress, increasing ROS generation and inflammation.</p>
                            <p className="mt-1"><strong>Effect on Host:</strong> Amplifies tissue damage and disease severity.</p>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-6">
                        <h2 className="text-2xl font-bold text-teal-400 mb-4">📊 Summary of Host-Pathogen Interaction Mechanisms</h2>
                        <table className="w-full border-collapse border border-gray-700 text-center">
                            <thead>
                                <tr className="bg-teal-500 text-gray-900">
                                    <th className="border border-gray-700 px-4 py-2">Mechanism</th>
                                    <th className="border border-gray-700 px-4 py-2">Effect on Host</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-800">
                                    <td className="border border-gray-700 px-4 py-2">Attachment and Entry</td>
                                    <td className="border border-gray-700 px-4 py-2">Allows viral genome entry</td>
                                </tr>
                                <tr className="bg-gray-700">
                                    <td className="border border-gray-700 px-4 py-2">Immune Evasion</td>
                                    <td className="border border-gray-700 px-4 py-2">Suppresses immune response</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="border border-gray-700 px-4 py-2">Host Cell Manipulation</td>
                                    <td className="border border-gray-700 px-4 py-2">Promotes viral replication</td>
                                </tr>
                                <tr className="bg-gray-700">
                                    <td className="border border-gray-700 px-4 py-2">Inflammatory Response</td>
                                    <td className="border border-gray-700 px-4 py-2">Leads to tissue damage</td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="border border-gray-700 px-4 py-2">Apoptosis Regulation</td>
                                    <td className="border border-gray-700 px-4 py-2">Prolongs host cell survival</td>
                                </tr>
                                <tr className="bg-gray-700">
                                    <td className="border border-gray-700 px-4 py-2">Mitochondrial Stress</td>
                                    <td className="border border-gray-700 px-4 py-2">Increases inflammation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}