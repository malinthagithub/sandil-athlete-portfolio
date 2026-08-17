import { results } from "@/data/athlete";

const ordinal = (n: number) => (n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`);

export function ResultsTable() {
  return (
    <div className="result-scroll overflow-x-auto border border-line bg-white/45">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className="border-b border-ink/80 text-[10px] uppercase tracking-[0.16em] text-slate">
            <th className="px-4 py-4 font-bold">Date</th>
            <th className="px-4 py-4 font-bold">Age</th>
            <th className="px-4 py-4 font-bold">Meet</th>
            <th className="px-4 py-4 font-bold">Position</th>
            <th className="px-4 py-4 font-bold">Height</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr
              key={`${r.date}-${r.meet}`}
              className={`border-b border-line last:border-b-0 ${r.pb ? "bg-gold/10" : ""}`}
            >
              <td className="whitespace-nowrap px-4 py-3 text-sm font-medium">{r.date}</td>
              <td className="px-4 py-3 text-sm text-slate">{r.age}</td>
              <td className="px-4 py-3 text-sm font-semibold">{r.meet}</td>
              <td className="px-4 py-3 text-sm">
                <span className={r.position === 1 ? "font-bold text-wine" : ""}>{ordinal(r.position)}</span>
              </td>
              <td className="px-4 py-3 font-display text-xl font-semibold">
                {r.height.toFixed(2)} m
                {r.pb ? (
                  <span className="ml-2 align-middle text-[9px] font-sans font-bold uppercase tracking-[0.15em] text-wine">
                    PB
                  </span>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
