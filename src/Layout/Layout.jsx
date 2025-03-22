import { Outlet, useLocation } from "react-router-dom";
import HomeMenu from "../HomeMenu/HomeMenu";
import css from "./styles.module.css";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div className={css.layout}>
      {location.pathname != "/" && <HomeMenu />}
      <Outlet />
    </div>
  );
}
