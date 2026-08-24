import { BsHexagon } from "react-icons/bs";
import type { QuranData } from "../../interfaces/quran";
import { Link } from "react-router-dom";

export default function SurahCard({
  surah,
  surahNumber,
}: {
  surah: QuranData;
  surahNumber: number;
}) {
  return (
    <Link to={`/surah/${surahNumber}`} className="block group">
      <div className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-amber-500/15 dark:border-slate-700/60 shadow-sm hover:shadow-lg hover:border-amber-500/40 dark:hover:border-amber-400/30 transition-all duration-300 transform group-hover:-translate-y-0.5">
        
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center shrink-0">
            <BsHexagon className="text-4xl md:text-5xl text-amber-600/20 dark:text-amber-400/20 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 stroke-1" />
            <span className="absolute text-xs md:text-sm font-bold text-amber-900 dark:text-amber-200 font-mono">
              {surahNumber}
            </span>
          </div>

          <div className="flex flex-col items-start gap-1">
            <h4 className="text-base md:text-lg font-bold text-amber-950 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
              {surah.surahName}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-amber-800/70 dark:text-slate-400">
              <span className="font-medium">{surah.totalAyah} Verses</span>
              <span>•</span>
              <span className="capitalize px-1.5 py-0.5 rounded bg-amber-500/10 dark:bg-slate-700 text-amber-900 dark:text-amber-300 font-medium">
                {surah.revelationPlace}
              </span>
            </div>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-900 dark:text-amber-200 group-hover:scale-105 transition-transform duration-300 pl-2 text-right">
          {surah.surahNameArabicLong}
        </h3>
      </div>
    </Link>
  );
}