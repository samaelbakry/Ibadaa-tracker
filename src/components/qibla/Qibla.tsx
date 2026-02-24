import { useEffect , useState } from "react";
import { FaCompass } from "react-icons/fa";

export default function QiblaCard({ degrees }: { degrees: number }) {
     const [rotation, setRotation] = useState(0)
     
     useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {

        const centerX =window.innerWidth /2 
        const centerY = window.innerHeight /2 

        const deltaX = e.clientX -centerX
        const deltaY = e.clientY-centerY

        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotation(angle);
      }
      window.addEventListener("mousemove" , handleMouseMove) 
      return () => window.removeEventListener("mousemove", handleMouseMove);
     },[])

  return (
      <>
          <h2 className="text-lg font-semibold">اتجاه القبلة</h2>
            <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border-4 border-gray-200" />
            <div className="absolute duration-700" >
              <FaCompass size={80} style={{ transform: `rotate(${rotation}deg)` }}  className="text-rose-900" />
            </div>
            <span className="absolute top-1 text-sm font-bold">N</span>
          </div>
          <p className="text-gray-600 text-sm">{degrees.toFixed(2)}°</p>
      </>

    
  );
}

