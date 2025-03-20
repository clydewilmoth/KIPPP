import { Link } from "react-router-dom";
import css from "./styles.module.css";
import Logo from "../../assets/logo.png";

export default function Home() {
  return (
    <div className={css.home}>
      <img src={Logo} className={css.logo} />
      <div className={css.buttonContainer}>
        <Link to="/facts">
          <div className={css.button}>Klimawissen</div>
        </Link>
        <Link to="/kippp">
          <div className={css.button} id={css.middleButton}>
            Klimakipppunkte
          </div>
        </Link>
        <Link to="/challenge">
          <div className={css.button}>Wochenchallenge</div>
        </Link>
      </div>
    </div>
  );
}
