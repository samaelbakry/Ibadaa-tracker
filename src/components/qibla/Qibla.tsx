import { useEffect, useState } from "react";
import { FaCompass } from "react-icons/fa";

export default function QiblaCard({ degrees }: { degrees: number }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full h-full gap-3">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-extrabold text-amber-900 dark:text-amber-200 tracking-wide">
          اتجاه القبلة
        </h2>
      </div>

      <div className="relative w-44 h-44 flex items-center justify-center p-2 my-1">
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-amber-500/20 to-orange-500/10 blur-md dark:from-amber-400/10 dark:to-slate-800/20" />

        <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/30 dark:border-slate-700/80 animate-[spin_60s_linear_infinite]" />
        
        <div className="absolute inset-2 rounded-full bg-white/80 dark:bg-slate-800/90 border border-amber-500/20 dark:border-slate-700 shadow-inner flex items-center justify-center" />

        <span className="absolute top-3 text-xs font-black text-amber-800 dark:text-amber-400">N</span>
        <span className="absolute bottom-3 text-xs font-black text-amber-800/50 dark:text-slate-500">S</span>
        <span className="absolute right-4 text-xs font-black text-amber-800/50 dark:text-slate-500">E</span>
        <span className="absolute left-4 text-xs font-black text-amber-800/50 dark:text-slate-500">W</span>

        <div 
          className="relative z-10 transition-transform duration-300 ease-out flex items-center justify-center drop-shadow-md"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <FaCompass 
            size={88} 
            className="text-amber-700 dark:text-amber-400 filter drop-shadow-lg" 
          />
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 dark:border-amber-400/20">
        <span className="text-xs font-medium text-amber-900/70 dark:text-slate-300">Direction:</span>
        <span className="text-xs font-bold text-amber-900 dark:text-amber-300 font-mono">
          {degrees.toFixed(2)}°
        </span>
      </div>
    </div>
  );
}