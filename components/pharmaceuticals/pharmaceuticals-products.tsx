"use client";

import React, { useMemo, useState } from "react";
import { Search, FlaskConical, Filter } from "lucide-react";

type PharmaItem = { name: string; category: "API" | "Intermediate" };

const rawPharmaceuticals: PharmaItem[] = [
  // --- APIs ---
  { name: "Aceclofenac", category: "API" },
  { name: "Albendazole", category: "API" },
  { name: "Ambroxol Hydrochloride", category: "API" },
  { name: "Amoxycillin Trihydrate Comp", category: "API" },
  { name: "Analgin", category: "API" },
  { name: "Azithromycin", category: "API" },
  { name: "Azithromycin Di Hydrate", category: "API" },
  { name: "Benzoic Acid", category: "API" },
  { name: "Caffeine Anhydrous", category: "API" },
  { name: "Calcitrol", category: "API" },
  { name: "Calcium D Pantothenate", category: "API" },
  { name: "Clavulanate Potassium Diluted", category: "API" },
  { name: "Clomiphene Citrate", category: "API" },
  { name: "Cross Povidone XL", category: "API" },
  { name: "Cefpodoxime Proxetil Compacted", category: "API" },
  { name: "Cefpodoxime Proxetil Micronized", category: "API" },
  { name: "Dextromethorphan Hydrobromide", category: "API" },
  { name: "Dicyclomine HCL", category: "API" },
  { name: "Diclofenac Sodium", category: "API" },
  { name: "Erythromycin Stearate", category: "API" },
  { name: "Fluconazole", category: "API" },
  { name: "Fructose", category: "API" },
  { name: "Guaiphenesin", category: "API" },
  { name: "Isopropyl Alcohol", category: "API" },
  { name: "Ketoconazole", category: "API" },
  { name: "Levosulphride", category: "API" },
  { name: "Levocetirizine", category: "API" },
  { name: "Magnesium Stearate", category: "API" },
  { name: "Mannitol", category: "API" },
  { name: "Melatonin", category: "API" },
  { name: "Mephenesin", category: "API" },
  { name: "Mefanamic Acid", category: "API" },
  { name: "Methotrexate", category: "API" },
  { name: "Methylene Chloride", category: "API" },
  { name: "Methylprednisolone", category: "API" },
  { name: "Montelukast Sodium", category: "API" },
  { name: "Montelukast Sodium Micronized", category: "API" },
  { name: "N-Acetyl-L-Cysteine", category: "API" },
  { name: "Niacinamide", category: "API" },
  { name: "Paracetamol", category: "API" },
  { name: "Phenylephrine HCL", category: "API" },
  { name: "Piracetam", category: "API" },
  { name: "Piroxicam", category: "API" },
  { name: "Polyvinyl Alcohol (PVA GH 17R)", category: "API" },
  { name: "Povidone Iodine", category: "API" },
  { name: "Pregabalin HCL", category: "API" },
  { name: "Probnecid", category: "API" },
  { name: "Propyl Paraben", category: "API" },
  { name: "Riboflavine Sodium Phosphate", category: "API" },
  { name: "Rabeprazole Sodium E/C", category: "API" },
  { name: "Rosuvastatin Calcium Micronised", category: "API" },
  { name: "Saaf", category: "API" },
  { name: "Shellac", category: "API" },
  { name: "Silicose", category: "API" },
  { name: "Sodium Methyl Paraben", category: "API" },
  { name: "Sodium Saccharine", category: "API" },
  { name: "Sorbitol Solution", category: "API" },
  { name: "Starch IP", category: "API" },
  { name: "Sucralose", category: "API" },
  { name: "Sulphamethoxazole", category: "API" },
  { name: "Taurine", category: "API" },
  { name: "Teneligliptin", category: "API" },
  { name: "Terbutaline Sulfate", category: "API" },
  { name: "Tobramycin Sulfate", category: "API" },
  { name: "Trimethoprim", category: "API" },
  { name: "Vitamin A", category: "API" },
  { name: "Vitamin B1", category: "API" },
  { name: "Vitamin B3", category: "API" },
  { name: "Vitamin B6", category: "API" },
  { name: "Vitamin B12", category: "API" },
  { name: "Vitamin D3", category: "API" },
  { name: "Vitamin E", category: "API" },
  { name: "Xanthan Gum", category: "API" },

  // --- Intermediates ---
  { name: "1-Benzylimidazole", category: "Intermediate" },
  { name: "2,3-Dimethylbenzonitrile", category: "Intermediate" },
  { name: "2,3-Dimethylbenzoic Acid", category: "Intermediate" },
  { name: "2-Bromo Aniline", category: "Intermediate" },
  { name: "3-Bromo Phthalide", category: "Intermediate" },
  { name: "2,6-Dichloro Thiophenol", category: "Intermediate" },
  { name: "1-[2-Chloro-4-(4-Chlorophenyl)-Butyl]-Imidazol", category: "Intermediate" },
  { name: "4-Acetyl Benzonitrile", category: "Intermediate" },
  { name: "N,N-Diethyl Cyano Acetamide", category: "Intermediate" },
  { name: "4-Phenoxybenzoic Acid", category: "Intermediate" },
  { name: "3-Pyridyl Acetic Acid", category: "Intermediate" },
  { name: "3-Pyridyl Acetic Acid Hydrochloride", category: "Intermediate" },
  { name: "Phthalaldehydic Acid", category: "Intermediate" },
  { name: "4-Acetyl Benzoic Acid", category: "Intermediate" },
  { name: "4-Acetyl Benzoic Acid Methyl Ester", category: "Intermediate" },
  { name: "4-Cyano Phenacyl Bromide", category: "Intermediate" },
  { name: "3,5-Dimethoxy Aniline", category: "Intermediate" },
  { name: "3,4,5-Trimethoxy Aniline", category: "Intermediate" },
  { name: "2-Bromo-5-Chlorotoluene", category: "Intermediate" },
  { name: "1-Bromo-3,5-Dimethoxybenzene", category: "Intermediate" },
  { name: "5-Bromo-m-Xylene", category: "Intermediate" },
  { name: "2-(4-Chlorophenoxy)-Aniline", category: "Intermediate" },
  { name: "2-Amino-1-(2,5-dimethoxyphenyl)-ethanone HCl", category: "Intermediate" },
  { name: "2,5-Dibromo Toluene", category: "Intermediate" },
  { name: "2-(Methylthio)acetamide", category: "Intermediate" },
  { name: "5-Chlorobenzo[d]oxazole", category: "Intermediate" },
  { name: "1-Bromo-2-Iodobenzene", category: "Intermediate" },
  { name: "4-Acetylbenzenesulfonyl chloride", category: "Intermediate" },
  { name: "3-Bromo-Benzoic Acid tert-Butyl Ester", category: "Intermediate" },
  { name: "4-(2-Bromoacetyl)benzoic acid", category: "Intermediate" },
  { name: "5-Bromo-2-Chloroanisole", category: "Intermediate" },
  { name: "1-Bromo-3,5-Diaminobenzene", category: "Intermediate" },
  { name: "2-Bromo-1,3-Dimethoxybenzene", category: "Intermediate" },
  { name: "4-Bromo-3-Methoxyaniline", category: "Intermediate" },
  { name: "2-Bromo-5-methoxyaniline", category: "Intermediate" },
  { name: "4-Bromo-3-Methoxybenzonitrile", category: "Intermediate" },
  { name: "4-Bromo-2-Methylbenzonitrile", category: "Intermediate" },
  { name: "N-(4-Bromophenyl)-Phthalimide", category: "Intermediate" },
  { name: "5-Bromo-1,2,3-Trimethoxybenzene", category: "Intermediate" },
  { name: "3-Methoxyaniline (m-Anisidine)", category: "Intermediate" },
  { name: "7-Methyl Phthalide", category: "Intermediate" },
  { name: "4-(Methylthio)-Phenol", category: "Intermediate" },
  { name: "4-Toluene Sulfonyl Bromide", category: "Intermediate" },
  { name: "2,4,6-Trihydroxyacetophenone (Phloroacetophenone)", category: "Intermediate" },
];

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function interleaveArrays<T>(a: T[], b: T[]) {
  const out: T[] = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (i < a.length) out.push(a[i]);
    if (i < b.length) out.push(b[i]);
  }
  return out;
}

