import img1 from "../assets/image13.png";
import img2 from "../assets/image11.png";
import img3 from "../assets/image12.png";
import img4 from "../assets/logo2.png";
import img5 from "../assets/logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type SixthPageProps = {
	onNext: () => void;
	onBack: () => void;
};

export function SixthPage({ onNext, onBack }: SixthPageProps) {
	return (
		<div className="responsive-page flex min-h-screen items-center justify-center bg-no-repeat bg-cover bg-center p-6">
			<img src={img4} alt="Decoración floral" className="absolute left-[5%] top-[20%] w-[90px] object-cover" />
			<img src={img4} alt="Decoración floral" className="absolute left-[5%] top-[30%] w-[100px] object-cover rotate-[0.09rad]" />
			<img src={img4} alt="Decoración floral" className="absolute left-[10%] top-[25%] w-[100px] object-cover rotate-[0.09rad]" />

			<div className="responsive-page__layout relative flex h-[90vh] w-[min(140vw,1400px)] max-h-[1960px] items-center justify-between rounded-[32px] p-11">
				<div className="responsive-page__copy relative left-[7%] z-10 flex flex-col items-center rounded-3xl bg-white/80 p-7 text-center">
					<h1 className="nanum-pen-script-regular z-40 text-7xl text-[#db8b9d]">05</h1>
					<h1 className="nanum-pen-script-regular z-40 text-5xl text-[#62363a]">Quiero compartir mi vida contigo</h1>

					<p className="montserrat max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg">
						No quiero seguir esperando a sentirme completamente preparado, porque quizá nunca exista un momento perfecto.
						<br /><br />
						Quiero acompañarte en tus días buenos y en los malos. Quiero hacer planes contigo, conocer lugares nuevos, viajar, salir a comer, jugando videojuegos y terminar llenando nuestros teléfonos de fotos y recuerdos.
						<br /><br />
						Quiero aprender a amar mejor, quiero cuidarte mejor y quiero demostrarte con hechos que puedo construir algo bonito contigo.
						<br /><br />
						No quiero prometerte que nunca voy a equivocarme. Quiero prometerte que, cuando lo haga, voy a aprender, hablarlo contigo y hacerme responsable.
						<br /><br />
						Porque ya no quiero que el miedo decida por mí.
						<br /><br />
						<strong>Quiero elegirte.</strong>
					</p>
				</div>

				<div className="responsive-page__media relative right-[20%] z-10 flex max-w-xl flex-col items-center text-center">
					<div className="relative h-[420px] w-[320px] rounded-xl">
						<img src={img1} alt="Recuerdo principal" className="absolute bottom-[-5%] scale-[1.7] object-cover" />
						<img src={img2} alt="Recuerdo" className="absolute bottom-[75%] scale-[1.5] left-[50%] rounded-xl rotate-[-0.09rad]" />
						<img src={img3} alt="Recuerdo" className="absolute bottom-[20%] scale-[1.5] left-[110%] rounded-xl rotate-[0.09rad]" />
						<p className="shadows absolute bottom-[-10%] left-[85%] rotate-[0.09rad] text-2xl  w-[350px] z-40"><b>
							Me gusta pensar que todavía nos queda muchísimo por vivir</b></p>
						<img src={img5} alt="Decoración floral" className="absolute bottom-[-20%] left-[90%] rounded-xl scale-[1.5] w-[1200px] h-[200px] max-widht-[1200px] rotate-[0.09rad] z-30" />

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
		</div>
	);
}