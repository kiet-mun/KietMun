"use client";
import HeroContent from "@/components/HeroSection";
import CountdownTimer from "../components/CountDownTimer";
import { useEffect, useState } from "react";
import LetterFromSecretariat from "@/components/LetterToSecretarait";
import Footer from "@/components/Footer";
import CommitteesPage from "@/components/CommitteePage";

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
      <LetterFromSecretariat/>
      <CommitteesPage/>
      <Footer/>
    </>
  );
}
