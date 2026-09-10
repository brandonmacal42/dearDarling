import img1 from "../assets/image6 10.png";
import img2 from "../assets/image6 11.png";
import img3 from "../assets/image7.png";
import img4 from "../assets/logo2.png";
import img5 from "../assets/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type SevenPageProps = {
	onNext: () => void;
	onBack: () => void;
};

export function SevenPage({ onNext, onBack }: SevenPageProps) {
	return (
		<div className="responsive-page flex min-h-screen items-center justify-center bg-no-repeat bg-cover bg-center p-6">
			<img src={img4} alt="Decoración floral" className="absolute left-[5%] top-[20%] w-[100px] object-cover" />
			<img src={img4} alt="Decoración floral" className="absolute left-[5%] top-[30%] w-[150px] object-cover rotate-[0.09rad]" />
			<img src={img4} alt="Decoración floral" className="absolute left-[10%] top-[25%] w-[150px] object-cover rotate-[0.09rad]" />
			<img src={img5} alt="" className="absolute right-[10%] bottom-[5%] w-[150px] scale-[1.9] object-cover rotate-[0.09rad]" />
			<div className="responsive-page__layout relative flex h-[90vh] w-[min(140vw,1400px)] max-h-[1960px] items-center justify-between rounded-[32px] p-11">
				<div className="responsive-page__copy relative left-[7%] z-10 flex flex-col items-center rounded-3xl bg-white/80 p-7 text-center">
					<h1 className="nanum-pen-script-regular z-40 text-7xl text-[#db8b9d]">06</h1>
					<h1 className="nanum-pen-script-regular z-40 text-5xl text-[#62363a]">Finalmente solo quiero decirte algo</h1>

					<p className="montserrat max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg">
						Quiero hacerte sentir querido, presumirte y que nunca tengas que dudar de lo importante que eres para mí.
						<br></br>
						Quiero mejorar, aprender de lo que pasó y convertirme en la persona que quieres tener a tu lado.
						<br></br>
						Quiero seguir compartiendo mi vida contigo, seguir creando recuerdos y disfrutar todo lo que todavía nos queda por vivir.
						<br></br>
						Y te prometo que voy a cuidar mucho más de ti y de lo que tenemos. No quiero volver a fallarte.


					</p>
					<img
						className=" w-[420px]  object-cover"
						src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
						alt="Osito con rosas"
					/>

				</div>

				<div className="responsive-page__media relative right-[20%] z-10 flex max-w-xl flex-col items-center text-center">
					<div className="relative h-[420px] w-[320px] rounded-xl">
						<img src={img1} alt="Recuerdo principal" className="absolute bottom-[-5%] scale-[1.7] object-cover" />
						<img src={img2} alt="Recuerdo" className="absolute bottom-[75%] left-[50%] scale-[1.5] rounded-xl rotate-[-0.09rad]" />
						<img src={img3} alt="Recuerdo" className="absolute bottom-[20%] left-[110%] scale-[1.5] rounded-xl rotate-[0.09rad]" />

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
			<button
				onClick={onNext}
				aria-label="Página siguiente"
				className="navigation-button navigation-button--next"
			>
				<FontAwesomeIcon icon={faArrowRight} />
			</button>
		</div>
	);
}
