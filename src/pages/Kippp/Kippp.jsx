import css from "./styles.module.css";
import Map from "../../assets/mapwhite.svg";
import { useState } from "react";
import Grönland from "../../assets/schmelzen.mp4";
import Korallenriff from "../../assets/korallenriff.mp4";
import Nadelwald from "../../assets/nadelwald.mp4";
import Amazonas from "../../assets/amazonas.mp4";
import Ostantarktis from "../../assets/schmelzen.mp4";
import Wolke from "../../assets/wolke.svg";
import Feuer from "../../assets/feuer.svg";
import Tornado from "../../assets/tornado.svg";
import Tropfen from "../../assets/tropfen.svg";
import Auge from "../../assets/auge.svg";

//Klimakipppunkte Komponente
export default function Kippp() {
  //Zustandvariablen für aktuellen Stand der Karte,
  //Sichtbarkeit der Informationen über ein Auge
  //und Sichtbarkeit des Informationsvideos
  const [mapState, setMapState] = useState(1.5);
  const [infoVisible, setInfoVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [infoState, setInfoState] = useState(1);

  return (
    //Karte verändert sich basierend auf dem aktuellen Kartenzustand,
    //der per Slider anpassbar ist und jederzeit angezeigt wird
    //Abhängig vom geklickten Auge wird Informationsvideo mit Text angezeigt und
    //automatisch auf den darauf folgenden Kartenzustand weitergeleitet
    //Sichtbarkeit von allen Icons hängt von dem Kartenzustand ab
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
        style={{ visibility: infoVisible ? "hidden" : "visible" }}
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
                  infoState == 1
                    ? Grönland
                    : infoState == 2
                    ? Korallenriff
                    : infoState == 3
                    ? Nadelwald
                    : infoState == 4
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
              {infoState == 1
                ? "Grönländisches Eisschild schmilzt"
                : infoState == 2
                ? "Korallenriffe sterben"
                : infoState == 3
                ? "Permafrost schmilzt"
                : infoState == 4
                ? "Amazonas stirbt"
                : infoState == 5
                ? "Ostantarktis schmilzt"
                : ""}
            </div>
            <div className={css.description}>
              {infoState == 1
                ? "Forscher gehen davon aus, dass das grönländische Eisschild immer weiter abschmilzt, wenn die globale Erwärmung in den nächsten 10 bis 20 Jahren nicht deutlich reduziert wird. Bei einer Erwärmung um 1,5 bis 2,5 Grad ist der KIPPPunkt erreicht. Dann schrumpft der Lebensraum der dort lebenden Robben und Schalentiere dramatisch."
                : infoState == 2
                ? "Bei einer Erwärmung um mehr als 2 Grad könnten bereits 99 Prozent aller Korallen verschwunden sein. Korallen stoßen in zu warmem Wasser die Algen ab, die ihnen als Nahrung dienen, und werden weiß. Mehr CO₂ im Wasser führt auch zu einer Versauerung des Wassers, wodurch die Korallen schlechter Kalkskelette aufbauen können und dadurch langsamer und schwächer wachsen."
                : infoState == 3
                ? "Der Permafrost speichert etwa 50 % des weltweiten Bodenkohlenstoffs, doch seine Erwärmung um bis zu 4°C seit 1990 führt zur Freisetzung dieses Kohlenstoffs. Bis 2100 könnte der Permafrost 15 % seines gespeicherten Kohlenstoffs verlieren, was die globale Erwärmung um bis zu 0,27°C verstärken würde. Trotz erhöhter Kohlenstoffaufnahme durch Wälder überwiegen langfristig die Verluste. Ein großes Problem ist, dass auftauender Permafrost eine unkontrollierbare Treibhausgasquelle darstellt, die die Erwärmung auch nach dem Ende menschlicher Emissionen weiter antreibt."
                : infoState == 4
                ? "Bei einer Erderwärmung von 3 °C droht der Amazonas-Regenwald großflächig zu kollabieren. Weniger Niederschlag und häufigere Dürren könnten dazu führen, dass sich der Wald in eine trockene Savanne oder sogar eine wüstenähnliche Landschaft verwandelt. Dies würde nicht nur die Biodiversität drastisch reduzieren, sondern auch enorme Mengen an CO₂ freisetzen, was den Klimawandel weiter beschleunigt. Zudem würden regionale Wetterveränderungen, wie der Zusammenbruch des südamerikanischen Wasserkreislaufs, die Landwirtschaft und Wasserversorgung massiv gefährden."
                : infoState == 5
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

        <img
          src={Auge}
          className={css.openSequence}
          id={css.lvl1}
          style={{ opacity: mapState >= 1.5 ? "100%" : "0%" }}
          onClick={() => {
            setInfoState(1);
            setInfoVisible(true);
            setShowVideo(true);
          }}
        />

        <img
          src={Auge}
          className={css.openSequence}
          id={css.lvl2}
          style={{ opacity: mapState >= 2 ? "100%" : "0%" }}
          onClick={() => {
            setInfoState(2);
            setInfoVisible(true);
            setShowVideo(true);
          }}
        />

        <img
          src={Auge}
          className={css.openSequence}
          id={css.lvl3}
          style={{ opacity: mapState >= 2 ? "100%" : "0%" }}
          onClick={() => {
            setInfoState(3);
            setInfoVisible(true);
            setShowVideo(true);
          }}
        />

        <img
          src={Auge}
          className={css.openSequence}
          id={css.lvl4}
          style={{ opacity: mapState >= 3 ? "100%" : "0%" }}
          onClick={() => {
            setInfoState(4);
            setInfoVisible(true);
            setShowVideo(true);
          }}
        />

        <img
          src={Auge}
          className={css.openSequence}
          id={css.lvl5}
          style={{ opacity: mapState >= 5 ? "100%" : "0%" }}
          onClick={() => {
            setInfoState(5);
            setInfoVisible(true);
            setShowVideo(true);
          }}
        />

        <img
          src={Tropfen}
          className={css.icon}
          id={css.ico15}
          style={{ opacity: mapState >= 1.5 ? "100%" : "0%" }}
        />
        <img
          src={Wolke}
          className={css.icon}
          id={css.ico1}
          style={{ opacity: mapState >= 1.5 ? "100%" : "0%" }}
        />
        <img
          src={Wolke}
          className={css.icon}
          id={css.ico2}
          style={{ opacity: mapState >= 1.5 ? "100%" : "0%" }}
        />
        <img
          src={Wolke}
          className={css.icon}
          id={css.ico3}
          style={{ opacity: mapState >= 1.5 ? "100%" : "0%" }}
        />
        <img
          src={Tornado}
          className={css.icon}
          id={css.ico4}
          style={{ opacity: mapState >= 2 ? "100%" : "0%" }}
        />
        <img
          src={Feuer}
          className={css.icon}
          id={css.ico5}
          style={{ opacity: mapState >= 2 ? "100%" : "0%" }}
        />
        <img
          src={Feuer}
          className={css.icon}
          id={css.ico6}
          style={{ opacity: mapState >= 3 ? "100%" : "0%" }}
        />
        <img
          src={Feuer}
          className={css.icon}
          id={css.ico7}
          style={{ opacity: mapState >= 3 ? "100%" : "0%" }}
        />
        <img
          src={Tornado}
          className={css.icon}
          id={css.ico8}
          style={{ opacity: mapState >= 3 ? "100%" : "0%" }}
        />
        <img
          src={Feuer}
          className={css.icon}
          id={css.ico9}
          style={{ opacity: mapState >= 5 ? "100%" : "0%" }}
        />
        <img
          src={Feuer}
          className={css.icon}
          id={css.ico10}
          style={{ opacity: mapState >= 5 ? "100%" : "0%" }}
        />
        <img
          src={Feuer}
          className={css.icon}
          id={css.ico11}
          style={{ opacity: mapState >= 5 ? "100%" : "0%" }}
        />
        <img
          src={Tornado}
          className={css.icon}
          id={css.ico12}
          style={{ opacity: mapState >= 5 ? "100%" : "0%" }}
        />
        <img
          src={Tornado}
          className={css.icon}
          id={css.ico13}
          style={{ opacity: mapState >= 5 ? "100%" : "0%" }}
        />
        <img
          src={Wolke}
          className={css.icon}
          id={css.ico14}
          style={{ opacity: mapState >= 5 ? "100%" : "0%" }}
        />
        <img
          src={Tropfen}
          className={css.icon}
          id={css.ico16}
          style={{ opacity: mapState >= 5 ? "100%" : "0%" }}
        />
        <img src={Map} className={css.map} />
      </div>
    </div>
  );
}
