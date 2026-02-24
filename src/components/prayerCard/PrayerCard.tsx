import { useCountPrayerTime } from '../../hooks/useCountPrayerTime';

export default function PrayerCard({ icon, name, time }:{icon: React.ReactNode, name: string, time: string}) {
const timeLeft = useCountPrayerTime(time);

 return <>
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4 hover:scale-105 transition-transform duration-300">
      <p className="text-lg flex items-center mb-2">
        {icon} {name}
      </p>
      <p>{time}</p>
      <p className="text-xl font-bold">
        {timeLeft? `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` : "Passed"}
      </p>
    </div>
 </>
}
