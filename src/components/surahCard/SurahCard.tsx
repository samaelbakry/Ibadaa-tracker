import { BsHexagon } from "react-icons/bs";
import type { QuranData } from "../../interfaces/quran";
import { Link } from "react-router-dom";

export default function SurahCard({ surah , surahNumber }: { surah: QuranData , surahNumber: number}) {
  return <>
 <Link to={`/surah/${surahNumber}`}>
  <div className="flex flex-wrap justify-between items-center bg-blur rounded-2xl my-3 p-5 cursor-pointer">
    <div className="flex gap-4 items-center">
        <BsHexagon className="text-5xl text-yellow-700 position-relative" />
        <span className="text-rose-950 font-semibold absolute top-7 left-8 text-lg">{surahNumber}</span>
        <div className="flex flex-col items-start flex-wrap gap-1 text-gray-600">
            <span>{surah.surahName}</span>
            <span>{surah.totalAyah} verses | {surah.revelationPlace} </span>
        </div>
    </div>
    <h1 className="text-xl font-semibold text-rose-950">{surah.surahNameArabicLong}</h1>
  </div>
 </Link>
  </>
}
