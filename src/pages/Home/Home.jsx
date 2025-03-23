import { useNavigate } from "react-router-dom";
import css from "./styles.module.css";
import Logo from "../../assets/logowhite_withoutp.svg";
import P from "../../assets/p.svg";
import Calculator from "../../assets/calc.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={css.home}>
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
        <div className={css.button} onClick={() => navigate("/klimawissen")}>
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
        <img src={P} className={css.p} />
      </div>
    </div>
  );
}
