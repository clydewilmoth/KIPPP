import { Link } from "react-router-dom";
import css from "./styles.module.css";
import Logo from "../../assets/logo.png";

export default function Home() {
  return (
    <div className={css.home}>
      <img src={Logo} className={css.logo} />
      <div className={css.buttonContainer}>
        <div className={css.button}>
          <Link to="/facts">Facts</Link>
        </div>
        <div className={css.button} id={css.middleButton}>
          <Link to="/kippp">Kippp</Link>
        </div>
        <div className={css.button}>
          <Link to="/challenge">Challenge</Link>
        </div>
      </div>
    </div>
  );
}
