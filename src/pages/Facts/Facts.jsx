import { useEffect } from "react";
import css from "./styles.module.css";

export default function Facts({ facts, setFacts, fact, setFact }) {
  useEffect(() => {
    //Must equal klimawissen.csv's amount of lines
    facts.length == 47 && setRandomFact();
  }, []);

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
    <div className={css.facts}>
      <div className={css.heading}>Wusstest du ...</div>
      <div className={css.card}>
        <div className={css.text}>{fact}</div>
      </div>
      <div className={css.next} onClick={() => setRandomFact()}>
        &#10142;
      </div>
    </div>
  );
}
