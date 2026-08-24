import { CiTimer } from 'react-icons/ci';
import { useCountPrayerTime } from '../../hooks/useCountPrayerTime';

export default function PrayerCard({
  icon,
  name,
  time,
  isLoading,
}: {
  icon: React.ReactNode;
  name: string;
  time: string;
  isLoading: boolean;
}) {
  const timeLeft = useCountPrayerTime(time);
  const isPassed = !timeLeft;

  return (
    <div
      className={`group relative flex flex-col items-center justify-between p-4 rounded-2xl transition-all duration-300 border shadow-sm hover:shadow-md hover:-translate-y-1 ${
        isPassed && !isLoading
          ? "bg-amber-500/5 dark:bg-slate-800/40 border-amber-500/10 dark:border-slate-800 opacity-75"
          : "bg-white dark:bg-slate-800/90 border-amber-500/20 dark:border-slate-700/60 hover:border-amber-500/40"
      }`}
    >
      <div className="flex items-center gap-1.5 text-amber-900 dark:text-amber-200 font-bold text-base mb-1">
        <span className="text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-200">
          {icon}
        </span>
        <span>{name}</span>
      </div>

      {isLoading ? (
        <div className="h-4 w-14 bg-amber-200/50 dark:bg-slate-700 animate-pulse rounded my-1" />
      ) : (
        <p className="text-xs font-semibold text-amber-800/70 dark:text-slate-400 tracking-wide">
          {time || "--:--"}
        </p>
      )}

      <div className="mt-3 w-full pt-2 border-t border-amber-500/10 dark:border-slate-700/50 flex justify-center items-center">
        {isLoading ? (
          <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 animate-pulse py-0.5">
            <CiTimer className="text-lg animate-spin" />
            <span className="text-xs font-medium">Loading...</span>
          </div>
        ) : isPassed ? (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400">
            Passed
          </span>
        ) : (
          <div className="flex items-center gap-1 font-mono font-bold text-xs md:text-sm text-amber-700 dark:text-amber-300 bg-amber-500/10 dark:bg-amber-400/10 px-2.5 py-1 rounded-lg">
            <CiTimer className="text-base text-amber-600 dark:text-amber-400 shrink-0" />
            <span>
              {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}