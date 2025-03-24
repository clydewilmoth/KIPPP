import { useNavigate } from "react-router-dom";
import css from "./styles.module.css";
import Logo from "../../assets/logowhite_withoutp.svg";
import LogoLegacy from "../../assets/logolegacy.png";
import P from "../../assets/p.svg";
import Calculator from "../../assets/calc.svg";
import { useState } from "react";

//Startseite Komponente
export default function Home() {
  const navigate = useNavigate();
  //Zustandvariablen als Counter für das Legacy Feature
  const [pClicked, setPClicked] = useState(0);
  const [homeClicked, setHomeCliked] = useState(0);

  return (
    //Wenn der Hintergrund genau 9 mal geklickt wird und das gekippte P genau einmal gedklickt wird,
    //dann wechselt die Homepage zu unserem ersten Prototypen
    //Simple Navigation Homepage zwischen allen verfügbaren Routen und externen Verweis auf guten Rechner
    <>
      {pClicked == 1 && homeClicked == 10 ? (
        <div className={css.homeLegacy}>
          <img src={LogoLegacy} className={css.logoLegacy} />
          <div className={css.buttonContainerLegacy}>
            <div
              className={css.buttonLegacy}
              onClick={() => navigate("/klimawissen")}
            >
              Klimawissen
            </div>

            <div
              className={css.buttonLegacy}
              id={css.middleButtonLegacy}
              onClick={() => navigate("/klimakipppunkte")}
            >
              Klimakipppunkte
            </div>

            <div
              className={css.buttonLegacy}
              onClick={() => navigate("/wochenchallenge")}
            >
              Wochenchallenge
            </div>
          </div>
        </div>
      ) : (
        <div
          className={css.home}
          onClick={() => setHomeCliked(homeClicked + 1)}
        >
          <div className={css.buttonContainer}>
            <div
              className={css.button}
              onClick={() => navigate("/wochenchallenge")}
            >
              Wochenchallenge
            </div>
            <div
              className={css.button}
              onClick={() => navigate("/klimakipppunkte")}
            >
              Klimakipppunkte
            </div>
            <div
              className={css.button}
              onClick={() => navigate("/klimawissen")}
            >
              Klimawissen
            </div>

            <div
              className={css.button}
              id={css.calc}
              onClick={() => navigate("/rechner")}
            >
              <img src={Calculator} className={css.calc} />
            </div>
          </div>
          <div className={css.logo}>
            <img src={Logo} />
            <img
              src={P}
              className={css.p}
              onClick={() => setPClicked(pClicked + 1)}
            />
          </div>
        </div>
      )}
    </>
  );
}
