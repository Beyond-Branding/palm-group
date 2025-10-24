"use client";

const Pharmaceuticals = [
      { name: "Aceclofenac" },
      { name: "Albendazole" },
      { name: "Ambroxol Hydrochloride" },
      { name: "Amoxycillin Trihydrate Comp" },
      { name: "Analgin" },
      { name: "Azithromycin" },
      { name: "Azithromycin Di Hydrate" },
      { name: "Benzoic Acid" },
      { name: "Caffeine Anhydrous" },
      { name: "Calcitrol" },
      { name: "Calcium D Pantothenate" },
      { name: "Clavulanate Potassium Diluted" },
      { name: "Clomiphene Citrate" },
      { name: "Cross Povidone XL" },
      { name: "Cefpodoxime Proxetil Compacted" },
      { name: "Cefpodoxime Proxetil Micronized" },
      { name: "Dextromethorphan Hydrobromide" },
      { name: "Dicyclomine HCL" },
      { name: "Diclofenac Sodium" },
      { name: "Erythromycin Stearate" },
      { name: "Fluconazole" },
      { name: "Fructose" },
      { name: "Guaiphenesin" },
      { name: "Isopropyl Alcohol" },
      { name: "Ketoconazole" },
      { name: "Levosulphride" },
      { name: "Levocetirizine" },
      { name: "Magnesium Stearate" },
      { name: "Mannitol" },
      { name: "Melatonin" },
      { name: "Mephenesin" },
      { name: "Mefanamic Acid" },
      { name: "Methotrexate" },
      { name: "Methylene Chloride" },
      { name: "Methylprednisolone" },
      { name: "Montelukast Sodium" },
      { name: "Montelukast Sodium Micronized" },
      { name: "N-Acetyl-L-Cysteine" },
      { name: "Niacinamide" },
      { name: "Paracetamol" },
      { name: "Phenylephrine HCL" },
      { name: "Piracetam" },
      { name: "Piroxicam" },
      { name: "Polyvinyl Alcohol (PVA GH 17R)" },
      { name: "Povidone Iodine" },
      { name: "Pregabalin HCL" },
      { name: "Probnecid" },
      { name: "Propyl Paraben" },
      { name: "Riboflavine Sodium Phosphate" },
      { name: "Rabeprazole Sodium E/C" },
      { name: "Rosuvastatin Calcium Micronised" },
      { name: "Saaf" },
      { name: "Shellac" },
      { name: "Silicose" },
      { name: "Sodium Methyl Paraben" },
      { name: "Sodium Saccharine" },
      { name: "Sorbitol Solution" },
      { name: "Starch IP" },
      { name: "Sucralose" },
      { name: "Sulphamethoxazole" },
      { name: "Taurine" },
      { name: "Teneligliptin" },
      { name: "Terbutaline Sulfate" },
      { name: "Tobramycin Sulfate" },
      { name: "Trimethoprim" },
      { name: "Vitamin A" },
      { name: "Vitamin B1" },
      { name: "Vitamin B3" },
      { name: "Vitamin B6" },
      { name: "Vitamin B12" },
      { name: "Vitamin D3" },
      { name: "Vitamin E" },
      { name: "Xanthan Gum" },
      // Intermediates...
      { name: "1-Benzylimidazole" },
      { name: "2,3-Dimethylbenzonitrile" },
      { name: "2,3-Dimethylbenzoic Acid" },
      { name: "2-Bromo Aniline" },
      { name: "3-Bromo Phthalide" },
      { name: "2,6-Dichloro Thiophenol" },
      { name: "1-[2-Chloro-4-(4-Chlorophenyl)-Butyl]-Imidazol" },
      { name: "4-Acetyl Benzonitrile" },
      { name: "N,N-Diethyl Cyano Acetamide" },
      { name: "4-Phenoxybenzoic Acid" },
      { name: "3-Pyridyl Acetic Acid" },
      { name: "3-Pyridyl Acetic Acid Hydrochloride" },
      { name: "Phthalaldehydic Acid" },
      { name: "4-Acetyl Benzoic Acid" },
      { name: "4-Acetyl Benzoic Acid Methyl Ester" },
      { name: " 4-Cyano Phenacyl Bromide" },
      { name: " 3,5-Dimethoxy Aniline" },
      { name: "3,4,5-Trimethoxy Aniline" },
      { name: "2-Bromo-5-Chlorotoluene" },
      { name: "1-Bromo-3,5-Dimethoxybenzene" }, 
      { name: "5-Bromo-m-Xylene" },
      { name: "2-(4-Chlorophenoxy)-Aniline" },
      { name: "2-Amino-1-(2,5-dimethoxyphenyl)-ethanone HCl" },
      { name: "2,5-Dibromo Toluene" },
      { name: "2-(Methylthio)acetamide" },
      { name: "5-Chlorobenzo[d]oxazole" },
      { name: "1-Bromo-2-Iodobenzene" },
      { name: "4-Acetylbenzenesulfonyl chloride" },
      { name: "3-Bromo-Benzoic Acid tert-Butyl Ester" },
      { name: "4-(2-Bromoacetyl)benzoic acid" },
      { name: "5-Bromo-2-Chloroanisole" },
      {name: "1-Bromo-3,5-Diaminobenzene" },
      {name: "2-Bromo-1,3-Dimethoxybenzene" },  
      {name: "4-Bromo-3-Methoxyaniline" },
      {name:"2-Bromo-5-methoxyaniline"},
    {name: "4-Bromo-3-Methoxybenzonitrile" },
      {name:"4-Bromo-2-Methylbenzonitrile"},
      {name:"N-(4-Bromophenyl)-Phthalimide"},
      {name:"5-Bromo-1,2,3-Trimethoxybenzene"},
      {name:"3-Methoxyaniline (m-Anisidine)"},
      {name:"7-Methyl Phthalide"},
      {name:"4-(Methylthio)-Phenol"},
      {name:"4-Toluene Sulfonyl Bromide"},
      {name:"2,4,6-Trihydroxyacetophenone (Phloroacetophenone)"}



];

export function PharmaceuticalsProducts() {
  return (
    <section className="py-12 bg-white min-h-[80vh] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
Pharmaceuticals        </h2>

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
              {Pharmaceuticals.map((prod, idx) => (
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