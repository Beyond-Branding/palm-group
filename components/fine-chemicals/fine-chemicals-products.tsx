"use client";

const fineChemicals = [
  { name: "1,6 Hexandiol" },
  { name: "2-Ethylaniline" },
  { name: "6-B.A." },
  { name: "Aluminium Molybdate" },
  { name: "Amino Acids (20%, 30%, 50%, 70%, 80%, etc.)" },
  { name: "Ammonium Molybdate" },
  { name: "Ascorbic Acid" },
  { name: "Borax" },
  { name: "Boric Acid" },
  { name: "Chelated Amino Proteinate (Zn, Fe, Ca, Mg, Mn, Cu, Bo)" },
  { name: "Chitisan" },
  { name: "Citric Acid" },
  { name: "Cobalt Sulphate" },
  { name: "Copper Sulphate" },
  { name: "DA-6" },
  { name: "E.D.D.H.A.-Fe" },
  { name: "Ferulic Acid" },
  { name: "Folic Acid" },
  { name: "5-Hydroxytryptophan (5-HTP)" },
  { name: "Histidine Hydrochloride" },
  { name: "Kinetin" },
  { name: "L – Isoleuine" },
  { name: "L – Leucine" },
  { name: "L – Methionine" },
  { name: "L - Phenyl alanine" },
  { name: "L – Threonine" },
  { name: "L – Tryptophan" },
  { name: "Lead Bromide" },
  { name: "Lead Chloride" },
  { name: "L-Lysine Hydrochloride" },
  { name: "L-Valine" },
  { name: "Magnesium Oxide (Light)" },
  { name: "N-acetyl thiozolidine-4-carboxylic acid (NATCA)" },
  { name: "Naphthalene Acetic Acid" },
  { name: "Phosphoric Acid" },
  { name: "Potassium Bicarbonate" },
  { name: "Potassium Bisulphite" },
  { name: "Potassium Dihydrogen O Phosphate" },
  { name: "Potassium Molybdate" },
  { name: "Potassium Sulfate" },
  { name: "Seaweed Extracts" },
  { name: "Sodium Moybdate" },
  { name: "Sodium Nitrophenolate" },
  { name: "Tri-iodo-benzoic acid" },
  { name: "Uracil" },
];

export function FineChemicalsProducts() {
  return (
    <section className="py-12 bg-white min-h-[80vh] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
          Fine Chemicals
        </h2>

        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full bg-green-50 border border-green-200 rounded-xl">
            <thead>
              <tr>
                <th className="py-3 px-5 text-left bg-green-700 text-white font-semibold rounded-tl-xl w-24">
                  Sr No
                </th>
                <th className="py-3 px-5 text-left bg-green-700 text-white font-semibold rounded-tr-xl">
                  Product Name
                </th>
              </tr>
            </thead>
            <tbody>
              {fineChemicals.map((prod, idx) => (
                <tr
                  key={idx}
                  className="border-b border-green-200 even:bg-white odd:bg-green-50"
                >
                  <td className="py-3 px-5 text-black-800 font-medium">
                    {idx + 1}
                  </td>
                  <td className="py-3 px-5 text-black-900 font-medium">
                    {prod.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}