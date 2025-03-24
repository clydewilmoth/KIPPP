import { useEffect } from "react";
import css from "./styles.module.css";

//Klimawissen Komponente
//Eingabeparameter der Komponentenfunktion sind gloabale Zustandsvariablen, importiert von der App Komponente
export default function Facts({ facts, setFacts, fact, setFact }) {
  //Ruft beim ersten Render der Komponente automatisch setRandomFact() auf
  useEffect(() => {
    //Must equal klimawissen.csv's amount of lines
    facts.length == 47 && setRandomFact();
  }, []);

  //Bei Methodenaufruf wird der angezeigte Fakt zufällig generiert
  //und der generierte Fakt wird aus dem Pool von allen verfügbaren Fakten -> Zustandsvariable facts gelöscht
  const setRandomFact = () => {
    if (facts.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    const updatedFacts = facts.filter((_, index) => index !== randomIndex);
    setFacts(updatedFacts);
    setFact(randomFact);
  };

  return (
    //Zustandsvariable fact wird angezeigt
    //Bei Klick auf den Reroll Button wird setRandomFact() aufgerufen
    <div className={css.facts}>
      <div className={css.heading}>Wusstest du ...</div>
      <div className={css.card}>
        <div className={css.text}>{fact}</div>
      </div>

      <div className={css.reroll} onClick={() => setRandomFact()}>
        &#x21ba;
      </div>
    </div>
  );
}
