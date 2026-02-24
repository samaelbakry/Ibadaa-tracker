import { useParams } from "react-router-dom";
import { useChapterData } from "../../hooks/useQuran";
import type { ChapterData } from "../../interfaces/quran";
import image  from "../../assets/8445202-removebg-preview.png"


export default function SurahDetails() {
  const { surahNumber } = useParams<{ surahNumber: string }>();

  const { data, isLoading } = useChapterData(Number(surahNumber)) as {
    data?: ChapterData;
    isLoading: boolean;
  };

  if (isLoading) {
    return <div className="text-center">Loading chapter...</div>;
  }
  console.log(data);

  return (
    <>
        <img src={image} alt="Quran background" className=" object-cover rounded-t-2xl" />
      <div className="max-w-6xl mx-auto bg-blur my-6 p-9">
        <h4 className="text-center text-rose-950 font-bold text-xl">
          «بسم الله الرحمن الرحيم»
        </h4>
        <h2 className="text-center text-base font-bold mb-6 text-rose-950">
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
    </>
  );
}
