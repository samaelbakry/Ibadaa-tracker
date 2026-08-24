import { usePrayer } from "../../hooks/usePrayer";
import { useUserLocation } from "../../hooks/useUserLocation";
import type { PrayerData } from "../../interfaces/prayerData";
import { FiMoon } from "react-icons/fi";
import { WiSunrise } from "react-icons/wi";
import { GoSun } from "react-icons/go";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbSunset2 } from "react-icons/tb";
import { IoCloudyNightOutline } from "react-icons/io5";
import { FaMosque } from "react-icons/fa";
import QiblaCard from "../qibla/Qibla";
import PrayerCard from "../prayerCard/PrayerCard";
import IbadaChecklist from "../ibadaChecklist/IbadaChecklist";
import { Link } from "react-router-dom";

export default function PrayerTimes() {
  const location = useUserLocation();
  const { data, isLoading }: { data?: PrayerData; isLoading: boolean } = usePrayer(
    location?.lat ?? 0,
    location?.lng ?? 0,
  );

  const times = data?.data.times;

  type PrayerName = keyof PrayerData["data"]["times"];

  const prayerList: { name: PrayerName; icon: React.ReactNode }[] = [
    { name: "Fajr", icon: <FiMoon className="text-lg" /> },
    { name: "Sunrise", icon: <WiSunrise className="text-xl" /> },
    { name: "Dhuhr", icon: <GoSun className="text-lg" /> },
    { name: "Asr", icon: <TiWeatherPartlySunny className="text-xl" /> },
    { name: "Maghrib", icon: <TbSunset2 className="text-xl" /> },
    { name: "Isha", icon: <IoCloudyNightOutline className="text-lg" /> },
  ];

  return (
    <>
      <div className="bg-blur max-w-6xl md:mx-auto py-5 md:p-8 mx-4 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-amber-500/10 dark:border-amber-400/10 shadow-2xl shadow-amber-900/5 my-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 pb-4 border-b border-amber-500/10 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
              <FaMosque className="text-2xl" />
            </span>
            <h2 className="font-extrabold text-amber-900 text-2xl md:text-3xl dark:text-amber-200 tracking-tight">
              Today's Prayer Times
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-slate-800 dark:text-amber-300 border border-amber-200/50 dark:border-slate-700">
              {data?.data?.date?.gregorian?.date}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/40">
              {data?.data?.date?.hijri?.weekday.ar}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 bg-amber-50/50 dark:bg-slate-800/40 rounded-2xl p-4 border border-amber-500/10 dark:border-slate-800 mb-6">
          {prayerList.map((prayer) => {
            return (
              <PrayerCard
                key={prayer.name}
                icon={prayer.icon}
                name={prayer.name}
                time={times?.[prayer.name] || ""}
                isLoading={isLoading}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="rounded-2xl p-6 flex flex-col items-center justify-center bg-linear-to-br from-amber-50/80 to-amber-100/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-amber-500/10 dark:border-slate-700/50 shadow-sm">
            <QiblaCard degrees={data?.data.qibla.direction.degrees || 0} />
          </div>
          <div className="rounded-2xl p-6 bg-linear-to-br from-amber-50/80 to-amber-100/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-amber-500/10 dark:border-slate-700/50 shadow-sm">
            <IbadaChecklist />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <Link
            to="/quran"
            className="flex items-center justify-center p-3 text-sm font-bold text-amber-900 dark:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 dark:bg-slate-800 dark:hover:bg-slate-700 border border-amber-500/20 dark:border-slate-700 rounded-xl transition-all duration-200 active:scale-98 text-center"
          >
            View all Quran chapters
          </Link>
          <Link
            to="/morningadhkar"
            className="flex items-center justify-center p-3 text-sm font-bold text-amber-900 dark:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 dark:bg-slate-800 dark:hover:bg-slate-700 border border-amber-500/20 dark:border-slate-700 rounded-xl transition-all duration-200 active:scale-98 text-center"
          >
            View Morning Adhkar
          </Link>
          <Link
            to="/eveningadhkar"
            className="flex items-center justify-center p-3 text-sm font-bold text-amber-900 dark:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 dark:bg-slate-800 dark:hover:bg-slate-700 border border-amber-500/20 dark:border-slate-700 rounded-xl transition-all duration-200 active:scale-98 text-center"
          >
            View Evening Adhkar
          </Link>
        </div>
      </div>
    </>
  );
}