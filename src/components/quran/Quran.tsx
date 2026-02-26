import { useQuranData } from "../../hooks/useQuran";
import type { Quran, QuranData } from "../../interfaces/quran";
import SurahCard from "../surahCard/SurahCard";


export default function Quran() {
  const { data: quranData, isLoading } = useQuranData();

  return (
    <>
    { isLoading ? <>
      <div className="max-w-6xl mx-auto bg-blur rounded-2xl p-5 my-10 shadow">
       <span className="text-center text-rose-900 dark:text-white">Loading Quran chapters...</span>
      </div>
    </> 
    : <>
     <div className="max-w-6xl mx-2 md:mx-auto bg-blur rounded-2xl p-5 my-10 shadow">
        <h3 className="text-4xl font-bold text-rose-950 dark:text-white text-center my-4">
          Quran
        </h3>
        <span className="text-center block text-rose-950 font-semibold dark:text-white">
          Surahs: {quranData.length}  «بسم الله الرحمن الرحيم»
        </span>

        {quranData.map((surah: QuranData, index: number) => (
          <SurahCard key={index} surah={surah} surahNumber={index + 1} />
        ))}
      </div>
    </> }
     
    </>
  );
}
