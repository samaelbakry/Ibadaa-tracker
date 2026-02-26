import { useState } from "react";
import type { AdhkarType } from "../../interfaces/adhkar";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function AdhkarCard({zekr}: { zekr: AdhkarType }) {
 const [count, setCount] = useState(0)
   const max = Number(zekr.count)

  return <>
   <div className="bg-blur my-5 text-center p-5">
      <p>{zekr.content}</p>
      <p className=" text-yellow-700 dark:text-orange-200">{zekr.description}</p>
      <p>{max} times</p>
      <div className="flex justify-center gap-5 items-center flex-wrap">
        <CiCircleMinus className="text-2xl text-yellow-700 dark:text-orange-200 cursor-pointer" 
        onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}/>
        <span>{count}</span>
        <CiCirclePlus className="text-2xl text-yellow-700 dark:text-orange-200 cursor-pointer"
          onClick={() => setCount(prev => (prev < max ? prev + 1 : prev))}
        />
      </div>
    </div>
  </>
}
