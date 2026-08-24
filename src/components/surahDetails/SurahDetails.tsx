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
      <div className="max-w-5xl mx-4 md:mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/10 dark:border-amber-400/10 rounded-3xl p-6 md:p-12 my-8 shadow-2xl shadow-amber-900/5 transition-colors duration-300">
        {isLoading ? (
          <div className="animate-pulse space-y-8 py-6">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 bg-amber-200/50 dark:bg-slate-700 rounded w-1/3" />
              <div className="h-6 bg-amber-200/50 dark:bg-slate-700 rounded w-1/4" />
            </div>
            <div className="space-y-4 pt-6">
              <div className="h-6 bg-amber-200/50 dark:bg-slate-700 rounded w-full" />
              <div className="h-6 bg-amber-200/50 dark:bg-slate-700 rounded w-11/12" />
              <div className="h-6 bg-amber-200/50 dark:bg-slate-700 rounded w-4/5" />
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center space-y-3 pb-8 mb-8 border-b border-amber-500/10 dark:border-slate-800">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-amber-900 dark:text-amber-200">
                {data?.surahNameArabicLong}
              </h2>
              <p className="text-xl md:text-2xl font-serif text-amber-800/80 dark:text-amber-300/80 pt-2">
                « بسم الله الرحمن الرحيم »
              </p>
            </div>

            <div
              dir="rtl"
              className="text-2xl md:text-3xl font-serif leading-[2.4] md:leading-[2.6] text-amber-950 dark:text-amber-100 text-justify tracking-wide selection:bg-amber-500/20"
            >
              {data?.arabic1.map((ayah, index) => (
                <span key={index} className="inline">
                  {ayah}{" "}
                  <span className="inline-flex items-center justify-center text-lg md:text-xl text-amber-700 dark:text-amber-400 font-bold px-1.5 mx-1 font-serif select-none">
                    ﴿{index + 1}﴾
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}