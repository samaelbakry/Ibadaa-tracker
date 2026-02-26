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
      <main ref={hero}>
        <div className="bg-blur max-w-6xl md:mx-auto my-20 p-5 mx-4">
          <Header />
          <Duaa />
        </div>
        <PrayerTimes />
      </main>
    </>
  );
}
