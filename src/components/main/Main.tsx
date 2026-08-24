import Header from "../header/Header";
import Duaa from "../duaa/Duaa";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import PrayerTimes from "../prayerTimes/PrayerTimes";

export default function Main() {
  const hero = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".bg-blur", {
        opacity: 0,
        y: -40,
        duration: 0.8,
        ease: "power2.out",
      });
      
      tl.to({}, { duration: 1 });
    },
    { scope: hero },
  );

  return (
    <>
      <main ref={hero} className="min-h-screen transition-colors duration-300 py-10">
        <div className="bg-blur max-w-6xl md:mx-auto py-5 md:p-8 mx-4 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-amber-500/10 dark:border-amber-400/10 shadow-2xl shadow-amber-900/5">
          <Header />
          <div className="my-6 border-t border-amber-500/10 dark:border-slate-800" />
          <Duaa />
        </div>
        <PrayerTimes />
      </main>
    </>
  );
}