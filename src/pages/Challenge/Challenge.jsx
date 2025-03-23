import { useEffect } from "react";
import css from "./styles.module.css";

export default function Challenge({
  challenge,
  setChallenge,
  rollsLeft,
  setRollsLeft,
  challenges,
  setChallenges,
}) {
  useEffect(() => {
    //Must equal wochenchallenge.csv's amount of lines
    challenges.length == 50 && setRandomChallenge();
  }, []);

  const setRandomChallenge = async () => {
    if (challenges.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const randomLine = challenges[randomIndex];

    const updatedLines = challenges.filter((_, index) => index !== randomIndex);
    setChallenges(updatedLines);
    setChallenge(randomLine);
    setRollsLeft(rollsLeft - 1);
  };

  return (
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
