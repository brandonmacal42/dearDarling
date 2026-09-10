import { useState } from "react";
import "./flowerPage/flowerPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type PhrasesPageProps = {
  onNext: () => void;
  onBack: () => void;
  onSuccess: () => void;
};

export function PhrasesPage({ onBack, onSuccess }: PhrasesPageProps) {
  const [noCount, setNoCount] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estás seguro? :c",
      "¿Y si te lo pidiera con mucha ternura? :c",
      "Por favorcito :c",
      "Y si te regalo un pastelito? :c",
      "¿Y qué tal un matcha frío? :c",
      "POR FAVOR, AMOR",
      "Pero :'(",
      "Voy a morir",
      "Sí, ya estoy muerto",
      "Bueno, ahora estás hablando con el fantasma de Brandon",
      "Por favor, amor",
      ":((((",
      "POR FAVORCITO",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleYes = () => {
    onSuccess();
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="relative flex min-h-[70vh] w-[min(90vw,900px)] items-center justify-center overflow-hidden rounded-[32px] border border-pink-200 bg-white/80 p-8 shadow-[0_24px_80px_rgba(183,130,160,0.18)] backdrop-blur-sm">
        <div className="relative z-10 flex max-w-xl flex-col items-center gap-5 text-center">
          <p className="montserrat text-lg leading-8 text-gray-700 sm:text-xl">
            Después de todo lo que quería decirte...
            <br />
            creo que solamente queda una pregunta.
          </p>

          <div className="relative h-[180px] w-[260px] overflow-hidden" aria-hidden="true">
            <img
              className="h-[200px] rounded-xl object-cover"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Osito enamorado"
            />
          </div>
          <h1 className="nanum-pen-script-regular text-5xl text-[#62363a] sm:text-6xl">
            ¿Quieres ser mi novio? ❤️
          </h1>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              className="rounded bg-green-500 px-5 py-3 font-bold text-white transition hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYes}
            >
              Sí
            </button>

            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>

        </div>
      </div>

      <button
        onClick={onBack}
        aria-label="Página anterior"
        className="navigation-button navigation-button--back"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

    </div>
  );
}
