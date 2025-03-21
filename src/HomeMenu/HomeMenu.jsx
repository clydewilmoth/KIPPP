import { useNavigate } from "react-router-dom";
import css from "./styles.module.css";

export default function HomeMenu() {
  const navigate = useNavigate();

  return (
    <div className={css.homeMenu} onClick={() => navigate("/")}>
      Hauptmenü
    </div>
  );
}
