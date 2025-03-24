import { useEffect } from "react";
import css from "./styles.module.css";

//Wochenchallenge Komponente
//Eingabeparameter der Komponentenfunktion sind gloabale Zustandsvariablen, importiert von der App Komponente
export default function Challenge({
  challenge,
  setChallenge,
  rollsLeft,
  setRollsLeft,
  challenges,
  setChallenges,
}) {
  //Ruft beim ersten Render der Komponente automatisch setRandomChallenge() auf
  useEffect(() => {
    //Must equal wochenchallenge.csv's amount of lines
    challenges.length == 30 && setRandomChallenge();
  }, []);

  //Bei Methodenaufruf wird die angezeigte Challenge zufällig generiert
  //und die generierte Challenge wird aus dem Pool von allen verfügbaren Challenges -> Zustandsvariable challenges gelöscht
  //Reroll Counter wird um eins runtergesetzt -> Insgesamt nach Start der App maximal 3 mal rerollbar
  const setRandomChallenge = async () => {
    if (challenges.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const randomChallenge = challenges[randomIndex];

    const updatedChallenges = challenges.filter(
      (_, index) => index !== randomIndex
    );
    setChallenges(updatedChallenges);
    setChallenge(randomChallenge);
    setRollsLeft(rollsLeft - 1);
  };

  return (
    //Zustandsvariable challenge und rollsLeft werden angezeigt
    //Bei Klick auf den Reroll Button wird setRandomChallenge() aufgerufen

    <div className={css.challenge}>
      <div className={css.heading}>Wochenchallenge</div>
      <div className={css.card}>
        <div className={css.text}>{challenge}</div>
      </div>
      <div className={css.rerollContainer}>
        <div className={css.rerollsLeft}>{rollsLeft}/3</div>
        <div
          className={css.reroll}
          onClick={() => rollsLeft > 0 && setRandomChallenge()}
        >
          &#x21ba;
        </div>
      </div>
    </div>
  );
}
