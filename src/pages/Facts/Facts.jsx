import { useEffect } from "react";
import css from "./styles.module.css";

export default function Facts({ facts, setFacts, fact, setFact }) {
  useEffect(() => {
    //Must equal klimawissen.csv's amount of lines
    facts.length == 50 && setRandomFact();
  }, []);

  const setRandomFact = () => {
    if (facts.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * facts.length);
    const selectedFact = facts[randomIndex];

    const updatedFacts = facts.filter((fact, index) => index !== randomIndex);
    setFacts(updatedFacts);

    setFact([selectedFact.name, selectedFact.fact]);
  };

  return (
    <div className={css.facts}>
      <div className={css.heading}>{fact[0]}</div>
      <div className={css.card}>
        <div className={css.text}>{fact[1]}</div>
      </div>
      <div className={css.next} onClick={() => setRandomFact()}>
        &#10142;
      </div>
    </div>
  );
}
