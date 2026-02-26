import { BsHexagon } from "react-icons/bs";
import type { QuranData } from "../../interfaces/quran";
import { Link } from "react-router-dom";

export default function SurahCard({ surah , surahNumber }: { surah: QuranData , surahNumber: number}) {
  return <>
 <Link to={`/surah/${surahNumber}`}>
  <div className="flex justify-center gap-5 md:gap-0 md:justify-between items-center bg-blur rounded-2xl my-3 p-5 cursor-pointer">
        <div className="flex gap-4 items-center">
          <div className="relative flex items-center justify-center">
            <BsHexagon className="text-5xl text-yellow-700 dark:text-amber-400" />
            <span className="absolute text-lg font-semibold text-rose-950 dark:text-white">
              {surahNumber}
            </span>
          </div>
          <div className="flex flex-col items-start gap-1 text-yellow-800 dark:text-white">
            <span>{surah.surahName}</span>
            <span>
              {surah.totalAyah} verses | {surah.revelationPlace}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-rose-950 dark:text-orange-200">
          {surah.surahNameArabicLong}
        </h3>
      </div>
 </Link>
  </>
}
