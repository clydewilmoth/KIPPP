import { useNavigate } from "react-router-dom";
import css from "./styles.module.css";
import Logo from "../../assets/logo.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={css.home}>
      <img src={Logo} className={css.logo} />
      <div className={css.buttonContainer}>
        <div className={css.button} onClick={() => navigate("/klimawissen")}>
          Klimawissen
        </div>
        <div
          className={css.button}
          id={css.middleButton}
          onClick={() => navigate("/klimakipppunkte")}
        >
          Klimakipppunkte
        </div>
        <div
          className={css.button}
          onClick={() => navigate("/wochenchallenge")}
        >
          Wochenchallenge
        </div>
      </div>
    </div>
  );
}
