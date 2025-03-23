import { useNavigate } from "react-router-dom";
import css from "./styles.module.css";
import Logo from "../../assets/logowhite_withoutp.svg";
import LogoLegacy from "../../assets/logolegacy.png";
import P from "../../assets/p.svg";
import Calculator from "../../assets/calc.svg";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [pClicked, setPClicked] = useState(0);
  const [homeClicked, setHomeCliked] = useState(0);

  return (
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
            <a
              href="https://www.sauberenergie.de/engagement/co2-rechner"
              target="_blank"
            >
              <div className={css.button} id={css.questionMark}>
                <img src={Calculator} className={css.calc} />
              </div>
            </a>
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
