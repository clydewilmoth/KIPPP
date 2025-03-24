import { useNavigate } from "react-router-dom";
import css from "./styles.module.css";

//Komponente für den Home Button
export default function HomeMenu() {
  const navigate = useNavigate();

  return (
    //Bei Klick wird die Route auf "/" = die Startseite geändert
    <div className={css.homeMenu} onClick={() => navigate("/")}>
      <div className={css.house}>&#8962;</div>
    </div>
  );
}