export function PharmaceuticalsProducts() {
  const [q, setQ] = useState("");
  const [letter, setLetter] = useState<string | null>(null);
  const [category, setCategory] = useState<"All" | "API" | "Intermediate">("All");

  const filtered = useMemo(() => {
    let items = rawPharmaceuticals.slice();

    if (letter) {
      items = items.filter((i) => i.name.toUpperCase().startsWith(letter));
    }

    if (q.trim()) {
      const s = q.trim().toLowerCase();
      items = items.filter((i) => i.name.toLowerCase().includes(s));
    }

    if (category === "API" || category === "Intermediate") {
      const res = items.filter((i) => i.category === category).sort((a, b) => a.name.localeCompare(b.name));
      return res;
    }

    const apis = items.filter((i) => i.category === "API").sort((a, b) => a.name.localeCompare(b.name));
    const intermediates = items.filter((i) => i.category === "Intermediate").sort((a, b) => a.name.localeCompare(b.name));

    return [...apis, ...intermediates];
  }, [q, letter, category]);

  const counts = useMemo(() => {
    const api = rawPharmaceuticals.filter((i) => i.category === "API").length;
    const inter = rawPharmaceuticals.filter((i) => i.category === "Intermediate").length;
    return { api, inter, total: rawPharmaceuticals.length };
  }, []);

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mt-0 mb-8 text-left md:text-center">
          <div className="relative mx-auto max-w-4xl rounded-3xl border bg-card/60 p-8 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0E7C45] to-[#14A165] rounded-t-3xl" />
            <h1
  className="
    relative -top-3
    text-3xl sm:text-3xl md:text-3xl
    font-extrabold text-[#388e3c]
    tracking-tight
    text-left sm:text-center
  "
>
  Palm Pharmachem
</h1>

<h3
  className="
    text-lg sm:text-xl
    font-bold mb-3
    text-left sm:text-center
  "
>
  Trusted Partner in Pharmaceutical Supply
</h3>
            <p className="text-muted-foreground">
              Palm Pharmachem is a trusted pharmaceutical supplier offering high-quality APIs, excipients, and intermediates. With decades of experience and strong global partnerships, we ensure reliable, compliant, and timely solutions backed by full documentation (COA, MSDS, DMFs). Our commitment to quality helps healthcare companies manufacture life-saving medicines with confidence.
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 flex items-center gap-2">
              <FlaskConical className="size-6 text-green-700" aria-hidden />
              Pharmaceuticals
            </h2>
            <p className="text-sm text-gray-500">
              {counts.total} items • {counts.api} APIs • {counts.inter} Intermediates
            </p>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" aria-hidden />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products…"
                className="w-full rounded-xl border border-gray-200 pl-9 pr-3 py-2.5 outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCategory("All")}
                className={`px-3 py-2 rounded-lg text-sm border transition ${
                  category === "All"
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setCategory("API")}
                className={`px-3 py-2 rounded-lg text-sm border transition ${
                  category === "API"
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                }`}
                title={`${counts.api} items`}
              >
                APIs
              </button>
              <button
                onClick={() => setCategory("Intermediate")}
                className={`px-3 py-2 rounded-lg text-sm border transition ${
                  category === "Intermediate"
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                }`}
                title={`${counts.inter} items`}
              >
                Intermediates
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-1">
          <button
            onClick={() => setLetter(null)}
            className={`px-2.5 py-1.5 rounded-md text-xs border ${
              letter === null ? "bg-green-50 text-green-700 border-green-200" : "bg-white text-gray-600 border-gray-200"
            }`}
          >
            All A–Z
          </button>
          {letters.map((ltr) => (
            <button
              key={ltr}
              onClick={() => setLetter(ltr)}
              className={`w-7 h-7 rounded-md text-xs border grid place-items-center transition ${
                letter === ltr
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
              }`}
              aria-label={`Filter by ${ltr}`}
            >
              {ltr}
            </button>
          ))}
        </div>

        <div className="grid gap-3 sm:hidden">
          {filtered.map((item, idx) => (
            <div
              key={item.name}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">#{String(idx + 1).padStart(3, "0")}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    item.category === "API" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {item.category}
                </span>
              </div>
              <div className="mt-1 text-base font-semibold text-gray-900">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="hidden sm:block overflow-hidden rounded-2xl border border-green-200 shadow-md">
          <div className="max-h-[70vh] overflow-y-auto">
            <table className="w-full text-left">
              <thead className="sticky top-0 z-10">
                <tr>
                  <th className="bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold text-sm py-3 px-5 w-24">
                    Sr No
                  </th>
                  <th className="bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold text-sm py-3 px-5">
                    Product Name
                  </th>
                  <th className="bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold text-sm py-3 px-5 w-40">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item, idx) => (
                  <tr
                    key={item.name}
                    className="border-b border-green-100 even:bg-white odd:bg-green-50/60 hover:bg-green-100/50 focus-within:bg-green-100/60 transition"
                  >
                    <td className="py-3 px-5 font-medium text-gray-800 tabular-nums">
                      {String(idx + 1).padStart(3, "0")}
                    </td>
                    <td className="py-3 px-5 font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="py-3 px-5">
                      <span
                        className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${
                          item.category === "API"
                            ? "bg-green-100 text-green-800 ring-1 ring-inset ring-green-200"
                            : "bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-200"
                        }`}
                      >
                        <Filter className="size-3" aria-hidden />
                        {item.category}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-10 text-center text-sm text-gray-500">
                      Nothing found. Try a different search, letter, or category.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-green-50/60 px-5 py-3 text-sm text-gray-600 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FlaskConical className="size-4 text-green-700" aria-hidden />
              Showing <strong className="mx-1 text-gray-900">{filtered.length}</strong> of{" "}
              <strong className="mx-1 text-gray-900">{counts.total}</strong> items
            </span>
            <button
              onClick={() => {
                setQ("");
                setLetter(null);
                setCategory("All");
              }}
              className="text-green-700 hover:text-green-800 underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
