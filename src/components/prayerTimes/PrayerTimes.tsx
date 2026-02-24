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

export default function PrayerTimes() {
  const location = useUserLocation();
  const { data, isLoading }: { data?: PrayerData; isLoading: boolean } = usePrayer(location?.lat!, location?.lng!);

  const times = data?.data.times;

  if (isLoading) return (
    <div className="flex justify-center items-center h-48">
      <p className="text-white font-bold text-xl">Loading prayer times...</p>
    </div>
  );

  type PrayerName = keyof PrayerData["data"]["times"];

  const prayerList: { name: PrayerName; icon: React.ReactNode }[] = [
    { name: "Fajr", icon: <FiMoon className="mr-2 inline-block" /> },
    { name: "Sunrise", icon: <WiSunrise className="mr-2 inline-block" /> },
    { name: "Dhuhr", icon: <GoSun className="mr-2 inline-block" /> },
    {name: "Asr",icon: <TiWeatherPartlySunny className="mr-2 inline-block" />,},
    { name: "Maghrib", icon: <TbSunset2 className="mr-2 inline-block" /> },
    { name: "Isha", icon: <IoCloudyNightOutline className="mr-2 inline-block" />,},
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto bg-rose-950/90 p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-white text-3xl">
            <FaMosque className="mr-2 inline-block text-amber-200"/>
            Today's Prayer Times
          </h2>
          <div className="flex gap-3 items-center">
            <p className="font-bold text-white text-2xl">
              {data?.data?.date?.gregorian?.date}
            </p>
            <p className="font-bold text-white text-2xl">
              {data?.data?.date?.hijri?.weekday.ar}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-orange-50 rounded-2xl p-5 font-semibold text-gray-700">
          {prayerList.map((prayer) => {
            return <PrayerCard key={prayer.name} icon={prayer.icon} name={prayer.name} time={times?.[prayer.name] || ""} />;
          })}

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-2 gap-2">
          <div className="grid-col-span-1 rounded-2xl p-6 flex flex-col items-center gap-4 bg-orange-50 shadow">
            <QiblaCard degrees={data?.data.qibla.direction.degrees || 0} />
          </div>
          <div className="grid-col-span-1 rounded-2xl p-5 bg-orange-50 shadow">
            <IbadaChecklist/>
          </div>
        </div>
      </div>
    </>
  );
}
