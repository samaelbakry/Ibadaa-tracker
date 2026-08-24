import { useQuranData } from "../../hooks/useQuran";
import type { Quran, QuranData } from "../../interfaces/quran";
import SurahCard from "../surahCard/SurahCard";

export default function Quran() {
  const { data: quranData, isLoading } = useQuranData();

  return (
    <>
      <div className="max-w-6xl mx-4 md:mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-amber-500/10 dark:border-amber-400/10 rounded-3xl p-6 md:p-8 my-8 shadow-2xl shadow-amber-900/5">
        <div className="text-center space-y-3 pb-6 border-b border-amber-500/10 dark:border-slate-800">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-700 via-amber-600 to-yellow-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-200 tracking-tight">
            The Holy Quran
          </h1>

          <div className="py-2">
            <p className="text-2xl md:text-3xl font-serif text-amber-900 dark:text-amber-200">
              « بسم الله الرحمن الرحيم »
            </p>
          </div>

          {!isLoading && quranData && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 dark:border-amber-400/20">
              <span className="text-xs font-semibold text-amber-900 dark:text-amber-300">
                Total Surahs:
              </span>
              <span className="text-xs font-bold font-mono text-amber-800 dark:text-amber-200">
                {quranData.length}
              </span>
            </div>
          )}
        </div>

        <div className="mt-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse p-4 rounded-2xl bg-amber-500/5 dark:bg-slate-800/40 border border-amber-500/10 dark:border-slate-800 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-xl bg-amber-200/50 dark:bg-slate-700 shrink-0" />
                    <div className="space-y-2 w-full">
                      <div className="h-4 bg-amber-200/50 dark:bg-slate-700 rounded w-1/2" />
                      <div className="h-3 bg-amber-200/50 dark:bg-slate-700 rounded w-1/3" />
                    </div>
                  </div>
                  <div className="w-16 h-6 bg-amber-200/50 dark:bg-slate-700 rounded shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quranData?.map((surah: QuranData, index: number) => (
                <SurahCard key={index} surah={surah} surahNumber={index + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}