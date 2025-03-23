import { Outlet, useLocation } from "react-router-dom";
import HomeMenu from "../HomeMenu/HomeMenu";
import css from "./styles.module.css";

export default function Layout() {
  const location = useLocation();

  return (
    <div className={css.layout}>
      {location.pathname != "/" && <HomeMenu />}
      <Outlet />
    </div>
  );
}
