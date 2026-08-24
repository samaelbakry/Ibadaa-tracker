import { useCountDown } from "../../hooks/useCountDown";
import { useRamadanData } from "../../hooks/useRamadanData";
import { useUserLocation } from "../../hooks/useUserLocation";
import { HiCalendarDateRange } from "react-icons/hi2";
import { CiTimer } from "react-icons/ci";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
  const location = useUserLocation();
  const { toggleTheme , theme } = useTheme();

  const { data } = useRamadanData(location?.lat, location?.lng);

  const now = new Date();

  const today = data?.data?.fasting?.find((day: any) => {
    return day.date === new Date().toISOString().split("T")[0];
  });

  const nextFastingDay = data?.data?.fasting?.find((day: any) => {
    const iftarDate = new Date(`${day.date}T${day.time.iftar}`)
    return iftarDate > now
  });

  const iftarTime = nextFastingDay ? new Date(`${nextFastingDay.date}T${nextFastingDay.time.iftar}`): null;

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
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-2 rounded-2xl">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-700 via-amber-600 to-yellow-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-200 tracking-tight">
              Ramadan Tracker
            </h1>
            <p className="text-sm font-medium text-amber-900/70 dark:text-slate-400 mt-1">
              Track your daily ibadah with ease
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {hijriDate && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/80 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/40 shadow-sm">
                <HiCalendarDateRange className="text-sm text-amber-600 dark:text-amber-400" />
                {hijriDate}
              </span>
            )}

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 text-amber-950 dark:text-amber-200 text-sm font-bold border border-amber-500/20 dark:border-amber-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <CiTimer className="text-lg text-amber-600 dark:text-amber-400" />
              <span>{formatTime(timeLeft)}</span>
              <span className="font-normal text-xs text-amber-800/80 dark:text-amber-300/80">until Iftar</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4 pt-2 md:pt-0 border-t md:border-t-0 border-amber-500/10 dark:border-slate-800">
          <span className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">
            {today?.date} 1447 AH
          </span>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-3 text-xl rounded-2xl bg-amber-100/60 hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 transition-all duration-200 transform active:scale-95 shadow-sm border border-amber-200/50 dark:border-slate-700"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </header>
    </>
  );
}