import img1 from "../assets/image5.png";
// import img2 from "../assets/image6.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
type SecondPageProps = {
  onNext: () => void;
  onBack: () => void;
};
export function SecondPage({ onNext, onBack }: SecondPageProps) {
  return (
    <div className="responsive-page second-page flex min-h-screen items-center justify-center bg-[url('/src/assets/image4.png')] bg-no-repeat bg-cover bg-center p-6">

      <div className="responsive-page__layout relative flex h-[90vh] w-[min(140vw,1500px)] max-h-[1960px] items-center justify-between p-10  rounded-[32px] ">
        {/* <div className="absolute  flex justify-between inset-0" /> */}
        <div className="responsive-page__copy relative z-10 flex max-w-m flex-col items-center  rounded-3xl text-center left-[9%] max-w-[500px]">
          <h1 className="text-black-600 text-7xl z-40  nanum-pen-script-regular text-[#db8b9d]" >01</h1>
          <h1 className="text-black-600 text-5xl z-40  nanum-pen-script-regular text-[#62363a] mb-10">Se que probablemente estés molesto conmigo</h1>
          <p className="max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg  montserrat">
            Y lo entiendo.<br
            ></br>
            Sé que cometí un error y que te lastimé. No quiero justificarlo ni hacer como si no hubiera pasado, porque sé que hubo cosas que hice que pudieron hacerte sentir mal, y me duele saber que fui yo quien te hizo sentir así.
            <br></br>
            He pensado mucho en lo que pasó y en cómo pudiste sentirte. Y aunque quisiera poder regresar y hacer las cosas diferente, sé que no puedo :c<br></br>

            Tampoco quiero decirte simplemente “perdón” esperando que con eso todo se arregle, sé que no funciona así. <br></br>La confianza y la tranquilidad no se recuperan solamente con palabras.
          </p>

        </div>
        <div className="responsive-page__media relative z-10 flex max-w-xl flex-col items-center text-center right-[10%]">
          <div className="second-page__media-frame relative justify-items-center h-[620px] w-[520px] rounded-xl">
            <p className="max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg montserrat">
              Lo único que puedo hacer ahora es aprender de lo que pasó y demostrártelo con mis acciones.<br></br>
              Pero sobre todo quiero que sepas algo:
              <br></br>
              No estoy haciendo esto solamente porque tenga miedo de perderte. Lo hago para que sepas lo mucho que significas para mí.
              <br></br>Y por eso cree esto, desde el fondo de mi corazon &#9829;
            </p>

            <img
              src={img1}
              alt=""
              className="second-page__image absolute bottom-[-20%]  z-30 rounded-xl object-cover"
            />
          </div>

        </div>
        <button
          onClick={onBack}
          className="navigation-button navigation-button--back"
        >
          <FontAwesomeIcon icon={faArrowLeft} />

        </button>
        <button
          onClick={onNext}
          className="navigation-button navigation-button--next"
        >
          <FontAwesomeIcon icon={faArrowRight} />

        </button>
      </div>


    </div>
  );
}
