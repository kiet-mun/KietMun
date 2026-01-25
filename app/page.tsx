"use client";
import HeroContent from "@/app/components/HeroSection";
import CountdownTimer from "./components/CountDownTimer";
import { useEffect, useState } from "react";

export default function Home() {
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    setShowTimer(true);
  }, []);
  return (
    <>
      {/* HERO SECTION */}
      <HeroContent />
      {showTimer && <CountdownTimer />}



      {/* LETTER SECTION */}
      < section className="bg-white py-24" >
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-center text-4xl font-extrabold text-[#0b2344]">
            Letter from the Secretariat
          </h2>

          <div className="space-y-8 text-[17px] leading-relaxed text-[#0b2344]">
            <p className="font-medium">
              Dear Delegates and Faculty Advisors,
            </p>

            <p>
              Bringing the world’s citizens together on a platform where disputes
              may be settled through involvement, communication, and understanding
              is urgently needed. Through MUNs, students learn about diplomacy,
              international relations, and the United Nations.
            </p>

            <p>
              We’ve always welcomed opportunities that broaden the perspectives of
              our young, dynamic leaders. With this thought in mind, we welcome you
              to{" "}
              <span className="font-semibold text-[#b08a2e]">
                KIET MUN 2025
              </span>{" "}
              and its engaging and stimulating sessions ahead.
            </p>

            <p>
              Let the debates inspire new perspectives and build bridges of
              collaboration.
            </p>
          </div>
        </div>
      </section >
    </>
  );
}
