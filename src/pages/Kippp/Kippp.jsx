import css from "./styles.module.css";
import Map from "../../assets/mapwhite.svg";
import HomeMenu from "../../HomeMenu/HomeMenu";
import { useState } from "react";

export default function Kippp() {
  const [mapState, setMapState] = useState(1.5);

  return (
    <div className={css.kippp}>
      <div className={css.mapTitle}>+{mapState}°C</div>
      <input
        type="range"
        min="1.5"
        max="5"
        step="0.5"
        onChange={(event) => {
          setMapState(event.target.value);
        }}
      />
      <div className={css.imageContainer}>
        <div
          className={css.openSequence}
          id={css.lvl1}
          style={{ visibility: mapState == 1.5 ? "visible" : "hidden" }}
        >
          &#9654;
        </div>
        <div
          className={css.openSequence}
          id={css.lvl2}
          style={{ visibility: mapState == 2 ? "visible" : "hidden" }}
        >
          &#9654;
        </div>
        <div
          className={css.openSequence}
          id={css.lvl3}
          style={{ visibility: mapState == 3 ? "visible" : "hidden" }}
        >
          &#9654;
        </div>
        <div
          className={css.openSequence}
          id={css.lvl4}
          style={{ visibility: mapState == 5 ? "visible" : "hidden" }}
        >
          &#9654;
        </div>
        <img src={Map} className={css.map} />
      </div>
      <HomeMenu />
    </div>
  );
}
