import { useCountDown } from "../../hooks/useCountDown";
import { useRamadanData } from "../../hooks/useRamadanData";
import { useUserLocation } from "../../hooks/useUserLocation";
import { HiCalendarDateRange } from "react-icons/hi2";
import { CiTimer } from "react-icons/ci";
import { useTheme } from "../../context/themeContext";

export default function Header() {
  const location = useUserLocation();
  const { toggleTheme , theme } = useTheme();

  const { data } = useRamadanData(location?.lat, location?.lng);

  const today = data?.data?.fasting?.find((day: any) => {
    return day.date === new Date().toISOString().split("T")[0];
  });

  const iftarTime = today
    ? new Date(`${today.date} ${today.time.iftar}`)
    : null;

  const hijriDate = today?.hijri_readable;

  const timeLeft = useCountDown(iftarTime);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };



  return (
    <>
      <header className="flex items-center justify-between p-5 rounded-lg flex-wrap">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-yellow-700 dark:text-amber-400">
            Ramadan Tracker
          </h1>
          <p className="text-sm text-rose-900 dark:text-gray-300">
            Track your daily ibada with ease
          </p>
          <span className="text-sm text-rose-900 dark:text-gray-300">
            <HiCalendarDateRange className="mr-1 inline-block" />
            {hijriDate}
          </span>
          <p className="text-yellow-900 text-sm md:text-base font-bold dark:text-white">
            <CiTimer className="mr-1 inline-block"/> {formatTime(timeLeft)} time left until iftar
          </p>
        </div>
        <div className="flex  items-end flex-wrap gap-4">
           <span className="text-sm text-gray-500 dark:text-gray-300">
            {today?.date} 1447 hijri
          </span>
          <span className="text-3xl bg-blur cursor-pointer" onClick={toggleTheme}>{theme ==="light" ? "🌙" : "☀️"}</span>
        </div>
      </header>
    </>
  );
}
