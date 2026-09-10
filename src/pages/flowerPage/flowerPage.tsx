import type { CSSProperties } from "react";
import "./flowerPage.css";

type IntroPageProps = {
  onNext: () => void;
};

const delay = (value: string): CSSProperties => ({
  ["--d" as any]: value,
});

export function IntroPage({ onNext }: IntroPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">


      {/* <div className="relative flex flex-col h-[70vh] w-[min(90vw,900px)] max-h-[760px] items-center justify-center overflow-hidden rounded-[32px] border border-pink-200 bg-white/70 shadow-[0_24px_80px_rgba(183,130,160,0.18)] backdrop-blur-sm"> */}

      <div className="relative flex flex-col h-[70vh] w-[min(90vw,900px)] max-h-[760px] items-center justify-center overflow-hidden rounded-[32px] ">
        <h1 className=" text-black-600  z-40 licorice ">Querido Cris</h1>

        <div className="absolute inset-0  " />

        <div className="relative z-10 flex h-full w-full justify-center">
          <div className="night" />
          <div className="flowers">
            <div className="flower flower--1">
              <div className="flower__leafs flower__leafs--1">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__white-circle" />

                <div className="flower__light flower__light--1" />
                <div className="flower__light flower__light--2" />
                <div className="flower__light flower__light--3" />
                <div className="flower__light flower__light--4" />
                <div className="flower__light flower__light--5" />
                <div className="flower__light flower__light--6" />
                <div className="flower__light flower__light--7" />
                <div className="flower__light flower__light--8" />
              </div>

              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1" />
                <div className="flower__line__leaf flower__line__leaf--2" />
                <div className="flower__line__leaf flower__line__leaf--3" />
                <div className="flower__line__leaf flower__line__leaf--4" />
                <div className="flower__line__leaf flower__line__leaf--5" />
                <div className="flower__line__leaf flower__line__leaf--6" />
              </div>
            </div>

            <div className="flower flower--2">
              <div className="flower__leafs flower__leafs--2">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__white-circle" />

                <div className="flower__light flower__light--1" />
                <div className="flower__light flower__light--2" />
                <div className="flower__light flower__light--3" />
                <div className="flower__light flower__light--4" />
                <div className="flower__light flower__light--5" />
                <div className="flower__light flower__light--6" />
                <div className="flower__light flower__light--7" />
                <div className="flower__light flower__light--8" />
              </div>

              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1" />
                <div className="flower__line__leaf flower__line__leaf--2" />
                <div className="flower__line__leaf flower__line__leaf--3" />
                <div className="flower__line__leaf flower__line__leaf--4" />
              </div>
            </div>

            <div className="flower flower--3">
              <div className="flower__leafs flower__leafs--3">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__white-circle" />

                <div className="flower__light flower__light--1" />
                <div className="flower__light flower__light--2" />
                <div className="flower__light flower__light--3" />
                <div className="flower__light flower__light--4" />
                <div className="flower__light flower__light--5" />
                <div className="flower__light flower__light--6" />
                <div className="flower__light flower__light--7" />
                <div className="flower__light flower__light--8" />
              </div>

              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1" />
                <div className="flower__line__leaf flower__line__leaf--2" />
                <div className="flower__line__leaf flower__line__leaf--3" />
                <div className="flower__line__leaf flower__line__leaf--4" />
              </div>
            </div>

            <div className="grow-ans" style={delay("1.2s")}>
              <div className="flower__g-long">
                <div className="flower__g-long__top" />
                <div className="flower__g-long__bottom" />
              </div>
            </div>

            <div className="growing-grass">
              <div className="flower__grass flower__grass--1">
                <div className="flower__grass--top" />
                <div className="flower__grass--bottom" />
                <div className="flower__grass__leaf flower__grass__leaf--1" />
                <div className="flower__grass__leaf flower__grass__leaf--2" />
                <div className="flower__grass__leaf flower__grass__leaf--3" />
                <div className="flower__grass__leaf flower__grass__leaf--4" />
                <div className="flower__grass__leaf flower__grass__leaf--5" />
                <div className="flower__grass__leaf flower__grass__leaf--6" />
                <div className="flower__grass__leaf flower__grass__leaf--7" />
                <div className="flower__grass__leaf flower__grass__leaf--8" />
                <div className="flower__grass__overlay" />
              </div>
            </div>

            <div className="growing-grass">
              <div className="flower__grass flower__grass--2">
                <div className="flower__grass--top" />
                <div className="flower__grass--bottom" />
                <div className="flower__grass__leaf flower__grass__leaf--1" />
                <div className="flower__grass__leaf flower__grass__leaf--2" />
                <div className="flower__grass__leaf flower__grass__leaf--3" />
                <div className="flower__grass__leaf flower__grass__leaf--4" />
                <div className="flower__grass__leaf flower__grass__leaf--5" />
                <div className="flower__grass__leaf flower__grass__leaf--6" />
                <div className="flower__grass__leaf flower__grass__leaf--7" />
                <div className="flower__grass__leaf flower__grass__leaf--8" />
                <div className="flower__grass__overlay" />
              </div>
            </div>

            <div className="grow-ans" style={delay("2.4s")}>
              <div className="flower__g-right flower__g-right--1">
                <div className="leaf" />
              </div>
            </div>

            <div className="grow-ans" style={delay("2.8s")}>
              <div className="flower__g-right flower__g-right--2">
                <div className="leaf" />
              </div>
            </div>

            <div className="grow-ans" style={delay("2.8s")}>
              <div className="flower__g-front">
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                  <div className="flower__g-front__leaf" />
                </div>
                <div className="flower__g-front__line" />
              </div>
            </div>

            <div className="grow-ans" style={delay("3.2s")}>
              <div className="flower__g-fr">
                <div className="leaf" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--1" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--2" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--3" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--4" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--5" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--6" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--7" />
                <div className="flower__g-fr__leaf flower__g-fr__leaf--8" />
              </div>
            </div>
          </div>


          <button
            onClick={onNext}
            className="navigation-button navigation-button--start"
          >
            Comenzar 🤍
          </button>
        </div>
      </div>

    </div>
  );
}
