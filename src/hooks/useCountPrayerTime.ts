import { useEffect, useState } from "react";

export function getTimeRemaining(prayerTime:string) {
    const [hours , minutes] = prayerTime.split(":").map(Number);
    const now = new Date()
    const target = new Date()
    target.setHours(hours , minutes , 0 , 0) 
    if (target <now) return null

    const totalMs = target.getTime() - now.getTime()

    const remainingSeconds = Math.floor(totalMs /1000)
    const hoursRemaining = Math.floor(remainingSeconds /3600)
    const minutesRemaining = Math.floor((remainingSeconds % 3600) /60)
    const secondsRemaining = remainingSeconds % 60;

    return { hours: hoursRemaining, minutes: minutesRemaining, seconds: secondsRemaining};
}

export function useCountPrayerTime(prayerTime:string) {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(prayerTime ?? ""))

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining(prayerTime ?? ""))
        }, 1000)
        return () => clearInterval(interval)
    }, [prayerTime])

      return timeLeft;

;
}