import css from "./styles.module.css";
import Map from "../../assets/mapwhite.svg";
import HomeMenu from "../../HomeMenu/HomeMenu";
import { useState } from "react";
import Grönland from "../../assets/grönland.mp4";
import Korallenriff from "../../assets/korallenriff.mp4";
import Amazonas from "../../assets/amazonas.mp4";
import Ostantarktis from "../../assets/ostantarktis.mp4";

export default function Kippp() {
  const [mapState, setMapState] = useState(1.5);
  const [infoVisible, setInfoVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={css.kippp}>
      <div className={css.mapTitle}>+{mapState}°C</div>

      <input
        type="range"
        min={1.5}
        max={5}
        step={0.5}
        value={mapState}
        className={css.range}
        onChange={(event) => {
          setMapState(event.target.value);
        }}
        disabled={infoVisible ? true : false}
      />

      <div className={css.imageContainer}>
        <div
          className={css.info}
          style={{ visibility: infoVisible ? "visible" : "hidden" }}
        >
          {showVideo ? (
            <div
              className={css.videoContainer}
              onEnded={() => setShowVideo(false)}
            >
              <video
                src={
                  mapState == 1.5
                    ? Grönland
                    : mapState == 2
                    ? Korallenriff
                    : mapState == 3
                    ? Amazonas
                    : Ostantarktis
                }
                className={css.video}
                autoPlay
              />
            </div>
          ) : (
            ""
          )}

          <div className={css.text}>
            <div className={css.heading}>
              {mapState == 1.5
                ? "Grönländisches Eisschild schmilzt"
                : mapState == 2
                ? "Korallenriffe sterben"
                : mapState == 3
                ? "Amazonas stirbt"
                : mapState == 5
                ? "Ostantarktis schmilzt"
                : ""}
            </div>
            <div className={css.description}>
              {mapState == 1.5
                ? "Forscher gehen davon aus, dass das grönländische Eisschild immer weiter abschmilzt, wenn die globale Erwärmung in den nächsten 10 bis 20 Jahren nicht deutlich reduziert wird. Bei einer Erwärmung um 1,5 bis 2,5 Grad ist der KIPPPunkt erreicht. Dann schrumpft der Lebensraum der dort lebenden Robben und Schalentiere dramatisch."
                : mapState == 2
                ? "Bei einer Erwärmung um mehr als 2 Grad könnten bereits 99 Prozent aller Korallen verschwunden sein. Korallen stoßen in zu warmem Wasser die Algen ab, die ihnen als Nahrung dienen, und werden weiß. Mehr CO^2 im Wasser führt auch zu einer Versauerung des Wassers, wodurch die Korallen schlechter Kalkskelette aufbauen können und dadurch langsamer und schwächer wachsen."
                : mapState == 3
                ? "Bei einer Erderwärmung von 3 °C droht der Amazonas-Regenwald großflächig zu kollabieren. Weniger Niederschlag und häufigere Dürren könnten dazu führen, dass sich der Wald in eine trockene Savanne oder sogar eine wüstenähnliche Landschaft verwandelt. Dies würde nicht nur die Biodiversität drastisch reduzieren, sondern auch enorme Mengen an CO₂ freisetzen, was den Klimawandel weiter beschleunigt. Zudem würden regionale Wetterveränderungen, wie der Zusammenbruch des südamerikanischen Wasserkreislaufs, die Landwirtschaft und Wasserversorgung massiv gefährden."
                : mapState == 5
                ? "Bei anhaltender Erderwärmung könnten große Teile des Eisschildes instabil werden, insbesondere der Totten- und Denman-Gletscher, die riesige Mengen an Eis enthalten. Schmelzt dieses Eis, könnte der Meeresspiegel langfristig um mehrere Meter steigen. Während die Westantarktis bereits stark betroffen ist, zeigen neue Studien, dass auch die Ostantarktis Kipppunkte erreichen könnte – mit globalen Folgen für Küstenregionen und Wetterphänomene."
                : ""}
            </div>
            <div
              className={css.next}
              onClick={() => {
                setMapState(
                  mapState == 1.5 ? 2.0 : mapState == 2.0 ? 3.0 : 5.0
                );
                setInfoVisible(false);
              }}
            >
              {mapState == 5.0 ? "Zurück zur Karte" : "Weiter"}
            </div>
          </div>
        </div>
        <div
          className={css.openSequence}
          id={css.lvl1}
          style={{ visibility: mapState == 1.5 ? "visible" : "hidden" }}
          onClick={() => {
            setInfoVisible(true);
            setShowVideo(true);
          }}
        >
          &#9654;
        </div>
        <div
          className={css.openSequence}
          id={css.lvl2}
          style={{ visibility: mapState == 2 ? "visible" : "hidden" }}
          onClick={() => {
            setInfoVisible(true);
            setShowVideo(true);
          }}
        >
          &#9654;
        </div>
        <div
          className={css.openSequence}
          id={css.lvl3}
          style={{ visibility: mapState == 3 ? "visible" : "hidden" }}
          onClick={() => {
            setInfoVisible(true);
            setShowVideo(true);
          }}
        >
          &#9654;
        </div>
        <div
          className={css.openSequence}
          id={css.lvl4}
          style={{ visibility: mapState == 5 ? "visible" : "hidden" }}
          onClick={() => {
            setInfoVisible(true);
            setShowVideo(true);
          }}
        >
          &#9654;
        </div>
        <img src={Map} className={css.map} />
      </div>
      <HomeMenu />
    </div>
  );
}
