import { useAdhkar } from "../../hooks/useAdhkar";
import type { Adhkar } from "../../interfaces/adhkar";
import AdhkarCard from "../adhkarCard/AdhkarCard";

export default function MorningAdhkar() {
  const { data, isLoading } = useAdhkar() as { data?: Adhkar; isLoading?: boolean };
  const morningAdhkar = data?.["أذكار الصباح"]?.flat();

  return (
    <div className="max-w-6xl mx-4 md:mx-auto bg-blur py-5 md:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-amber-500/10 dark:border-amber-400/10 shadow-2xl shadow-amber-900/5 pt-20 transition-colors duration-300">
      <div className="text-center space-y-2 pb-6 mb-6 border-b border-amber-500/10 dark:border-slate-800">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 dark:text-amber-200">
          أذكار الصباح
        </h2>
        <p className="text-sm text-amber-800/70 dark:text-slate-400 font-medium">
          Morning Remembrance
        </p>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse p-6 rounded-2xl bg-amber-500/5 dark:bg-slate-800/40 border border-amber-500/10 dark:border-slate-800 space-y-4"
              >
                <div className="h-5 bg-amber-200/50 dark:bg-slate-700 rounded w-full" />
                <div className="h-5 bg-amber-200/50 dark:bg-slate-700 rounded w-3/4 mx-auto" />
                <div className="h-10 bg-amber-200/50 dark:bg-slate-700 rounded-full w-40 mx-auto mt-4" />
              </div>
            ))}
          </div>
        ) : (
          morningAdhkar?.map((zekr, index) => (
            <AdhkarCard key={index} zekr={zekr} />
          ))
        )}
      </div>
    </div>
  );
}