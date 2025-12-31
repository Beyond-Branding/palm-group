"use client";

import React, { useMemo, useState } from "react";
import { Search, FlaskConical } from "lucide-react";

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

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function FineChemicalsProducts() {
  const [q, setQ] = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let items = fineChemicals;
    if (letter) items = items.filter((i) => i.name.toUpperCase().startsWith(letter));
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      items = items.filter((i) => i.name.toLowerCase().includes(s));
    }
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }, [q, letter]);

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="mt-0 mb-8 text-left md:text-center">
        <div className="relative mx-auto max-w-4xl rounded-3xl border bg-card/60 p-8 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0E7C45] to-[#14A165] rounded-t-3xl" />
          <h1 className="relative -top-3 text-2xl md:text-3xl font-extrabold text-[#388e3c] tracking-tight text-center">
          Shah Scientific (India)
      </h1>
          <h3 className="text-xl font-bold mb-3">Quality You Can Trust</h3>
          <p className="text-muted-foreground">
            Shah Scientific (India) is a leading supplier of laboratory chemicals, reagents
            and fine chemicals. Serving companies, universities, research institutions, and
            industrial R&amp;D labs since 1969, we provide top-grade chemicals that enable
            accurate testing and innovation. Our customer-centric approach and dependable
            supply chain make us a preferred partner for scientific needs across India.
          </p>
        </div>
      </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <FlaskConical className="size-6 text-green-700" />
              Fine Chemicals
            </h2>
            <p className="text-sm text-gray-500">{fineChemicals.length} products available</p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="size-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600/30 transition"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          <button
            onClick={() => setLetter(null)}
            className={`text-xs px-2.5 py-1.5 rounded-md border ${
              letter === null ? "bg-green-100 text-green-800 border-green-300" : "text-gray-600"
            }`}
          >
            All A–Z
          </button>

          {letters.map((ltr) => (
            <button
              key={ltr}
              onClick={() => setLetter(ltr)}
              className={`w-7 h-7 rounded-md border grid place-items-center text-xs ${
                letter === ltr
                  ? "bg-green-600 text-white border-green-600"
                  : "text-gray-700 hover:border-gray-300"
              }`}
            >
              {ltr}
            </button>
          ))}
        </div>

        <div className="grid gap-3 sm:hidden">
          {filtered.map((item, idx) => (
            <div key={item.name} className="rounded-xl border p-4 bg-white shadow-sm">
              <div className="text-sm text-gray-500 font-medium">#{String(idx + 1).padStart(3, "0")}</div>
              <div className="mt-1 text-base font-semibold">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="hidden sm:block overflow-hidden rounded-2xl border border-green-200 shadow-md">
          <div className="overflow-y-auto max-h-[70vh]">
            <table className="w-full text-left">
              <thead className="sticky top-0 z-10 bg-green-700 text-white text-sm">
                <tr>
                  <th className="px-5 py-3 w-24 font-semibold">Sr No</th>
                  <th className="px-5 py-3 font-semibold">Product Name</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item, idx) => (
                  <tr
                    key={item.name}
                    className="border-b border-green-100 even:bg-white odd:bg-green-50/60 hover:bg-green-100/50 transition"
                  >
                    <td className="px-5 py-3 font-medium text-gray-700">
                      {String(idx + 1).padStart(3, "0")}
                    </td>
                    <td className="px-5 py-3 font-medium text-gray-900">{item.name}</td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={2} className="text-center py-10 text-gray-500 text-sm">
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-green-50/80 px-5 py-3 text-sm text-gray-700 flex justify-between">
            Showing {filtered.length} of {fineChemicals.length}
            <button
              onClick={() => {
                setQ("");
                setLetter(null);
              }}
              className="text-green-700 underline underline-offset-4"
            >
              Reset Filters
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
