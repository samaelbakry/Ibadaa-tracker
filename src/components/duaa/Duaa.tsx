import { useRamadanData } from "../../hooks/useRamadanData";
import { useUserLocation } from "../../hooks/useUserLocation";
import { FaPrayingHands } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import type { Root } from "../../interfaces/ramadanData";

export default function Duaa() {
  const location = useUserLocation();

  const { data }: { data?: Root } = useRamadanData(
    location?.lat,
    location?.lng,
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 my-5 gap-2">
        <div className="col-span-1 bg-orange-100/70 p-5 rounded-xl shadow flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-3 text-rose-900">
            <FaPrayingHands className="mr-1 inline-block" /> Duaa of the day
          </h2>
          <p>{data?.resource?.dua?.title}</p>
          <p>{data?.resource?.dua?.arabic}</p>
          <p>{data?.resource?.dua?.translation}</p>
        </div>
        <div className="col-span-1 bg-orange-100/70 p-5 rounded-xl shadow flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-3 text-rose-900">
            <FaBookOpen className="mr-1 inline-block" /> Hadith of the day
          </h2>
          <p>{data?.resource?.hadith.arabic}</p>
          <p>{data?.resource?.hadith.english}</p>
          <p>{data?.resource?.hadith.source}</p>
        </div>
      </div>
    </>
  );
}
