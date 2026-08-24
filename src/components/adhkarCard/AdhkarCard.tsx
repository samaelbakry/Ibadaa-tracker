import { useState } from "react";
import type { AdhkarType } from "../../interfaces/adhkar";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

export default function AdhkarCard({ zekr }: { zekr: AdhkarType }) {
  const [count, setCount] = useState(0);
  const max = Number(zekr.count);
  const isCompleted = count >= max && max > 0;

  return (
    <div
      className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 text-center ${
        isCompleted
          ? "bg-emerald-500/10 dark:bg-emerald-950/20 border-emerald-500/30 dark:border-emerald-500/20 opacity-80"
          : "bg-white/80 dark:bg-slate-800/80 border-amber-500/15 dark:border-slate-700/60 shadow-sm hover:border-amber-500/30 dark:hover:border-amber-400/20"
      }`}
    >
      {isCompleted && (
        <div className="absolute top-4 left-4 flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/20">
          <FaCheckCircle className="text-sm" />
          <span>Completed</span>
        </div>
      )}

      <p
        dir="rtl"
        className="text-xl md:text-2xl font-serif leading-relaxed text-amber-950 dark:text-slate-100 font-semibold mb-3 selection:bg-amber-500/20"
      >
        {zekr.content}
      </p>

      {zekr.description && (
        <p
          dir="rtl"
          className="text-xs md:text-sm text-amber-800/80 dark:text-amber-300/80 font-medium mb-4 max-w-2xl mx-auto"
        >
          {zekr.description}
        </p>
      )}

      <div className="mt-6 inline-flex items-center gap-4 bg-amber-500/5 dark:bg-slate-900/60 px-5 py-2.5 rounded-full border border-amber-500/10 dark:border-slate-700/50">
        <button
          type="button"
          aria-label="Decrease count"
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          className="p-1 text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 disabled:opacity-30 transition-colors"
          disabled={count === 0}
        >
          <CiCircleMinus className="text-3xl" />
        </button>

        <div className="flex flex-col items-center min-w-16">
          <span className="text-lg font-bold font-mono text-amber-950 dark:text-amber-100 leading-none">
            {count} / {max}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-medium text-amber-800/60 dark:text-slate-400 mt-0.5">
            Recitations
          </span>
        </div>

        <button
          type="button"
          aria-label="Increase count"
          onClick={() => setCount((prev) => (prev < max ? prev + 1 : prev))}
          className="p-1 text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 disabled:opacity-30 transition-colors"
          disabled={count >= max}
        >
          <CiCirclePlus className="text-3xl" />
        </button>
      </div>
    </div>
  );
}