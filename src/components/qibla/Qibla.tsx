import { FaCompass } from "react-icons/fa";

export default function QiblaCard({ degrees }: { degrees: number }) {
  return (
      <>
          <h2 className="text-lg font-semibold">اتجاه القبلة</h2>
            <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border-4 border-gray-200" />
            <div className="absolute duration-700" style={{ transform: `rotate(${degrees}deg)` }} >
              <FaCompass size={80} className="text-rose-900" />
            </div>
            <span className="absolute top-1 text-sm font-bold">N</span>
          </div>
          <p className="text-gray-600 text-sm">{degrees.toFixed(2)}°</p>
      </>

    
  );
}
