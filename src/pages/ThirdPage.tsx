import img1 from "../assets/logo1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image8.png";
import img4 from "../assets/tape.webp";
import img5 from "../assets/logo2.png";
import img6 from "../assets/image6 5.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
type SecondNextPageProps = {
  onNext: () => void;
  onBack: () => void;
};
export function SecondNextPage({ onNext, onBack }: SecondNextPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-no-repeat bg-cover bg-center p-6">
      <img src={img5} alt="" className="absolute top-[10%] left-[19%] z-50 w-[400px] -translate-x-1/2 object-cover" />
      <div className="relative flex h-[90vh] w-[min(140vw,1400px)] max-h-[1960px] items-center justify-between  rounded-[32px] p-10">
        <div className="relative z-10 left-[9%] flex max-w-[500px] max-w-m flex-col items-center rounded-3xl text-center bg-white/80 p-9">
          <h1 className="nanum-pen-script-regular z-40 text-7xl text-[#db8b9d]">02</h1>
          <h1 className="nanum-pen-script-regular z-40 text-5xl text-[#62363a]">
            Me importas mucho
          </h1>

          <p className="m-5 max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg montserrat">
            Una de las cosas que más me ha costado aceptar es precisamente lo mucho que me importas. Porque cuando alguien realmente te importa, también aparece el miedo.
            <br></br>
            Me daba miedo ser vulnerable contigo, me daba miedo abrirme y mostrarte lo que siento, porque eso significaba que podía perderte, como me paso en el pasado, y no quería volver a sentir ese dolor.
            <br></br>
            No me daba miedo estar contigo.
          </p>

          <p className="max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg montserrat">
            <b className="font-bold text-2xl">Me daba miedo estar contigo y luego perderte</b>
          </p>
        </div>
        <img src={img1} alt="" className=" absolute  bottom-[-5%] right-[20%] z-40 w-[220px] object-cover" />

        <div className="relative z-10 right-[20%] flex max-w-xl flex-col items-center text-center">
          <div className="relative h-[420px] w-[320px]   rounded-xl">
            <img src={img6} alt="" className="h-full  scale-[1.5] w-full translate-6 object-cover rotate-[-0.042rad] " />

          </div>
          <img src={img2} alt="" className="rounded-xl absolute scale-[1.7] left-[100%] bottom-[50%] rotate-[0.09rad]" />
          {/* <img src={img2} alt="" className="rounded-xl absolute scale-[1.2] left-[93%] bottom-[30%] rotate-[0.09rad] opacity-100" /> */}
        </div>
        <button
          onClick={onBack}
          className="rounded absolute bottom-10 left-40 bg-[#db8b9d] px-6 py-3 font-bold text-white transition hover:bg-[#83313d]"
        >
          <FontAwesomeIcon icon={faArrowLeft} />

        </button>
        <button
          onClick={onNext}
          className="absolute bottom-10 right-40 rounded bg-[#db8b9d] px-6 py-3 font-bold text-white transition  hover:bg-[#83313d]"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
