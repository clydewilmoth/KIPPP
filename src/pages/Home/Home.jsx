import { useNavigate } from "react-router-dom";
import css from "./styles.module.css";
import Logo from "../../assets/logowhite_withoutp.svg";
import P from "../../assets/p.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={css.home}>
      <div className={css.buttonContainer}>
        <div
          className={css.button}
          onClick={() => navigate("/wochenchallenge")}
        >
          Wochen Challenge
        </div>
        <div
          className={css.button}
          id={css.middleButton}
          onClick={() => navigate("/klimakipppunkte")}
        >
          Klimakipppunkte
        </div>
        <div className={css.button} onClick={() => navigate("/klimawissen")}>
          Klimawissen
        </div>
      </div>
      <div className={css.logo}>
        <img src={Logo} />
        <img src={P} className={css.p} />
      </div>
    </div>
  );
}
