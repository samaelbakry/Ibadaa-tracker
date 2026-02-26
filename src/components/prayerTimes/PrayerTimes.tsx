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
  const { data, isLoading }: { data?: PrayerData; isLoading: boolean } = usePrayer(location?.lat!, location?.lng!);

  const times = data?.data.times;

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
      <div className="max-w-6xl mx-5 md:mx-auto bg-blur p-6 rounded-2xl shadow-lg my-8">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2 md:gap-0">
          <h2 className="font-bold text-yellow-700 text-lg md:text-3xl dark:text-white">
            <FaMosque className="mr-2 inline-block text-yellow-700"/>
            Today's Prayer Times
          </h2>
          <div className="flex gap-3 items-center flex-wrap">
            <p className="font-bold text-yellow-700 dark:text-white text-base md:text-2xl">
              {data?.data?.date?.gregorian?.date}
            </p>
            <p className="font-bold text-yellow-700 dark:text-white text-base md:text-2xl">
              {data?.data?.date?.hijri?.weekday.ar}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-orange-50 dark:bg-blue-100 rounded-2xl p-5 font-semibold text-gray-700">
          {prayerList.map((prayer) => {
            return <PrayerCard key={prayer.name} icon={prayer.icon} name={prayer.name} time={times?.[prayer.name] || ""}  isLoading={isLoading}/>;
          })}

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-2 gap-2">
          <div className="grid-col-span-1 rounded-2xl p-6 flex flex-col items-center gap-4 bg-orange-50 shadow dark:bg-blue-100">
            <QiblaCard degrees={data?.data.qibla.direction.degrees || 0} />
          </div>
          <div className="grid-col-span-1 rounded-2xl p-5 bg-orange-50 shadow dark:bg-blue-100">
            <IbadaChecklist/>
          </div>
        
         <Link to="/quran" className="block text-center mt-4 text-yellow-700 font-bold bg-blur hover:bg-yellow-700/80 hover:text-white dark:hover:bg-blue-900 dark:text-white p-2 px-4 rounded-md duration-500">
          View all Quran chapters
         </Link>
           <Link to="/morningadhkar" className="block text-center mt-4 text-yellow-700 font-bold bg-blur hover:bg-yellow-700/80 hover:text-white dark:hover:bg-blue-900 dark:text-white p-2 px-4 rounded-md duration-500">
          View Morning Adhkar
           </Link>
           <Link to="/eveningadhkar" className="block text-center mt-4 text-yellow-700 font-bold bg-blur hover:bg-yellow-700/80 hover:text-white dark:hover:bg-blue-900 dark:text-white p-2 px-4 rounded-md duration-500">
          View Evening Adhkar
           </Link>
           </div>
     
       
      </div>
    </>
  );
}
