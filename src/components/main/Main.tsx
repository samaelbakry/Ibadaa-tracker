import Header from "../header/Header";
import Duaa from "../duaa/Duaa";
import image from "./../../assets/8445202-removebg-preview.png";
import { useRef } from "react";
import { SplitText } from "gsap/src/SplitText.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import PrayerTimes from "../prayerTimes/PrayerTimes";

export default function Main() {
  const hero = useRef<HTMLDivElement>(null)

  useGSAP(
  () => {
    const tl = gsap.timeline();
    tl.from(".bg-blur", {
      opacity: 0,
      y: -40,
      duration: 0.8,
      ease: "power2.out"
    });
    tl.fromTo(".Ramadan-Tracker", {
      y: 0,
      opacity: 0
    }, {
      y: 20,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.3
    }, "+=0.2");
    tl.to({},{duration:1} )
  },
  { scope: hero }
);

  return (
    <>
      <main ref={hero}>
         <div className="flex items-center justify-between">
              <img src={image}  alt="Ramadan Tracker" className="object-cover w-70 h-90 Ramadan-Tracker"/>
              <img src={image}  alt="Ramadan Tracker" className="object-cover w-70 h-90 Ramadan-Tracker hidden md:block"/>
          </div>
          <div className="bg-blur max-w-6xl mx-auto my-3 p-5">
             <Header />
             <Duaa />
        </div>
        <PrayerTimes/>
      </main>

     
    </>
  );
}
