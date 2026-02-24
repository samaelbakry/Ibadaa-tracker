import { useQuranData } from "../../hooks/useQuran";
import type { Quran, QuranData } from "../../interfaces/quran";
import SurahCard from "../surahCard/SurahCard";
import image  from "../../assets/8445202-removebg-preview.png"

export default function Quran() {
  const { data: quranData, isLoading } = useQuranData();

  if (isLoading) {
    return <div className="text-center">Loading Quran data...</div>;
  }

  return (
    <>
    <img src={image} alt="Quran background" className=" object-cover rounded-t-2xl" />
      <div className="max-w-6xl mx-auto  bg-blur rounded-2xl p-5 my-10 shadow">
        <h3 className="text-4xl font-bold text-rose-950 text-center my-4">
          Quran
        </h3>
        <span className="text-center block text-rose-950 font-semibold">
          Surahs: {quranData.length}  «بسم الله الرحمن الرحيم»
        </span>

        {quranData.map((surah: QuranData, index: number) => (
          <SurahCard key={index} surah={surah} surahNumber={index + 1} />
        ))}
      </div>
    </>
  );
}
