import { useParams } from "react-router-dom";
import { useChapterData } from "../../hooks/useQuran";
import type { ChapterData } from "../../interfaces/quran";


export default function SurahDetails() {
  const { surahNumber } = useParams<{ surahNumber: string }>();


  const { data, isLoading } = useChapterData(Number(surahNumber)) as {
    data?: ChapterData;
    isLoading: boolean;
  };

  console.log(data);

  return (
    <>
    { isLoading ? <>
     <div className="max-w-6xl mx-auto bg-blur rounded-2xl p-5 my-10 shadow">
       <span className="text-center text-rose-900 dark:text-white">Loading Surah...</span>
      </div>
    </> 
      : <>
    <div className="max-w-6xl mx-5 md:mx-auto bg-orange-100/90 dark:bg-blue-950/80 dark:backdrop-blur-xl  rounded-xl shadow my-10 p-9">
        <h4 className="text-center text-rose-950 dark:text-orange-200 font-bold text-xl">
          «بسم الله الرحمن الرحيم»
        </h4>
        <h2 className="text-center text-base font-bold mb-6 text-rose-950 dark:text-orange-200">
        {data?.surahNameArabicLong}
        </h2>
        <div
          dir="rtl"
          className="text-2xl leading-loose font-semibold text-justify tracking-wide">
          {data?.arabic1.map((ayah, index) => (
            <span key={index}>
              {ayah}
              <span className="text-base text-gray-500 mr-2">﴿{index + 1}﴾</span>
            </span>
          ))}
        </div>
      </div>
    </>}
      
    </>
  );
}
