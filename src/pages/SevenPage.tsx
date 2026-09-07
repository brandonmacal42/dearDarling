import img1 from "../assets/image10.png";
import img2 from "../assets/image11.png";
import img3 from "../assets/image12.png";
import img4 from "../assets/logo2.png";
import img5 from "../assets/logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type SevenPageProps = {
	onNext: () => void;
	onBack: () => void;
};

export function SevenPage({ onNext, onBack }: SevenPageProps) {
	return (
		<div className="flex min-h-screen items-center justify-center bg-no-repeat bg-cover bg-center p-6">
			<img src={img4} alt="Decoración floral" className="absolute left-[5%] top-[20%] w-[100px] object-cover" />
			<img src={img4} alt="Decoración floral" className="absolute left-[5%] top-[30%] w-[150px] object-cover rotate-[0.09rad]" />
			<img src={img4} alt="Decoración floral" className="absolute left-[10%] top-[25%] w-[150px] object-cover rotate-[0.09rad]" />

			<div className="relative flex h-[90vh] w-[min(140vw,1400px)] max-h-[1960px] items-center justify-between rounded-[32px] p-11">
				<div className="relative left-[7%] z-10 flex flex-col items-center rounded-3xl bg-white/80 p-7 text-center">
					<h1 className="nanum-pen-script-regular z-40 text-7xl text-[#db8b9d]">07</h1>
					<h1 className="nanum-pen-script-regular z-40 text-5xl text-[#62363a]">Te elijo</h1>

					<p className="montserrat max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg">
						No quiero seguir esperando a sentirme completamente preparado, porque quizá nunca exista un momento perfecto.
						<br /><br />
						Quiero hacerlo contigo.
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

				<div className="relative right-[20%] z-10 flex max-w-xl flex-col items-center text-center">
					<div className="relative h-[420px] w-[320px] rounded-xl">
						<img src={img1} alt="Recuerdo principal" className="absolute bottom-[-5%] scale-[1.7] object-cover" />
						<img src={img2} alt="Recuerdo" className="absolute bottom-[75%] left-[50%] scale-[1.5] rounded-xl rotate-[-0.09rad]" />
						<img src={img3} alt="Recuerdo" className="absolute bottom-[20%] left-[110%] scale-[1.5] rounded-xl rotate-[0.09rad]" />
						<p className="shadows absolute bottom-[-10%] left-[85%] z-40 w-[350px] rotate-[0.09rad] text-2xl">
							<b>Me gusta pensar que todavía nos queda muchísimo por vivir</b>
						</p>
						<img src={img5} alt="Decoración floral" className="absolute bottom-[-20%] left-[90%] z-30 h-[200px] w-[1200px] max-w-[1200px] scale-[1.5] rounded-xl rotate-[0.09rad]" />
					</div>
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
				>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</div>
	);
}
