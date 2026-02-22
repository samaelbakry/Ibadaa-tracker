import { useEffect, useState } from "react";

export function useCountDown(targetTime: Date | null) {
    const [timeLeft, setTimeLeft] = useState<number>(0)

    useEffect(() => {
     if(!targetTime) return
     const interval = setInterval(() => {
        const diff = targetTime.getTime() - new Date().getTime()
        setTimeLeft(diff)
     }, 1000)
     return () => clearInterval(interval)
    }, [targetTime])
    
    return timeLeft
}