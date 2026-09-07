import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/image3.png";
import img4 from "../assets/logo1.png";
type FifthPageProps = {
  onNext: () => void;
  onBack: () => void;
};

export function FifthPage({ onNext, onBack }: FifthPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-no-repeat bg-cover bg-center p-6">
      <div className="relative flex h-[90vh] w-[min(140vw,1400px)] max-h-[1960px] items-center justify-between rounded-[32px] p-11">
        <div className="relative left-[7%] z-10 flex max-w-2xl flex-col items-center rounded-3xl bg-white/80 p-7 text-center">
          <h1 className="nanum-pen-script-regular z-40 text-7xl text-[#db8b9d]">05</h1>
          <h1 className="nanum-pen-script-regular z-40 text-5xl text-[#62363a]">Eres mi mejor amigo.
          </h1>
          <p className="montserrat max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg">
            <br /><br />
            Me gusta poder hablar contigo de cualquier cosa. Me gusta reírme contigo, hacer tonterías contigo, salir contigo y hasta esos momentos en los que simplemente estamos juntos sin hacer nada special.
            <br /><br />
            Me gusta cómo eres, cómo me haces sentir y la tranquilidad de poder ser yo cuando estoy contigo.
            <br /><br />
            Y creo que una de las cosas más bonitas que me han pasado es que la persona de la que me enamoré también sea la persona que considero mi mejor amigo.
          </p>
        </div>

        <div className="relative right-[0%] z-10 flex max-w-xl flex-col items-center text-center">
          {/* <img
            className="h-[420px]  rounded-xl object-cover"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Osito con rosas"
          /> */}
          <img src={img1} alt="Image 2" className="rounded-xl h-[420px]  object-cover rotate-[-0.09rad]" />
        </div>

        <img src={img4} alt="Decoración floral" className="absolute left-[-10%] top-[-9%] w-[350px] object-cover" />
      </div>
      <button
        onClick={onBack}
        aria-label="Página anterior"
        className="absolute bottom-10 left-40 rounded bg-[#db8b9d] px-6 py-3 font-bold text-white transition hover:bg-[#83313d]"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={onNext}
        aria-label="Página siguiente"
        className="absolute bottom-10 right-40 rounded bg-[#db8b9d] px-6 py-3 font-bold text-white transition hover:bg-[#83313d]"
      ><FontAwesomeIcon icon={faArrowRight} />
      </button>

    </div>
  );
}
