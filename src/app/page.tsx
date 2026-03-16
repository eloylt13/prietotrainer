"use client";

import { useState } from "react";
import QuickQualifier from "@/components/QuickQualifier";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Programs from "@/components/Programs";
import SocialProof from "@/components/SocialProof";
import AboutCoach from "@/components/AboutCoach";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  return (
    <main>
      <QuickQualifier onComplete={setQuizAnswers} />
      <Benefits />
      <HowItWorks />
      <Programs />
      <SocialProof />
      <AboutCoach />
      <FAQ />
      <FinalCTA quizAnswers={quizAnswers} />
    </main>
  );
}