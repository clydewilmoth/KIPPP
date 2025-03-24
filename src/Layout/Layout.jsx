import { Outlet, useLocation } from "react-router-dom";
import HomeMenu from "../HomeMenu/HomeMenu";
import css from "./styles.module.css";

//Gesamtes Layout
export default function Layout() {
  const location = useLocation();

  return (
    //Wenn die aktuelle Route = "/" ist, also die Homepage, dann soll der Home Button nicht angezeigt werden
    //Outlet ist je nach aktueller Route aktuelle Unterseite, Bsp.: "/wochenchallenge" Outlet -> Komponente = Wochenchallenge Komponente
    <div className={css.layout}>
      {location.pathname != "/" && <HomeMenu />}
      <Outlet />
    </div>
  );
}
