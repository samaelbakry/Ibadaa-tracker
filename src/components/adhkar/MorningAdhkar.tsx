import { useAdhkar } from "../../hooks/useAdhkar"
import type { Adhkar } from "../../interfaces/adhkar";
import AdhkarCard from "../adhkarCard/AdhkarCard";

export default function MorningAdhkar() {
   const { data } : { data?:Adhkar } =  useAdhkar()
   const morningAdhkar = data?.["أذكار الصباح"].flat()
   
  return <>
  <div className="max-w-6xl mx-5 md:mx-auto bg-blur p-6 rounded-2xl shadow-lg my-8">
   <h2 className="text-center text-yellow-700 dark:text-orange-200 text-base md:text-2xl"> أذكار الصباح</h2>
    {morningAdhkar?.map((zekr , index)=>(
      <AdhkarCard key={index} zekr={zekr} />
    ))}
  </div>
  </>
}
