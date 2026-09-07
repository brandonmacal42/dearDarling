import img1 from "../assets/image8.png";
import img2 from "../assets/image7.png";
import img3 from "../assets/image9.png";
import img4 from "../assets/logo2.png";
import img5 from "../assets/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type BeforeThirdPageProps = {
	onNext: () => void;
	onBack: () => void;
};
export function BeforeThirdPage({ onNext, onBack }: BeforeThirdPageProps) {
	return (
		<div className="flex min-h-screen items-center justify-center  bg-no-repeat bg-cover bg-center p-6">
			<img src={img4} alt="Image 4" className="top-[20%] w-[100px] object-cover absolute left-[5%]" />
			<img src={img4} alt="Image 4" className="top-[30%] w-[150px] object-cover absolute left-[5%] rotate-[0.09rad]" />
			<img src={img4} alt="Image 4" className="top-[25%] w-[150px] object-cover absolute left-[10%] rotate-[0.09rad]" />

			<div className="relative flex h-[90vh] w-[min(140vw,1400px)] max-h-[1960px] items-center justify-between  rounded-[32px] p-11 	">
				<div className="relative z-10 left-[7%] flex  flex-col items-center rounded-3xl text-center  bg-white/80 p-7">
					<h1 className="text-black-600 text-7xl z-40  nanum-pen-script-regular text-[#db8b9d]" >03</h1>
					<h1 className="text-black-600 text-5xl z-40  nanum-pen-script-regular text-[#62363a]">Pero ya no quiero tener miedo</h1>

					<p className="max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg montserrat">
						No sé exactamente en qué momento dejaste de ser simplemente alguien con quien me gustaba
						estar y te convertiste en una de las personas más importantes de mi vida.
						<br></br><br></br>
						Hoy entiendo algo que antes no podía ver tan claro: no necesito dejar de tener miedo para elegirte.
						<br></br>
						<br></br>
						Quizá estar listo no significa no tener miedo. Quizá significa mirar ese miedo y decidir que la persona que tienes enfrente vale mucho más que él.
						<br></br>

						Y tú vales muchísimo para mí.
					</p>
					{/* <p className="max-w-lg text-center text-base leading-8 text-gray-700 sm:text-lg">
					</p> */}
				</div>

				<div className="relative z-10 right-[20%] flex max-w-xl flex-col items-center text-center">

					<div className="relative h-[420px] w-[320px]  rounded-xl">
					</div>

					<img src={img1} alt="Image 1" className="h-full w-full top-[10%] object-cover" />
					<img src={img2} alt="Image 2" className="rounded-xl absolute left-[30%] bottom-[45%] rotate-[-0.09rad]" />
					<img src={img3} alt="Image 3" className="rounded-xl absolute left-[80%] bottom-[20%] rotate-[0.09rad]" />

				</div>
				<button
					onClick={onBack}
					className="absolute bottom-10 left-40 rounded bg-[#db8b9d] px-6 py-3 font-bold text-white transition hover:bg-[#83313d]"
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
