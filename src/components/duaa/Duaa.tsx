import { useRamadanData } from "../../hooks/useRamadanData";
import { useUserLocation } from "../../hooks/useUserLocation";
import { FaPrayingHands } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import type { Root } from "../../interfaces/ramadanData";

export default function Duaa() {
  const location = useUserLocation();

  const { data , isLoading }: { data?: Root , isLoading:boolean } = useRamadanData(
    location?.lat,
    location?.lng,
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
        <div className="col-span-1 bg-linear-to-br from-amber-500/10 via-orange-500/5 to-transparent dark:from-slate-800/80 dark:to-slate-900/80 p-6 rounded-2xl border border-amber-500/10 dark:border-slate-700/60 shadow-lg backdrop-blur-md flex flex-col justify-between gap-4 transition-all duration-300 hover:border-amber-500/30">
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-amber-500/10 dark:border-slate-700/50">
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
                <FaPrayingHands className="text-xl" />
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-200">
                Duaa of the Day
              </h2>
            </div>

            {isLoading ? (
              <div className="animate-pulse space-y-3 py-4">
                <div className="h-4 bg-amber-200/50 dark:bg-slate-700 rounded w-1/3"></div>
                <div className="h-8 bg-amber-200/50 dark:bg-slate-700 rounded w-full"></div>
                <div className="h-4 bg-amber-200/50 dark:bg-slate-700 rounded w-5/6"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {data?.resource?.dua?.title && (
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-800 dark:text-amber-300">
                    {data?.resource?.dua?.title}
                  </span>
                )}
                <p className="text-right text-2xl md:text-3xl font-serif leading-relaxed text-amber-950 dark:text-amber-100 py-2">
                  {data?.resource?.dua?.arabic}
                </p>
                <p className="text-sm md:text-base italic text-amber-900/80 dark:text-slate-300 leading-relaxed">
                  "{data?.resource?.dua?.translation}"
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-1 bg-linear-to-br from-amber-500/10 via-orange-500/5 to-transparent dark:from-slate-800/80 dark:to-slate-900/80 p-6 rounded-2xl border border-amber-500/10 dark:border-slate-700/60 shadow-lg backdrop-blur-md flex flex-col justify-between gap-4 transition-all duration-300 hover:border-amber-500/30">
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-amber-500/10 dark:border-slate-700/50">
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
                <FaBookOpen className="text-xl" />
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-200">
                Hadith of the Day
              </h2>
            </div>

            {isLoading ? (
              <div className="animate-pulse space-y-3 py-4">
                <div className="h-8 bg-amber-200/50 dark:bg-slate-700 rounded w-full"></div>
                <div className="h-4 bg-amber-200/50 dark:bg-slate-700 rounded w-5/6"></div>
                <div className="h-3 bg-amber-200/50 dark:bg-slate-700 rounded w-1/4"></div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-right text-xl md:text-2xl font-serif leading-relaxed text-amber-950 dark:text-amber-100 py-2">
                  {data?.resource?.hadith.arabic}
                </p>
                <p className="text-sm md:text-base text-amber-900/80 dark:text-slate-300 leading-relaxed">
                  {data?.resource?.hadith.english}
                </p>
                {data?.resource?.hadith.source && (
                  <p className="text-xs font-semibold text-amber-700/70 dark:text-amber-400/80">
                    — {data?.resource?.hadith.source}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}