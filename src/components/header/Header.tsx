import { useCountDown } from "../../hooks/useCountDown";
import { useRamadanData } from "../../hooks/useRamadanData";
import { useUserLocation } from "../../hooks/useUserLocation";
import { HiCalendarDateRange } from "react-icons/hi2";
import { CiTimer } from "react-icons/ci";

export default function Header() {
  const location = useUserLocation();
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
      <header className="flex items-center justify-between p-5 rounded-lg">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-rose-900">
            Ramadan Tracker 🌙
          </h1>
          <p className="text-sm text-gray-500">
            Track your daily ibada with ease
          </p>
          <span className="text-sm text-gray-500">
            <HiCalendarDateRange className="mr-1 inline-block" />
            {hijriDate}
          </span>
          <p>
            <CiTimer className="mr-1 inline-block" /> {formatTime(timeLeft)}{" "}
            time left until iftar
          </p>
        </div>
        <span className="text-sm text-gray-500">{today?.date} 1447 hijri </span>
      </header>
    </>
  );
}
