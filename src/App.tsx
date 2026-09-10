"use client";
import { useState } from "react";
import { IntroPage } from "./pages/flowerPage/flowerPage";
import { SecondPage } from "./pages/SecondPage";
import { SecondNextPage } from "./pages/ThirdPage";
import { BeforeThirdPage } from "./pages/FourthPage";
import { PhrasesPage } from "./pages/PhrasesPage";
import { SuccessPage } from "./pages/SuccessPage";
import { FifthPage } from "./pages/FifthPage";
import { SixthPage } from "./pages/SixthPage";
import { SevenPage } from "./pages/SevenPage";
export default function App() {
  const [step, setStep] = useState<
    "intro" | "second" | "secondNext" | "beforeThird" | "third" | "sixth" | "seven" | "phrases" | "success"
  >("intro");

  if (step === "intro") {
    return <IntroPage onNext={() => setStep("second")} />;
  }


  if (step === "second") {
    return (
      <SecondPage
        onBack={() => setStep("intro")}
        onNext={() => setStep("secondNext")}
      />
    );
  }
  if (step === "secondNext") {
    return <SecondNextPage onNext={() => setStep("beforeThird")} onBack={() => setStep("second")} />;
  }
  if (step === "beforeThird") {
    return (
      <BeforeThirdPage
        onBack={() => setStep("secondNext")}
        onNext={() => setStep("third")}
      />
    );
  }
  if (step === "third") {
    return <FifthPage onBack={() => setStep("beforeThird")} onNext={() => setStep("sixth")} />;
  }

  if (step === "sixth") {
    return <SixthPage onBack={() => setStep("third")} onNext={() => setStep("seven")} />;
  }

  if (step === "seven") {
    return <SevenPage onBack={() => setStep("sixth")} onNext={() => setStep("phrases")} />;
  }
  if (step === "phrases") {
    return (
      <PhrasesPage
        onBack={() => setStep("seven")}
        onNext={() => setStep("success")}
        onSuccess={() => setStep("success")}
      />
    );
  }

  return <SuccessPage />;
}
