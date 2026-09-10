import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/image3.png";
import img2 from "../assets/image10.png";
import img3 from "../assets/image15.png";
import img4 from "../assets/image14.png";
import img5 from "../assets/tape.webp";
import img6 from "../assets/logo1.png";
type FifthPageProps = {
  onNext: () => void;
  onBack: () => void;
};

export function FifthPage({ onNext, onBack }: FifthPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-no-repeat bg-cover bg-center p-4 sm:p-6">
      <div className="relative flex min-h-[90vh] w-full max-w-[1400px] flex-col items-center justify-center gap-10 rounded-[32px] p-4 sm:p-8 lg:flex-row lg:justify-between lg:gap-16">
        <div className="relative z-10 flex max-w-2xl flex-col items-center rounded-3xl bg-white/80 p-5 text-center sm:p-7 lg:w-[46%]">
          <h1 className="nanum-pen-script-regular z-40 text-7xl text-[#db8b9d]">04</h1>
          <h1 className="nanum-pen-script-regular z-40 text-5xl text-[#62363a]">Eres mi mejor amigo.
          </h1>
          <p className="montserrat max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg">
            Me gusta poder hablar contigo de cualquier cosa. Me gusta reírme contigo, hacer tonterías contigo, salir contigo y hasta esos momentos en los que simplemente estamos juntos sin hacer nada especial.<br></br>

            Me gustan tus gustos musicales, tus poses, los ademanes que haces sin darte cuenta, tus frases, tu risa y tu intensidad. Me gusta escucharte hablar de biología aunque a veces no entienda ni la mitad de lo que me estás diciendo jajaja.
            <br></br>
            Me gusta tu paciencia, las cosas que dices, la forma en la que eres y todas esas pequeñas cosas que te hacen ser tú.
            <br></br>
            Y creo que una de las cosas más bonitas que me han pasado es que la persona de la que me enamoré también sea la persona que considero mi mejor amigo.
          </p>

        </div>

        <div className="relative z-10 w-full max-w-[620px] lg:w-[48%]">
          <div className="relative grid grid-cols-2 gap-4 pt-10 sm:gap-6 sm:pt-12">
            <img src={img1} alt="Recuerdo con amigos" className="h-full w-full scale-[1.5] object-contain" />
            <img src={img2} alt="Recuerdo juntos" className="h-full scale-[1.5] rotate-[-.1rad] -translate-y-[50px] w-full object-contain" />
            <img src={img3} alt="Recuerdo especial" className="h-full w-full scale-[1.4] object-contain translate-y-[60px] translate-x-[-40px]  rotate-[-.15rad]" />
            <img src={img4} alt="Otro recuerdo especial" className="h-full scale-[1.4] w-full object-contain" />
          </div>
          <img
            src={img5}
            alt="Cinta decorativa"
            className="pointer-events-none absolute left-1/2 top-[47%] z-40 w-[42%] translate-x-[-60%] -rotate-6 object-contain"
          />

        </div>
        <img
          src={img6}
          alt="Decoración floral"
          className="absolute top-[0%] left-[-10%] w-[200px] object-contain"
        />
        <button
          onClick={onBack}
          aria-label="Página anterior"
          className="navigation-button navigation-button--back"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          onClick={onNext}
          aria-label="Página siguiente"
          className="navigation-button navigation-button--next"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

    </div >
  );
}
